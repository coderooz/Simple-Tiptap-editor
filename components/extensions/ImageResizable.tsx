/** @format */

// extensions/ImageResizable.tsx
import { NodeViewWrapper, NodeViewContent } from "@tiptap/react";
import { Node, mergeAttributes } from "@tiptap/core";
import React from "react";

export const ImageResizable = Node.create({
  name: "imageResizable",
  group: "block",
  inline: false,
  draggable: true,
  selectable: true,
  addAttributes() {
    return {
      src: { default: null },
      alt: { default: null },
      width: { default: "100%" },
      align: { default: "center" },
    };
  },
  parseHTML() {
    return [{ tag: "img" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["img", mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return ReactNodeViewRenderer(ImageComponent);
  },
});

const ImageComponent = ({ node, updateAttributes, selected }) => {
  const { src, alt, width, align } = node.attrs;

  return (
    <NodeViewWrapper className='relative group flex justify-center my-4'>
      <div className={`w-full text-${align}`}>
        <img
          src={src}
          alt={alt}
          style={{ width }}
          className={`mx-auto rounded-lg shadow-md ${
            selected ? "ring-2 ring-blue-400" : ""
          }`}
        />
      </div>

      {/* Hover toolbar */}
      {selected && (
        <div className='absolute -top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg shadow-lg flex space-x-2 opacity-100 group-hover:opacity-100 transition'>
          <button onClick={() => updateAttributes({ width: "50%" })}>
            50%
          </button>
          <button onClick={() => updateAttributes({ width: "75%" })}>
            75%
          </button>
          <button onClick={() => updateAttributes({ width: "100%" })}>
            100%
          </button>
          <button
            onClick={() => updateAttributes({ align: "left" })}
            title='Align Left'
          >
            L
          </button>
          <button
            onClick={() => updateAttributes({ align: "center" })}
            title='Align Center'
          >
            C
          </button>
          <button
            onClick={() => updateAttributes({ align: "right" })}
            title='Align Right'
          >
            R
          </button>
          <button
            onClick={() => updateAttributes({ src: "" })}
            className='text-red-400'
          >
            ✕
          </button>
        </div>
      )}
    </NodeViewWrapper>
  );
};
