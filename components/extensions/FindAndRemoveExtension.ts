/** @format
 * @/components/extensions/FindAndRemoveExtension.ts
 *
 * Find & Remove TipTap extension (TypeScript)
 */

import { Extension } from "@tiptap/core";

export interface FindAndRemoveOptions {
  caseSensitive?: boolean;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    findAndRemove: {
      findText: (text: string) => ReturnType;
      removeText: (text: string) => ReturnType;
    };
  }

  interface EditorStorage {
    findAndRemove?: {
      matches: { from: number; to: number; text: string }[];
    };
  }
}

export const FindAndRemoveExtension = Extension.create<FindAndRemoveOptions>({
  name: "findAndRemove",

  addOptions() {
    return {
      caseSensitive: false,
    } as FindAndRemoveOptions;
  },

  addStorage() {
    return {
      // storage.visible via editor.storage.findAndRemove
      matches: [] as { from: number; to: number; text: string }[],
    };
  },

  addCommands() {
    return {
      /**
       * Populates editor.storage.findAndRemove.matches with all matches.
       * After calling `editor.commands.findText("foo")`, read `editor.storage.findAndRemove.matches`.
       */
      findText:
        (text: string) =>
        ({ state, tr }) => {
          if (!text || !text.trim()) {
            // clear previous matches
            // @ts-ignore
            this.storage.findAndRemove.matches = [];
            return true;
          }

          const regexFlags = this.options.caseSensitive ? "g" : "gi";
          const regex = new RegExp(text, regexFlags);

          const matches: { from: number; to: number; text: string }[] = [];

          state.doc.descendants((node, pos) => {
            if (!node.isText) return true;

            const nodeText = node.text ?? "";
            // reset lastIndex to avoid reuse of same regex object across nodes
            regex.lastIndex = 0;
            let m: RegExpExecArray | null;
            while ((m = regex.exec(nodeText)) !== null) {
              const start = pos + m.index;
              const end = start + m[0].length;
              matches.push({ from: start, to: end, text: m[0] });
              // in case of zero-length match to avoid infinite loop (edge-case)
              if (m.index === regex.lastIndex) regex.lastIndex++;
            }
            return true;
          });

          // @ts-ignore - TipTap merges storages; we ensure storage exists
          this.storage.findAndRemove = this.storage.findAndRemove || {
            matches: [],
          };
          // write matches into storage (so UI can read them)
          // note: avoid mutating previous array reference in case UI compares by reference
          this.storage.findAndRemove.matches = matches;

          return true;
        },

      /**
       * Removes all occurrences of `text` found by same regex strategy.
       * Returns true and dispatches a transaction that deletes all matches.
       */
      removeText:
        (text: string) =>
        ({ state, dispatch }) => {
          if (!text || !text.trim()) return false;

          const regexFlags = this.options.caseSensitive ? "g" : "gi";
          const regex = new RegExp(text, regexFlags);

          const positions: { from: number; to: number; text: string }[] = [];

          state.doc.descendants((node, pos) => {
            if (!node.isText) return true;

            const nodeText = node.text ?? "";
            regex.lastIndex = 0;
            let m: RegExpExecArray | null;
            while ((m = regex.exec(nodeText)) !== null) {
              const start = pos + m.index;
              const end = start + m[0].length;
              positions.push({ from: start, to: end, text: m[0] });
              if (m.index === regex.lastIndex) regex.lastIndex++;
            }
            return true;
          });

          if (positions.length === 0) {
            // clear storage to reflect "no matches"
            // @ts-ignore
            this.storage.findAndRemove = { matches: [] };
            return false;
          }

          // delete from the end to the start so earlier deletions don't shift later positions
          const tr = state.tr;
          positions.reverse().forEach((p) => {
            tr.delete(p.from, p.to);
          });

          if (dispatch) dispatch(tr.scrollIntoView());
          // update storage
          // @ts-ignore
          this.storage.findAndRemove = { matches: [] };

          return true;
        },
    };
  },
});
