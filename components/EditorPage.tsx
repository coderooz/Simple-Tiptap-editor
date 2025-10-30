/** @format
 * @/components/EditorPage.tsx
 */
"use client";

import React, { useEffect } from "react";
import { EditorContent } from "@tiptap/react";
import { useEditorContext } from "@/context/EditorContext";
import EditorMenuBar from "./EditorMenuBar";

export default function EditorPage({
  type,
}: {
  type: "comment" | "content" | "document";
}) {
  const { editor, setEditorType, charCount } = useEditorContext();

  useEffect(() => {
    setEditorType(type);
  }, [type, setEditorType]);

  if (!editor)
    return (
      <div className='text-center text-muted-foreground'>Loading editor…</div>
    );

  const showMenu = type !== "comment";

  return (
    <div className='flex flex-col w-full max-w-3xl mx-auto mt-8 rounded-lg border shadow-sm bg-background'>
      {showMenu && <EditorMenuBar />}
      <div className='p-3'>
        <EditorContent
          editor={editor}
          className='min-h-[200px] prose max-w-none focus:outline-none'
        />
      </div>
      <div className='border-t text-right text-sm text-muted-foreground p-2'>
        {charCount.toLocaleString()} characters
      </div>
    </div>
  );
}
