/** @format */

import { Extension } from "@tiptap/core";

export const FindAndRemove = Extension.create({
  name: "findAndRemove",

  addCommands() {
    return {
      findText:
        (text: string) =>
        ({ editor }) => {
          const json = editor.getJSON();
          const jsonString = JSON.stringify(json);
          return jsonString.includes(text);
        },

      removeText:
        (text: string) =>
        ({ editor }) => {
          const html = editor.getHTML();
          const replaced = html.replaceAll(text, "");
          editor.commands.setContent(replaced, false);
          return true;
        },
    };
  },
});
