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
import Heading from "@tiptap/extension-heading";
import { CharacterCount, UndoRedo } from "@tiptap/extensions";
import { OrderedList, ListItem } from "@tiptap/extension-list";
import { FindAndRemoveExtension } from "@/components/extensions/FindAndRemoveExtension";
import {
  TextStyle,
  Color,
  BackgroundColor,
  FontFamily,
  FontSize,
  LineHeight,
} from "@tiptap/extension-text-style";

const baseAttr = { HTMLAttributes: { class: "editor-text" } };

export const DEFAULT_EXTENSIONS = [
  Document.configure(baseAttr),
  Paragraph.configure(baseAttr),
  Text.configure(baseAttr),
  Italic.configure(baseAttr),
  Bold.configure(baseAttr),
  Underline.configure(baseAttr),
  Link.configure({
    openOnClick: false,
    autolink: true,
    defaultProtocol: "https",
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
  Code,
  Highlight,
  Strike.configure(baseAttr),
  Subscript.configure(baseAttr),
  Superscript.configure(baseAttr),
  TextStyle.configure(baseAttr),
  Color.configure({ types: ["textStyle"] }),
  BackgroundColor.configure({ types: ["textStyle"] }),
  Heading.configure({ levels: [1, 2, 3, 4, 5, 6], ...baseAttr }),
  FontFamily.configure({ types: ["textStyle"] }),
  FontSize.configure({ types: ["textStyle"] }),
  LineHeight.configure({ types: ["textStyle"] }),
  OrderedList.configure({
    itemTypeName: "listItem",
    keepMarks: true,
    keepAttributes: true,
    HTMLAttributes: {
      class: "editor-ordered-list",
    },
  }),

  ListItem.configure({
    HTMLAttributes: {
      class: "editor-list-item",
    },
  }),
];

export const BLOG_EXTENSIONS = [...COMPLEX_EXTENSIONS];

export const DOCUMENT_EXTENSIONS = [
  ...COMPLEX_EXTENSIONS,
  CharacterCount.configure({
    mode: "textSize",
  }),
  FindAndRemoveExtension,
];

export const COMMENT_EXTENSIONS = [
  ...DEFAULT_EXTENSIONS,
  CharacterCount.configure({
    limit: 2500,
    mode: "nodeSize",
  }),
];
