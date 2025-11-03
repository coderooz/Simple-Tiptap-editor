/** @format */

import { Editor } from "@tiptap/react";

export function Import({ editor }: { editor: Editor }) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        editor.commands.setContent(json);
      } catch (err) {
        alert("Invalid JSON file.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className='flex flex-col gap-2'>
      <input
        type='file'
        accept='.json'
        onChange={handleFileChange}
        className='text-sm text-muted-foreground'
      />
    </div>
  );
}
