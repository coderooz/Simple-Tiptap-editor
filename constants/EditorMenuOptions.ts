/** @format
 * @file EditorMenuOptions.ts
 * @description Defines the configuration for the editor toolbar menu items (buttons, dropdowns, etc.)
 * used in the TipTap rich text editor. Includes menu item types, groupings, and their behaviors.
 */
import React from "react";
import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Type,
  ArrowDownAZ,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
  TextAlignJustify,
  Subscript,
  Superscript,
  Highlighter,
  ListOrdered,
  List,
  Undo,
  Redo,
  Heading,
  NotebookTabs,
  SquareDashed,
  Square,
  SquareDashedTopSolid,
  SquareDashedBottom,
  ListIndentIncrease,
  ListIndentDecrease,
  Baseline,
  PaintBucket,
  Youtube,
  Table,
  TableColumnsSplit,
  TableRowsSplit,
  Image,
  Link,
} from "lucide-react";
import YoutubeModel from "@/components/models/youtube";
import ImageModel from "@/components/models/image";

/**
 * Defines possible menu button group categories.
 * These help organize buttons in the toolbar UI.
 */
export type MenuBtnGroups =
  | "styling" // Bold, Italic, Underline, Strike, etc.
  | "alignment" // Text alignment buttons (left, center, right)
  | "lists" // Ordered/unordered lists
  | "history" // Undo/Redo
  | "fonts" // Font size, font family, headings
  | "insert"; // Code blocks, links, images, etc.

/**
 * Defines supported menu item UI types.
 */
export type MenuItemType = "button" | "dropdown" | "input" | "model" | "custom";

/**
 * Base interface for all menu items.
 */
export interface MenuBase {
  /** Display name of the menu item (e.g., "Bold", "Font Size"). */
  title: string;

  /** Which group this item belongs to (styling, fonts, etc.). */
  group: MenuBtnGroups;

  /** The type of menu item (button, dropdown, etc.). */
  type: MenuItemType;

  /** Optional Lucide icon component representing the menu action. */
  icon?: React.ElementType;
}

/**
 * Represents a clickable button menu item.
 */
export interface MenuButton extends MenuBase {
  type: "button";

  /**
   * Optional function to determine if this button is currently active.
   * @param editor The TipTap Editor instance.
   * @returns Boolean indicating if the item is active.
   */
  isActive?: (editor: Editor) => boolean;

  /**
   * Function to perform the action when the button is clicked.
   * @param editor The TipTap Editor instance.
   */
  action?: (editor: Editor) => void;
}

/**
 * Represents a dropdown menu item (e.g., font size, heading levels).
 */
export interface MenuDropdown extends MenuBase {
  type: "dropdown";

  /** List of options shown in the dropdown menu. */
  options: {
    label: string;
    value: string | number;
    icon?: React.ElementType;
  }[];

  /**
   * Function called when a dropdown option is selected.
   * @param editor The TipTap Editor instance.
   * @param value The selected option value.
   */
  onSelect: (editor: Editor, value: string | number) => void;

  /**
   * Optional function to get the currently selected value.
   * @param editor The TipTap Editor instance.
   * @returns The current value for this dropdown.
   */
  getValue?: (editor: Editor) => string;
}

export interface MenuInput extends MenuBase {
  type: "input";
  inputType:
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  class?: string;
  onSelect: (editor: Editor, value: string | number) => void;
  getValue?: (editor: Editor) => string;
}

export interface MenuModel extends MenuBase {
  type: "model";
  model: {
    title: string;
    description?: string;
    content: (editor: Editor) => React.ReactNode | void;
    footer?: (editor: Editor) => React.ReactNode | void;
  };
  isActive?: (editor: Editor) => boolean;
}

/** Union type for all supported menu item types. */
export type MenuItem = MenuButton | MenuDropdown | MenuInput | MenuModel;

/**
 * Main toolbar configuration for editor menu buttons.
 * These are grouped by functionality (fonts, styling, history, etc.)
 */
