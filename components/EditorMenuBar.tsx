/** @format
 * @/components/EditorMenuBar.tsx
 */

"use client";

import React from "react";
import EditorButton from "./EditorButton";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ListOrdered,
  List,
  Undo,
  Redo,
  Type,
  Search,
} from "lucide-react";
import { useEditorContext } from "@/context/EditorContext";

export default function EditorMenuBar() {
  const { editor } = useEditorContext();

  if (!editor) return null;

  return (
    <div className='flex flex-wrap items-center gap-1 border-b bg-muted/20 p-2 rounded-t-lg'>
      <EditorButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
        icon={<Bold size={16} />}
      />
      <EditorButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
        icon={<Italic size={16} />}
      />
      <EditorButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        isActive={editor.isActive("underline")}
        icon={<Underline size={16} />}
      />
      <EditorButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
        icon={<Strikethrough size={16} />}
      />
      <EditorButton
        onClick={() => editor.chain().focus().toggleCode().run()}
        isActive={editor.isActive("code")}
        icon={<Code size={16} />}
      />

      <div className='h-5 w-px bg-border mx-2' />

      <EditorButton
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        isActive={editor.isActive({ textAlign: "left" })}
        icon={<AlignLeft size={16} />}
      />
      <EditorButton
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        isActive={editor.isActive({ textAlign: "center" })}
        icon={<AlignCenter size={16} />}
      />
      <EditorButton
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        isActive={editor.isActive({ textAlign: "right" })}
        icon={<AlignRight size={16} />}
      />

      <div className='h-5 w-px bg-border mx-2' />

      <EditorButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
        icon={<ListOrdered size={16} />}
      />
      <EditorButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
        icon={<List size={16} />}
      />

      <div className='h-5 w-px bg-border mx-2' />

      <EditorButton
        onClick={() => editor.chain().focus().undo().run()}
        icon={<Undo size={16} />}
      />
      <EditorButton
        onClick={() => editor.chain().focus().redo().run()}
        icon={<Redo size={16} />}
      />

      <div className='h-5 w-px bg-border mx-2' />

      <EditorButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive("heading", { level: 2 })}
        icon={<Type size={16} />}
        label='H2'
      />

      <EditorButton
        label='Find & Remove'
        icon={<Search size={16} />}
        onClick={() => {
          const query = prompt("Enter text to remove:");
          if (query) {
            const found = editor.commands.findText(query);
            if (found.length > 0) {
              if (
                confirm(`Remove all ${found.length} occurrences of "${query}"?`)
              ) {
                editor.commands.removeText(query);
              }
            } else {
              alert("No matches found!");
            }
          }
        }}
      />
    </div>
  );
}
