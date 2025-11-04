/** @format
 * @/context/EditorContext
 */

"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useEditor, Editor } from "@tiptap/react";
import { Placeholder } from "@tiptap/extension-placeholder";
import {
  BLOG_EXTENSIONS,
  DOCUMENT_EXTENSIONS,
  COMMENT_EXTENSIONS,
  DEFAULT_EXTENSIONS,
} from "@/constants/EditorExtension";

export type EditorType = "comment" | "document" | "content" | "default";

// import { TextBubbleMenu } from "@/bubbleMenu/TextBubbleMenu";
// import { ImageBubbleMenu } from "@/bubbleMenu/ImageBubbleMenu";
// import { TableBubbleMenu } from "@/bubbleMenu/TableBubbleMenu";
// import { YoutubeBubbleMenu } from "@/bubbleMenu/YoutubeBubbleMenu";

interface EditorContextType {
  charCount: number;
  editorType: EditorType;
  setEditorType: (type: EditorType) => void;
  editor: Editor | null;
  editorContent: string;
  setEditorContent: (value: string) => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export function EditorProvider({ children }: { children: ReactNode }) {
  const [charCount, setCharCount] = useState(0);
  const [editorType, setEditorType] = useState<EditorType>("comment");
  const [editorContent, setEditorContent] = useState("");

  const extensions = useMemo(() => {
    const map = {
      content: BLOG_EXTENSIONS,
      document: DOCUMENT_EXTENSIONS,
      comment: COMMENT_EXTENSIONS,
      default: DEFAULT_EXTENSIONS,
    } as const;

    return [
      ...(map[editorType] || DEFAULT_EXTENSIONS),
      Placeholder.configure({
        placeholder: "Write something…",
        includeChildren: true,
        showOnlyWhenEditable: true,
      }),
    ];
  }, [editorType]);

  // 🧩 The critical fix: give `useEditor` a unique key to force recreation
  const editor = useEditor(
    {
      extensions,
      immediatelyRender: false,
      content: editorContent || "<p>Start writing...</p>",
      autofocus: "end",
      editorProps: {
        attributes: {
          class:
            "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[150px]",
        },
      },
      onUpdate: ({ editor }) => {
        setCharCount(editor.state.doc.textContent.length);
        setEditorContent(editor.getHTML());
      },
    },
    [editorType] // 🔥 ensures full editor reinit when switching type
  );

  const updateCharCount = useCallback(() => {
    setCharCount(editor?.state.doc.textContent.length ?? 0);
  }, [editor]);

  useEffect(() => {
    if (!editor) return undefined;

    const handler = updateCharCount;
    editor.on("transaction", handler);

    return () => {
      editor.off("transaction", handler);
    };
  }, [editor, updateCharCount]);

  const value = useMemo(
    () => ({
      charCount,
      editorType,
      setEditorType,
      editor,
      editorContent,
      setEditorContent,
    }),
    [charCount, editorType, editor, editorContent]
  );

  return (
    <EditorContext.Provider value={value}>
      {/* <TextBubbleMenu editor={editor} />
      <ImageBubbleMenu editor={editor} />
      <TableBubbleMenu editor={editor} />
      <YoutubeBubbleMenu editor={editor} /> */}
      <div>Editor Type: {editorType}</div>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditorContext() {
  const ctx = useContext(EditorContext);
  if (!ctx)
    throw new Error("useEditorContext must be used within an EditorProvider");
  return ctx;
}

// export function EditorProvider({ children }: { children: ReactNode }) {
//   const [charCount, setCharCount] = useState(0);
//   const [editorType, setEditorType] = useState<EditorType>("comment");
//   const [editorContent, setEditorContent] = useState("");

//   const extensions = useMemo(() => {
//     const map = {
//       content: BLOG_EXTENSIONS,
//       document: DOCUMENT_EXTENSIONS,
//       comment: COMMENT_EXTENSIONS,
//       default: DEFAULT_EXTENSIONS,
//     } as const;

//     return [
//       ...(map[editorType] || DEFAULT_EXTENSIONS),
//       Placeholder.configure({
//         placeholder: "Write something…",
//         includeChildren: true,
//         showOnlyWhenEditable: true,
//       }),
//     ];
//   }, [editorType]);

//   // 🧩 The critical fix: give `useEditor` a unique key to force recreation
//   const editor = useEditor(
//     {
//       extensions,
//       content: editorContent || "<p>Start writing...</p>",
//       autofocus: "end",
//       editorProps: {
//         attributes: {
//           class:
//             "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[150px]",
//         },
//       },
//       onUpdate: ({ editor }) => {
//         setCharCount(editor.state.doc.textContent.length);
//         setEditorContent(editor.getHTML());
//       },
//     },
//     [editorType] // 🔥 ensures full editor reinit when switching type
//   );

//   const updateCharCount = useCallback(() => {
//     setCharCount(editor?.state.doc.textContent.length ?? 0);
//   }, [editor]);

//   useEffect(() => {
//     if (!editor) return;
//     editor.on("transaction", updateCharCount);
//     return () => editor.off("transaction", updateCharCount);
//   }, [editor, updateCharCount]);

//   const value = useMemo(
//     () => ({
//       charCount,
//       editorType,
//       setEditorType,
//       editor,
//       editorContent,
//       setEditorContent,
//     }),
//     [charCount, editorType, editor, editorContent]
//   );

//   return (
//     <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
//   );
// }

// export function useEditorContext() {
//   const ctx = useContext(EditorContext);
//   if (!ctx)
//     throw new Error("useEditorContext must be used within an EditorProvider");
//   return ctx;
// }
