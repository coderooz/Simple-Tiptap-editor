<!-- @format -->

# TipTap-Editor

A **professional, production-ready TipTap rich-text editor showcase and reference implementation**. Built with **Next.js 16**, **React 19**, **TypeScript**, and **TipTap v3**. Features 4 editor modes, 40+ toolbar actions, bubble menus, custom extensions, and comprehensive documentation for reusable integration.

![TipTap Editor Preview](/public/ContentImage.png)

---

## 🚀 Features

### 🧩 **Extension-Based Architecture**
- **4 Editor Modes**: `document`, `content`, `comment`, and `default` — each with tailored extension sets
- **Modular Extension Configuration** via `/constants/EditorExtension.ts`
- **Composable Extension Factory** for selective feature inclusion

### 🧰 **Dynamic Menu Bar & Toolbar Registry**
- **40+ Toolbar Actions** defined declaratively in `/constants/EditorMenuOptions.ts`
- **Feature-Registry Driven** toolbar system for reusable feature integration
- Supports: `button`, `dropdown`, `input`, `model` (modals), `custom`

### 💬 **Smart Bubble Menus (Context-Aware)**
- **Text**: Bold, Italic, Underline, Strikethrough, Code, Link
- **Images**: Resize (50%/75%/100%), Align (Left/Center/Right), Delete
- **Tables**: Add/Delete Rows/Columns, Merge Cells, Toggle Borders
- **YouTube**: Resize, Delete
- **Registry-Based** for extensible node-type mapping

### 🖼️ **Advanced Image Handling**
- **Custom Resizable Image Node** with drag-resize handles
- **Image Dialog**: URL, Upload, Asset Library, Dimensions
- **Alignment & Resize Controls** via bubble menu

### 🎬 **Media Embeds**
- **YouTube Embeds** with editable parameters (autoplay, controls, privacy)
- **Extensible** for other media providers

### 🪄 **Details Block (Expandable Content)**
- Native `<details>`/`<summary>` support with custom styling

### 🧷 **Editor Context API**
- Centralized editor instance management with real-time content tracking
- Character count, HTML/JSON serialization, programmatic content injection
- Mode switching with full editor reinitialization

### 💾 **Import / Export**
- **HTML**: `editor.getHTML()` / `editor.commands.setContent(html)`
- **JSON**: `editor.getJSON()` / `editor.commands.setContent(json)`
- **File-based** import/export via modal dialog

### 📚 **Comprehensive Documentation**
- Feature-level documentation with implementation references
- Architecture documentation
- Integration guides
- Copy/adapt instructions for reusable features
- Implementation matrix tracking

### ⚙️ **Built With:**
- **Next.js 16** (App Router, Turbopack)
- **React 19** (Server Components, Concurrent Features)
- **TypeScript 5** (Strict Mode)
- **Tailwind CSS 4** (CSS Variables, @theme inline)
- **shadcn/ui** + **Radix UI** (Accessible Components)
- **TipTap v3.10** (Headless Editor Framework)
- **Lucide React** (Icons)
- **Lowlight** (Syntax Highlighting)
- **Yjs** (Collaboration Ready)

---

## 📁 Project Structure

