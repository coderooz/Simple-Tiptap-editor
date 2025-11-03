
import React from 'react';
import { Editor } from "@tiptap/react";

export default function Link({ editor }: { editor: Editor }) {
  {
    const existing = editor.getAttributes("link");
    const [url, setUrl] = React.useState(existing?.href || "");
    const [text, setText] = React.useState(
      editor.state.doc.textBetween(
        editor.state.selection.from,
        editor.state.selection.to,
        " "
      )
    );
    const [newTab, setNewTab] = React.useState(
      existing?.target === "_blank" || false
    );

    const applyLink = () => {
      if (!url) {
        editor.chain().focus().extendMarkRange("link").unsetLink().run();
        return;
      }

      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url, target: newTab ? "_blank" : "_self" })
        .run();
    };

    return (
      <div className='flex flex-col gap-3 mt-2'>
        <label className='text-sm font-medium'>URL</label>
        <input
          type='url'
          placeholder='https://example.com'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className='border rounded-md px-2 py-1 text-sm'
        />

        <label className='text-sm font-medium'>Text (optional)</label>
        <input
          type='text'
          placeholder='Display text (optional)'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='border rounded-md px-2 py-1 text-sm'
        />

        <label className='flex items-center gap-2 text-sm mt-2'>
          <input
            type='checkbox'
            checked={newTab}
            onChange={(e) => setNewTab(e.target.checked)}
          />
          Open in new tab
        </label>

        <button
          onClick={() => {
            applyLink();
          }}
          className='bg-primary text-white rounded-md py-1 mt-3 text-sm hover:opacity-90'
        >
          Apply Link
        </button>
      </div>
    );
  }
}