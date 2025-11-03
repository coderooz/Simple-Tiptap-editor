/** @format */

"use client";

import React from "react";
import { Editor } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";

interface BaseBubbleMenuProps {
  editor: Editor;
  children: React.ReactNode;
  shouldShow: boolean;
}

export const BaseBubbleMenu: React.FC<BaseBubbleMenuProps> = ({
  editor,
  children,
  shouldShow,
}) => {
  if (!editor) return null;

  return (
    <BubbleMenu
      editor={editor}
      // tippyOptions={{
      //   placement: "top",
      //   animation: "shift-away",
      // }}
      shouldShow={() => shouldShow}
      className='z-50 bg-white dark:bg-gray-900 shadow-md border border-gray-200 dark:border-gray-700 rounded-xl p-2 flex space-x-2'
    >
      {children}
    </BubbleMenu>
  );
};
