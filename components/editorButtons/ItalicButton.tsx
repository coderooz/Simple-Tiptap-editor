/** @format */

"use client";
import React from "react";
import { Italic } from "lucide-react";
import EditorButton from "../EditorButton";
import { useEditorContext } from "@/context/EditorContext";

export const ItalicButton = () => {
  const { editor } = useEditorContext();
  if (!editor) return null;

  return (
    <EditorButton
      onClick={() => editor.chain().focus().toggleItalic().run()}
      isActive={editor.isActive("italic")}
      icon={<Italic size={16} />}
    />
  );
};
