/** @format */

// components/editor/BubbleMenus/TableBubbleMenu.tsx
import { Editor } from "@tiptap/react";
import { Plus, Minus, Trash2 } from "lucide-react";
import { BaseBubbleMenu } from "@/bubbleMenu/BaseBubbleMenu";

export const TableBubbleMenu = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;
  const shouldShow = editor.isActive("table");

  return (
    <BaseBubbleMenu editor={editor} shouldShow={shouldShow}>
      <button onClick={() => editor.chain().focus().addColumnAfter().run()}>
        <Plus size={16} /> Col
      </button>
      <button onClick={() => editor.chain().focus().addRowAfter().run()}>
        <Plus size={16} /> Row
      </button>
      <button onClick={() => editor.chain().focus().deleteColumn().run()}>
        <Minus size={16} /> Col
      </button>
      <button onClick={() => editor.chain().focus().deleteRow().run()}>
        <Minus size={16} /> Row
      </button>
      <button
        onClick={() => editor.chain().focus().deleteTable().run()}
        className='text-red-500'
      >
        <Trash2 size={16} />
      </button>
    </BaseBubbleMenu>
  );
};
