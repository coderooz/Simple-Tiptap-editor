/** @format */

// components/editor/bubbleMenus/TextBubbleMenu.tsx
import { Editor } from "@tiptap/react";
import { Bold, Italic, Underline, Link2 } from "lucide-react";
import { BaseBubbleMenu } from "@/bubbleMenu/BaseBubbleMenu";

export const TextBubbleMenu = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;
  const shouldShow = editor.isActive("paragraph") || editor.isActive("text");

  return (
    <BaseBubbleMenu editor={editor} shouldShow={shouldShow}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded-md ${
          editor.isActive("bold") ? "bg-gray-200 dark:bg-gray-700" : ""
        }`}
      >
        <Bold size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded-md ${
          editor.isActive("italic") ? "bg-gray-200 dark:bg-gray-700" : ""
        }`}
      >
        <Italic size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded-md ${
          editor.isActive("underline") ? "bg-gray-200 dark:bg-gray-700" : ""
        }`}
      >
        <Underline size={16} />
      </button>
      <button
        onClick={() =>
          editor.chain().focus().extendMarkRange("link").unsetLink().run()
        }
        className='p-2 rounded-md'
      >
        <Link2 size={16} />
      </button>
    </BaseBubbleMenu>
  );
};
