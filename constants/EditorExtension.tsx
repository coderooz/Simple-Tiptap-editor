/** @format
 * @/constants/EditorExtension.tsx
 */

import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Link from "@tiptap/extension-link";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import Underline from "@tiptap/extension-underline";
import Code from "@tiptap/extension-code";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { Heading as BaseHeading } from "@tiptap/extension-heading";
import { mergeAttributes } from "@tiptap/core";

import { CharacterCount, UndoRedo } from "@tiptap/extensions";
import { BulletList, ListItem, OrderedList } from "@tiptap/extension-list";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import {
  Details,
  DetailsContent,
  DetailsSummary,
} from "@tiptap/extension-details";
import { TableKit } from "@tiptap/extension-table";

import {
  TextStyle,
  Color,
  BackgroundColor,
  FontFamily,
  FontSize,
  LineHeight,
} from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";
import FileHandler from "@tiptap/extension-file-handler";

const baseAttr = {
  HTMLAttributes: {
    class: "editor-text prose prose-sm md:prose md:max-w-none",
  },
};

async function fileUploader(file: File, currentEditor: any, pos: number) {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    currentEditor
      .chain()
      .insertContentAt(pos, {
        type: "image",
        attrs: {
          src: fileReader.result,
        },
      })
      .focus()
      .run();
  };
}

/** Custom Heading with per-level classes (Tailwind included) */
const Heading = BaseHeading.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      levels: [1, 2, 3, 4, 5, 6] as number[],
      HTMLAttributes: {},
      levelClassMap: {
        1: "text-4xl font-bold leading-tight mt-0 mb-4",
        2: "text-3xl font-semibold leading-snug mt-6 mb-3",
        3: "text-2xl font-semibold leading-snug mt-6 mb-3",
        4: "text-xl font-medium mt-6 mb-2",
        5: "text-lg font-medium mt-6 mb-2",
        6: "text-base font-normal mt-6 mb-1",
      } as Record<number, string>,
    };
  },
  renderHTML({ node, HTMLAttributes }) {
    const level = node.attrs.level;
    const { levelClassMap } = this.options as any;
    const levelClass = levelClassMap[level] || "";
    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: levelClass,
      }),
      0,
    ];
  },
});

export const DEFAULT_EXTENSIONS = [
  Document.configure(baseAttr),
  Paragraph.configure({
    HTMLAttributes: {
      class: "mb-4 mt-0",
    },
  }),
  Text.configure(baseAttr),
  Italic.configure(baseAttr),
  Bold.configure(baseAttr),
  Underline.configure(baseAttr),
  Link.configure({
    openOnClick: false,
    autolink: true,
    defaultProtocol: "https",
    HTMLAttributes: {
      class: "text-blue-600 hover:underline",
    },
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
    alignments: ["left", "center", "right", "justify"],
  }),
  UndoRedo.configure({ depth: 50, newGroupDelay: 500 }),
  Typography,
];

export const COMPLEX_EXTENSIONS = [
  ...DEFAULT_EXTENSIONS,
  Code.configure({
    HTMLAttributes: {
      class: "bg-gray-100 px-1 rounded text-sm font-mono",
    },
  }),
  Highlight.configure({
    multicolor: true,
    HTMLAttributes: {
      class: "bg-yellow-200 text-yellow-900",
    },
  }),
  Strike.configure({
    HTMLAttributes: {
      class: "line-through text-gray-500",
    },
  }),
  Subscript.configure({
    HTMLAttributes: {
      class: "align-sub",
    },
  }),
  Superscript.configure({
    HTMLAttributes: {
      class: "align-super",
    },
  }),
  TextStyle.configure(baseAttr),
  Color.configure({ types: ["textStyle"] }),
  BackgroundColor.configure({ types: ["textStyle"] }),
  Heading, // Use our custom Heading
  FontFamily.configure({
    types: ["textStyle"],
  }),
  FontSize.configure({
    types: ["textStyle"],
  }),
  LineHeight.configure({
    types: ["textStyle"],
  }),
  BulletList.configure({
    itemTypeName: "listItem",
    keepAttributes: true,
    keepMarks: true,
    HTMLAttributes: {
      class: "list-disc list-inside mb-4 space-y-2",
    },
  }),
  OrderedList.configure({
    itemTypeName: "listItem",
    keepMarks: true,
    keepAttributes: true,
    HTMLAttributes: {
      class: "list-decimal list-inside space-y-2",
    },
  }),
  ListItem.configure({
    HTMLAttributes: {
      class: "mb-1",
    },
  }),
  Details.configure({
    persist: true,
    ...baseAttr,
    HTMLAttributes: {
      class: "border rounded-md p-4 my-4 bg-gray-50",
    },
  }),
  DetailsContent,
  DetailsSummary.configure({
    HTMLAttributes: {
      class: "font-semibold cursor-pointer",
    },
  }),
  HorizontalRule.configure({
    HTMLAttributes: {
      class: "my-6 border-gray-300",
    },
  }),
  Image.configure({
    HTMLAttributes: {
      class: "my-4 max-w-full rounded",
    },
  }),
  FileHandler.configure({
    allowedMimeTypes: ["image/png", "image/jpeg", "image/gif", "image/webp"],
    onDrop: (currentEditor, files, pos) => {
      files.forEach((file) => {
        fileUploader(file, currentEditor, pos);
      });
    },
    onPaste: (currentEditor, files, htmlContent) => {
      files.forEach((file) => {
        if (htmlContent) {
          return false;
        }
        fileUploader(file, currentEditor, currentEditor.state.selection.anchor);
      });
    },
  }),
  TableKit.configure({}),
];

export const BLOG_EXTENSIONS = [...COMPLEX_EXTENSIONS];

export const DOCUMENT_EXTENSIONS = [
  ...COMPLEX_EXTENSIONS,
  CharacterCount.configure({
    mode: "textSize",
  }),
];

export const COMMENT_EXTENSIONS = [
  ...DEFAULT_EXTENSIONS,
  CharacterCount.configure({
    limit: 2500,
    mode: "nodeSize",
  }),
];
