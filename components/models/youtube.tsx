/** @format */
"use client";

import { useState } from "react";
import { Editor } from "@tiptap/react";

export interface YoutubeModelProps {
  editor: Editor;
}

export default function YoutubeModel({ editor }: YoutubeModelProps) {
  console.log(editor.getText());
  const [src, setSrc] = useState("");
  const [width, setWidth] = useState(640);
  const [height, setHeight] = useState(480);

  const handleInsert = () => {
    if (!src.trim()) return;

    // ✅ Validate & extract YouTube video ID
    const videoIdMatch = src.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    if (!videoIdMatch) {
      alert("Please enter a valid YouTube URL");
      return;
    }

    const videoId = videoIdMatch[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    const vidParams = { src: embedUrl, width, height };
    editor.chain().focus().setYoutubeVideo(vidParams).run();

    setSrc("");
  };

  return (
    <div className='space-y-4 py-4'>
      <div className='space-y-2'>
        <label className='text-sm font-medium'>YouTube URL</label>
        <input
          type='url'
          value={src}
          onChange={(e) => setSrc(e.target.value)}
          placeholder='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          className='w-full h-8 text-sm px-2 border rounded-md'
        />
      </div>

      <div className='flex gap-3'>
        <div className='flex flex-col'>
          <label className='text-xs text-muted-foreground'>Width</label>
          <input
            type='number'
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className='w-20 h-8 text-sm px-2 border rounded-md'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-xs text-muted-foreground'>Height</label>
          <input
            type='number'
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className='w-20 h-8 text-sm px-2 border rounded-md'
          />
        </div>
      </div>

      <button
        onClick={handleInsert}
        className='w-full bg-primary text-white text-sm py-2 rounded-md hover:bg-primary/90 transition'
      >
        Insert Video
      </button>
    </div>
  );
}
