/** @format */

// components/editor/BubbleMenus/ImageBubbleMenu.tsx
import { Editor } from "@tiptap/react";
import {
  Trash2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Maximize2,
} from "lucide-react";
import { BaseBubbleMenu } from "@/bubbleMenu/BaseBubbleMenu";

export const ImageBubbleMenu = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;
  const shouldShow = editor.isActive("image");

  const update = (attrs: Record<string, any>) =>
    editor.chain().focus().updateAttributes("image", attrs).run();

  return (
    <BaseBubbleMenu editor={editor} shouldShow={shouldShow}>
      <button onClick={() => update({ align: "left" })}>
        <AlignLeft size={16} />
      </button>
      <button onClick={() => update({ align: "center" })}>
        <AlignCenter size={16} />
      </button>
      <button onClick={() => update({ align: "right" })}>
        <AlignRight size={16} />
      </button>
      <button onClick={() => update({ width: "50%" })}>
        <Maximize2 size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().deleteSelection().run()}
        className='text-red-500'
      >
        <Trash2 size={16} />
      </button>
    </BaseBubbleMenu>
  );
};