export const MENU_BTN_ITEMS: MenuItem[] = [
  // =============================
  // 🔄 Undo/Redo
  // =============================
  {
    title: "Undo",
    icon: Undo,
    group: "history",
    type: "button",
    isActive: (editor) => editor.isActive("undo"),
    action: (editor) => editor.chain().focus().undo().run(),
  },
  {
    title: "Redo",
    icon: Redo,
    group: "history",
    type: "button",
    isActive: (editor) => editor.isActive("redo"),
    action: (editor) => editor.chain().focus().redo().run(),
  },

  // =============================
  // 💪 Basic Styling Buttons
  // =============================
  {
    title: "Bold",
    icon: Bold,
    group: "styling",
    type: "button",
    isActive: (editor) => editor.isActive("bold"),
    action: (editor) => editor.chain().focus().toggleBold().run(),
  },
  {
    title: "Italic",
    icon: Italic,
    group: "styling",
    type: "button",
    isActive: (editor) => editor.isActive("italic"),
    action: (editor) => editor.chain().focus().toggleItalic().run(),
  },
  {
    title: "Underline",
    icon: Underline,
    group: "styling",
    type: "button",
    isActive: (editor) => editor.isActive("underline"),
    action: (editor) => editor.chain().focus().toggleUnderline().run(),
  },
  {
    title: "Strike",
    icon: Strikethrough,
    group: "styling",
    type: "button",
    isActive: (editor) => editor.isActive("strike"),
    action: (editor) => editor.chain().focus().toggleStrike().run(),
  },
];

