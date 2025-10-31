/** @format
 * @/components/EditorMenuBar.tsx
 */

"use client";

import DefaultMenuBar from "@/components/menuBar/DefaultMenuBar";
import ContentMenuBar from "@/components/menuBar/ContentMenu";
import DocumentMenuBar from "@/components/menuBar/DocumentMenu";
import { useEditorContext } from "@/context/EditorContext";
import { EditorMenuBar as Menu } from "@/components/EditorMenuBar_2";

export default function EditorMenuBar() {
  const { editorType } = useEditorContext();

  switch (editorType) {
    case "comment":
      return null;
    case "content":
      return <Menu />; //<ContentMenuBar />;
    case "document":
      return <DocumentMenuBar />;
    default:
      return <DefaultMenuBar />;
  }
}
