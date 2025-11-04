<!-- @format -->

## 🧠 Simple TipTap Editor

A **modern, extensible rich-text editor** built with **Next.js 15**, **TypeScript**, and **TipTap v3** — featuring a modular menu bar, bubble menus, image resizing, YouTube embeds, table tools, and customizable extensions for documents, blog content, and comments.

![Content Editor Image](/public/ContentImage.png)

---

### 🚀 Features

- 🧩 **Extension-based setup**

  - Supports `document`, `content`, `comment`, and `default` editor modes
  - Modular extension configuration via `/constants/EditorExtension.ts`

- 🧰 **Dynamic Menu Bar**

  - Fully dynamic toolbar defined in `/constants/EditorMenuOptions.ts`
  - Includes dropdowns, modals, input fields, and grouped button sets

- 💬 **Smart Bubble Menus**

  - Context-aware popups for:

    - Text (bold, italic, underline, links)
    - Images (resize, align, delete)
    - Tables (insert, merge, align)
    - Embeds (YouTube, custom components)

- 🖼️ **Image Resize + Alignment**

  - Custom node view: resize, align, and delete images interactively

- 🎬 **Embeds**

  - YouTube and iframe embeds with editable parameters

- 🪄 **Details Block**

  - Expandable “Details” element similar to Markdown `<details>`/`<summary>`

- 🧷 **Editor Context API**

  - Centralized editor instance management with real-time content tracking

- 💾 **Import / Export**

  - Easily serialize and restore editor state as HTML or JSON

- ⚙️ **Built with:**

  - Next.js 15 (App Router)
  - TypeScript
  - Tailwind CSS + shadcn/ui
  - TipTap v3
  - Lucide Icons

---

### 📁 Project Structure

```
.
└── simple-tiptap-editor/
    ├── app/
    │   ├── content/page.tsx
    │   ├── docs/page.tsx
    │   ├── comment/page.tsx
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── bubbleMenu # stores bubble menu
    │   ├── extensions # stoes extensions
    │   ├── models # Editor popup modals/
    │   │   ├── image.tsx
    │   │   └── ...
    │   ├── ui # shadcn components
    │   ├── EditorButton.tsx
    │   ├── EditorMenuBar.tsx
    │   ├── EditorPage.tsx
    │   ├── MenuButton.tsx
    │   └── MenuSelect.tsx
    ├── constants/
    │   ├── EditorMenuOptions.ts
    │   ├── EditorExtensions.tsx
    │   └── EditorStateOptions.tsx
    ├── context/
    │   └── EditorContext.tsx
    ├── lib/
    │   └── utils.ts
    ├── ReadMe.md
    ├── package.json
    └── ...
```

---

### ⚙️ Installation & Setup

#### 1️⃣ Clone & Install

```bash
git clone https://github.com/coderooz/Simple-Tiptap-editor.git
cd simple-tiptap-editor
npm install
```

#### 2️⃣ Run Development Server

```bash
npm run dev
```

Open → [http://localhost:3000](http://localhost:3000)

#### 3️⃣ Build for Production

```bash
npm run build
npm start
```

---

### 🧩 Editor Modes

| Mode       | Description                    | Uses Extensions       |
| ---------- | ------------------------------ | --------------------- |
| `comment`  | Minimal editor for comments    | `COMMENT_EXTENSIONS`  |
| `document` | Full-page editor for documents | `DOCUMENT_EXTENSIONS` |
| `content`  | Blog or post-style rich editor | `BLOG_EXTENSIONS`     |
| `default`  | Basic TipTap setup             | `DEFAULT_EXTENSIONS`  |

Switch using:

```tsx
const { setEditorType } = useEditorContext();
setEditorType("document");
```

---

### 🧠 Editor Context API

Use the global context to access or modify the editor:

```tsx
import { useEditorContext } from "@/context/EditorContext";

const { editor, editorType, setEditorType, editorContent, setEditorContent } =
  useEditorContext();
```

---

### 🪄 Customizing Menu Items

You can modify toolbar buttons via
`/constants/EditorMenuOptions.ts`:

```ts
{
  title: "Bold",
  icon: Bold,
  group: "text",
  type: "button",
  isActive: (editor) => editor.isActive("bold"),
  action: (editor) => editor.chain().focus().toggleBold().run(),
}
```

Supports:

- `button`
- `dropdown`
- `input`
- `model` (for modals/dialogs)

---

### 🧩 Adding New Extensions

All TipTap or custom extensions are registered in
`/constants/EditorExtension.ts`:

```ts
import { Extension } from "@tiptap/core";

export const MyExtension = Extension.create({
  name: "myExtension",
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
    };
  },
});
```

Then add it:

```ts
DEFAULT_EXTENSIONS.push(MyExtension);
```

---

### 💾 Export / Import Content

#### Export HTML:

```ts
const html = editor.getHTML();
```

#### Import HTML:

```ts
editor.commands.setContent(html);
```

#### Export JSON:

```ts
const json = editor.getJSON();
```

#### Import JSON:

```ts
editor.commands.setContent(json);
```

---

### 🧰 Developer Notes

- Use **Developer Mode** or **Admin privileges** on Windows to fix symlink issues with Vercel builds.
- Use `useEditorContext()` to ensure reactive state when switching editor types.
- Use BubbleMenus for contextual controls — e.g., resize images, format text, etc.

---

### 🌐 Deployment

Build and deploy to **Vercel** or any Next.js-compatible platform:

```bash
vercel build
vercel deploy
```

---

### 🧑‍💻 Author

**Ranit Saha (Coderooz)**
📍 Barpeta Road, Assam, India
🌐 [https://www.coderooz.xyz](https://www.coderooz.xyz)
✉️ [coderooz.dev@gmail.com](mailto:coderooz.dev@gmail.com)

---

### 🪪 License

MIT License © 2025 [Coderooz](https://www.coderooz.xyz)
