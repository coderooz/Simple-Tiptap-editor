/** @format */

// components/editor/BubbleMenus/YoutubeBubbleMenu.tsx
import { Editor } from "@tiptap/react";
import { Trash2, Maximize2, Minimize2 } from "lucide-react";
import { BaseBubbleMenu } from "@/bubbleMenu/BaseBubbleMenu";

export const YoutubeBubbleMenu = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;
  const shouldShow = editor.isActive("youtube");

  return (
    <BaseBubbleMenu editor={editor} shouldShow={shouldShow}>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .updateAttributes("youtube", { width: "50%" })
            .run()
        }
      >
        <Minimize2 size={16} />
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .updateAttributes("youtube", { width: "100%" })
            .run()
        }
      >
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
