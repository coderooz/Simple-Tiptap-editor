/** @format */
"use client";
import React from "react";
import { Bold } from "lucide-react";
import EditorButton from "../EditorButton";
import { useEditorContext } from "@/context/EditorContext";

export const BoldButton = () => {
  const { editor } = useEditorContext();
  if (!editor) return null;

  return (
    <EditorButton
      onClick={() => editor.chain().focus().toggleBold().run()}
      isActive={editor.isActive("bold")}
      icon={<Bold size={16} />}
    />
  );
};