```
TipTap-Editor/
├── app/
│   ├── page.tsx                      # Landing page with live demo
│   ├── demo/page.tsx                 # Full playground
│   ├── features/                     # Feature explorer & detail pages
│   ├── comment/page.tsx              # Comment editor mode
│   ├── content/page.tsx              # Content/blog editor mode
│   ├── docs/page.tsx                 # Documentation editor mode
│   ├── layout.tsx                    # Root layout + providers
│   └── globals.css                   # Tailwind v4 + CSS variables
├── components/
│   ├── editor/                       # Core editor components
│   ├── toolbar/                      # Toolbar system + registry
│   ├── bubble-menus/                 # Bubble menus + registry
│   ├── dialogs/                      # Modal dialogs
│   ├── commands/                     # Command layer + registry
│   ├── showcase/                     # Showcase UI components
│   ├── ui/                           # shadcn/ui components
│   ├── LiveEditorDemo.tsx            # Landing page demo
│   └── ThemeToggle.tsx               # Dark/light toggle
├── constants/
│   ├── tiptap-feature-registry.ts    # Feature registry (SSOT)
│   ├── EditorMenuOptions.ts          # Toolbar definitions
│   └── EditorStateOptions.ts         # Type definitions
├── context/
│   └── EditorContext.tsx             # Global editor state
├── editor/
│   ├── core/                         # Editor factory + config
│   ├── extensions/                   # Feature-based extensions
│   ├── commands/                     # Command layer
│   ├── state/                        # State management
│   ├── serializers/                  # HTML/JSON/Markdown
│   └── types/                        # Type definitions
├── features/                         # Feature-centric implementations
├── examples/                         # Minimal integration examples
├── docs/                             # Documentation
├── tests/                            # Test suite
├── lib/
│   └── utils.ts                      # cn() utility
├── public/                           # Static assets
├── .workspace/                       # Project workspace docs
├── PROJECT_REFERENCE_INDEX.md        # PRI (AI reference)
├── AGENTS.md                         # AI agent instructions
├── CHANGELOG.md
├── package.json
└── ...
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone & Install

```bash
git clone https://github.com/coderooz/TipTap-Editor.git
cd TipTap-Editor
npm install
```

### 2️⃣ Run Development Server

```bash
npm run dev
```

Open → [http://localhost:3000](http://localhost:3000)

### 3️⃣ Build for Production

```bash
npm run build
npm start
```

### 4️⃣ Quality Checks

```bash
npm run lint        # ESLint
npm run typecheck   # TypeScript strict check
npm run build       # Production build
```

---

## 🧩 Editor Modes

| Mode       | Route       | Description                          | Extension Set          |
| ---------- | ----------- | ------------------------------------ | ---------------------- |
| `comment`  | `/comment`  | Minimal editor for comments          | `COMMENT_EXTENSIONS`   |
| `document` | `/docs`     | Full-page editor for documents       | `DOCUMENT_EXTENSIONS`  |
| `content`  | `/content`  | Blog/post-style rich editor          | `BLOG_EXTENSIONS`      |
| `default`  | `/`         | Basic TipTap setup                   | `DEFAULT_EXTENSIONS`   |

Switch programmatically:

```tsx
const { setEditorType } = useEditorContext();
setEditorType("document");
```

---

## 🧠 Editor Context API

```tsx
import { useEditorContext } from "@/context/EditorContext";

const { 
  editor, 
  editorType, 
  setEditorType, 
  editorContent, 
  setEditorContent,
  charCount 
} = useEditorContext();
```

---

## 🧰 Customizing Toolbar Items

Modify toolbar buttons via `/constants/EditorMenuOptions.ts`:

```ts
{
  title: "Bold",
  icon: Bold,
  group: "styling",
  type: "button",
  isActive: (editor) => editor.isActive("bold"),
  action: (editor) => editor.chain().focus().toggleBold().run(),
}
```

**Supported Types:** `button` | `dropdown` | `input` | `model` | `custom`

---

## 🧩 Adding New Extensions

Register TipTap or custom extensions in `/constants/EditorExtension.ts`:

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

Then compose via the extension factory:

```ts
import { createEditorExtensions } from "@/editor/core/extensions";

const extensions = createEditorExtensions({
  features: ["basicFormatting", "links", "images", "tables"],
});
```

---

## 💾 Export / Import Content

### Export HTML:
```ts
const html = editor.getHTML();
```

### Import HTML:
```ts
editor.commands.setContent(html);
```

### Export JSON:
```ts
const json = editor.getJSON();
```

### Import JSON:
```ts
editor.commands.setContent(json);
```

---

## 🧰 Developer Notes

- **Node.js 20+** and **npm 10+** required
- **TypeScript Strict Mode** enforced — no `any` in new code
- **ESLint Flat Config** with React, TypeScript, and Tailwind rules
- **Husky + lint-staged** for pre-commit quality gates
- Use `useEditorContext()` for reactive state when switching editor types
- BubbleMenus for contextual controls (resize images, format text, etc.)
- Feature registry (`constants/tiptap-feature-registry.ts`) is the SSOT for all features

---

## 🌐 Deployment

Deploy to **Vercel** (recommended) or any Next.js-compatible platform:

```bash
vercel build
vercel deploy
```

**Production URL:** https://tiptap-editor.vercel.app

---

## 🧑‍💻 Author

**Ranit Saha (Coderooz)**  
📍 India  
🌐 [https://coderooz.in](https://coderooz.in)  
✉️ [contact@coderooz.in](mailto:contact@coderooz.in)  
🐙 [https://github.com/coderooz](https://github.com/coderooz)

---

## 🪪 License

MIT License © 2025 [Coderooz](https://coderooz.in)

---

## 📊 Project Status

| Metric | Status |
|--------|--------|
| **Version** | 1.0.0 |
| **TypeScript** | ✅ Strict |
| **ESLint** | ✅ Clean |
| **Build** | ✅ Passing |
| **Tests** | 🚧 In Progress |
| **Accessibility** | 🚧 Auditing |
| **Documentation** | ✅ Comprehensive |
| **Deployment** | ✅ Vercel |

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 🔗 Links

- **Live Demo:** https://tiptap-editor.vercel.app
- **Repository:** https://github.com/coderooz/TipTap-Editor
- **Issues:** https://github.com/coderooz/TipTap-Editor/issues
- **Documentation:** https://github.com/coderooz/TipTap-Editor/tree/main/docs