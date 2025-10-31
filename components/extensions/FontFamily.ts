/** @format */

import { Extension } from "@tiptap/core";

export const FontFamily = Extension.create({
  name: "fontFamily",

  addOptions() {
    return {
      types: ["textStyle"],
      fontFamilies: [
        "Arial",
        "Georgia",
        "Courier New",
        "Times New Roman",
        "Verdana",
      ],
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            renderHTML: (attrs) => {
              if (!attrs.fontFamily) return {};
              return { style: `font-family: ${attrs.fontFamily}` };
            },
            parseHTML: (element) =>
              element.style.fontFamily.replace(/['"]/g, ""),
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setFontFamily:
        (fontFamily: string) =>
        ({ chain }) => {
          return chain().setMark("textStyle", { fontFamily }).run();
        },
    };
  },
});
