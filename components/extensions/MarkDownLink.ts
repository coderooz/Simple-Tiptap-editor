/** @format
 * @/extensions/markdownLink.ts
 */

import { Link } from "@tiptap/extension-link";
import { InputRule, textblockTypeInputRule } from "@tiptap/core";

const MARKDOWN_LINK_REGEX = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/;

export const MarkdownLink = Link.extend({
  addInputRules() {
    return [
      new InputRule({
        find: MARKDOWN_LINK_REGEX,
        handler: ({ state, range, match, chain }) => {
          const [, text, href] = match;

          // Replace [text](href) with text linked
          const start = range.from;
          const end = range.to;

          chain()
            .insertContentAt({ from: start, to: end }, [
              {
                type: "text",
                text,
                marks: [{ type: "link", attrs: { href } }],
              },
              { type: "text", text: " " },
            ])
            .run();
        },
      }),
    ];
  },
});