export const COMPLEX_MENU: MenuItem[] = [
  {
    title: "Subscript",
    icon: Subscript,
    group: "styling",
    type: "button",
    isActive: (editor) => editor.isActive("subscript"),
    action: (editor) => editor.chain().focus().toggleSubscript().run(),
  },
  {
    title: "Superscript",
    icon: Superscript,
    group: "styling",
    type: "button",
    isActive: (editor) => editor.isActive("superscript"),
    action: (editor) => editor.chain().focus().toggleSuperscript().run(),
  },
  {
    title: "Highlighter",
    icon: Highlighter,
    group: "fonts",
    type: "button",
    isActive: (editor) => editor.isActive("highlight"),
    action: (editor) => editor.chain().focus().toggleHighlight().run(),
  },
  {
    title: "Font Family",
    type: "dropdown",
    group: "fonts",
    icon: Type,
    options: [
      { label: "Default", value: "inherit" },
      { label: "Serif", value: "serif" },
      { label: "Sans", value: "sans-serif" },
      { label: "Monospace", value: "monospace" },
      { label: "Cursive", value: "cursive" },
    ],
    onSelect: (editor, value) => {
      editor.chain().focus().setFontFamily(value.toString()).run();
    },
    getValue: (editor) =>
      editor.getAttributes("textStyle").fontFamily || "inherit",
  },
  {
    title: "Font Size",
    type: "dropdown",
    group: "fonts",
    icon: ArrowDownAZ,
    options: [
      { label: "12px", value: "12px" },
      { label: "14px", value: "14px" },
      { label: "16px", value: "16px" },
      { label: "18px", value: "18px" },
      { label: "20px", value: "20px" },
    ],
    onSelect: (editor, value) => {
      editor.chain().focus().setFontSize(value.toString()).run();
    },
    getValue: (editor) => editor.getAttributes("textStyle").fontSize,
  },
  {
    title: "Heading",
    type: "dropdown",
    group: "fonts",
    icon: Heading,
    options: [
      { label: "None", value: "0" },
      { label: "H1", value: "1" },
      { label: "H2", value: "2" },
      { label: "H3", value: "3" },
      { label: "H4", value: "4" },
      { label: "H5", value: "5" },
      { label: "H6", value: "6" },
    ],
    onSelect: (editor, value) => {
      const val = Number(value) as 0 | 1 | 2 | 3 | 4 | 5 | 6;

      if (val === 0) {
        // Remove heading / switch to paragraph
        editor.chain().focus().setParagraph().run();
      } else {
        editor.chain().focus().setHeading({ level: val }).run();
      }
    },
    getValue: (editor) => {
      const level = editor.getAttributes("heading").level;
      return level ? level.toString() : null;
    },
  },
  {
    title: "Code",
    icon: Code,
    group: "insert",
    type: "button",
    isActive: (editor) => editor.isActive("code"),
    action: (editor) => editor.chain().focus().toggleCode().run(),
  },
  {
    title: "Details",
    icon: NotebookTabs,
    group: "insert",
    type: "button",
    isActive: (editor) => editor.isActive("details"),
    action: (editor) => editor.chain().focus().setDetails(),
  },
  {
    title: "Bullet List",
    icon: List,
    group: "lists",
    type: "button",
    isActive: (editor) => editor.isActive("bulletList"),
    action: (editor) => editor.chain().focus().toggleBulletList().run(),
  },
  {
    title: "Ordered List",
    icon: ListOrdered,
    group: "lists",
    type: "button",
    isActive: (editor) => editor.isActive("orderedList"),
    action: (editor) => editor.chain().focus().toggleOrderedList().run(),
  },
  {
    title: "Indent",
    icon: ListIndentDecrease,
    group: "lists",
    type: "button",
    action: (editor) => {
      editor.chain().focus().sinkListItem("listItem").run();
      const data = editor.getHTML();
      console.log(data);
    },
  },
  {
    title: "Outdent",
    icon: ListIndentIncrease,
    group: "lists",
    type: "button",
    action: (editor) => editor.chain().focus().liftListItem("listItem").run(),
  },
  {
    title: "Color",
    icon: Baseline,
    group: "styling",
    type: "input",
    inputType: "color",
    onSelect(editor, value) {
      editor
        .chain()
        .focus()
        .setColor(value as string)
        .run();
    },
    getValue(editor) {
      return editor.getAttributes("textStyle").color || "#000000";
    },
    class: "w-10",
  },
  {
    title: "Background Color",
    icon: PaintBucket,
    group: "styling",
    type: "input",
    inputType: "color",
    onSelect(editor, value) {
      editor
        .chain()
        .focus()
        .setBackgroundColor(value as string)
        .run();
    },
    getValue(editor) {
      return editor.getAttributes("textStyle").backgroundColor || "#ffffff";
    },
    class: "w-10",
  },
  {
    title: "Youtube",
    icon: Youtube,
    group: "insert",
    type: "model",
    model: {
      title: "Insert YouTube Video",
      description: "Embed a YouTube video by entering its URL and size.",
      content: (editor) => React.createElement(YoutubeModel, { editor }),
    },
  },
  {
    type: "button",
    icon: AlignLeft,
    title: "Align left",
    group: "alignment",
    isActive: (editor) => editor.isActive({ textAlign: "left" }),
    action: (editor) => editor.chain().focus().setTextAlign("left").run(),
  },
  {
    type: "button",
    icon: AlignCenter,
    title: "Align Center",
    group: "alignment",
    isActive: (editor) => editor.isActive({ textAlign: "center" }),
    action: (editor) => editor.chain().focus().setTextAlign("center").run(),
  },
  {
    type: "button",
    icon: AlignRight,
    title: "Align Right",
    group: "alignment",
    isActive: (editor) => editor.isActive({ textAlign: "right" }),
    action: (editor) => editor.chain().focus().setTextAlign("right").run(),
  },
  {
    type: "button",
    icon: TextAlignJustify,
    title: "Justify center",
    group: "alignment",
    isActive: (editor) => editor.isActive({ textAlign: "justify" }),
    action: (editor) => editor.chain().focus().setTextAlign("justify").run(),
  },
  {
    title: "Table",
    group: "insert",
    icon: Table,
    type: "button",
    // isActive(editor) {},
    action: (editor) =>
      editor
        .chain()
        .focus()
        .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
        .run(),
  },
  {
    title: "Image",
    icon: Image,
    type: "model",
    group: "insert",
    // isActive: (editor) => editor.,
    model: {
      title: "Image Insert",
      description: "Add image in the document",
      content: (editor) => React.createElement(ImageModel, { editor }),
    },
  },
  {
    title: "Link",
    icon: Link,
    type: "model",
    group: "insert",
    model: {
      title: "Add Link",
      content(editor) {
          
      },
    }
  }
];

/**
 * Full menu list for the editor, including additional content-related tools.
 */
export const CONTENT_MENU: MenuItem[] = [...MENU_BTN_ITEMS, ...COMPLEX_MENU];
