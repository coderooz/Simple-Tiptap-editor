# Simple-Tiptap-editor — CHATGPT Context Report

**Project:** Simple-Tiptap-editor  
**Author:** Ranit Saha (Coderooz)  
**Repo:** https://github.com/coderooz/Simple-Tiptap-editor  
**Live:** https://simple-tiptap-editor.vercel.app  
**Updated:** 2026-08-26  

---

## QUICK START FOR CHATGPT

**Read these files in order:**
1. `AGENTS.md` — Project instructions for AI agents
2. `PROJECT_REFERENCE_INDEX.md` — Full project reference  
3. `context/EditorContext.tsx` — Core state management
4. `constants/EditorExtension.tsx` — All TipTap extensions
5. `constants/EditorMenuOptions.ts` — Toolbar config
5. `components/EditorPage.tsx` — Main editor component
6. `components/LiveEditorDemo.tsx` — Landing page demo component
7. `components/ThemeToggle.tsx` — Dark/light mode toggle
8. `app/page.tsx` — Landing page with live demo
9. `app/layout.tsx` — Root layout with fonts, metadata
10. `opencode.jsonc` — OpenCode agent configuration

---

## PROJECT SUMMARY

**What:** Production-ready rich text editor with Next.js 16, React 19, TipTap v3, Tailwind CSS 4  
**Modes:** Comment, Document, Content, Default (4 specialized extension sets)  
**Features:** 40+ toolbar buttons, 4 bubble menus, image resize, YouTube embed, import/export, collaborative-ready (Yjs)  
**Stack:** Next.js 16 App Router, TypeScript strict, shadcn/ui, Radix UI, Lucide icons  
**Deploy:** Vercel (auto-deploy on push to main)  
**License:** MIT  

---

## RECENT CHANGES (2026-08-26)

### Landing Page Redesign (`app/page.tsx`)
- Hero with live editor demo (`LiveEditorDemo` component)
- Feature grid (8 cards), stats, tech specs table
- 4 mode cards with "Try X Mode" links
- CTA section with GitHub star + demo links
- Full footer with resources, connect, legal links

### New Components
- `components/LiveEditorDemo.tsx` — Interactive mode switcher with live editors
- `components/ThemeToggle.tsx` — Dark/light mode with localStorage persistence

### Layout Updates (`app/layout.tsx`)
- Geist Sans/Mono fonts via `next/font`
- Full metadata (OpenGraph, Twitter, icons, manifest)
- Viewport config with theme-color
- `suppressHydrationWarning` for theme toggle

---

## ARCHITECTURE HIGHLIGHTS

### Editor Context (`context/EditorContext.tsx`)
```typescript
// Key pattern: key=[editorType] forces full reinit on mode switch
const editor = useEditor({ extensions, immediatelyRender: false, ... }, [editorType]);
```

### Extension Hierarchy
```
DEFAULT_EXTENSIONS (base)
  └── COMPLEX_EXTENSIONS (+Code, CodeBlock, Highlight, Strike, Sub/Sup, TextStyle, Color, BackgroundColor, Heading, FontFamily, FontSize, LineHeight, Lists, Details, HR, Image, FileHandler, Table, YouTube)
        ├── BLOG_EXTENSIONS = COMPLEX_EXTENSIONS
        ├── DOCUMENT_EXTENSIONS = COMPLEX_EXTENSIONS + CharacterCount
        └── COMMENT_EXTENSIONS = DEFAULT_EXTENSIONS + CharacterCount(limit: 2500)
```

### Toolbar System (`EditorMenuOptions.ts`)
- Button types: `button`, `dropdown`, `input`, `model` (modal)
- Groups: `text`, `fonts`, `insert`, `styling`, `table`, `media`, `history`, `export`
- Each button: `title`, `icon`, `group`, `type`, `isActive(editor)`, `action(editor)`

### Bubble Menus
- `BaseBubbleMenu` — Portal positioning
- `TextBubbleMenu` — Bold, italic, underline, strikethrough, code, link
- `ImageBubbleMenu` — Resize (50/75/100%), align (L/C/R), delete
- `TableBubbleMenu` — Add row/col, merge, delete, align
- `YoutubeBubbleMenu` — Edit URL, delete

---

## CURRENT STATE

| Area | Status |
|------|--------|
| Core editor (4 modes) | ✅ Complete |
| Toolbar (40+ buttons) | ✅ Complete |
| Bubble menus (4) | ✅ Complete |
| Custom extensions | ✅ Complete (4) |
| Modal dialogs | ✅ Complete (4) |
| Import/Export (HTML/JSON) | ✅ Complete |
| TypeScript strict | ✅ Passing |
| ESLint | ✅ Passing (15 warnings) |
| Production build | ✅ Passing |
| Vercel deploy | ✅ Live |
| Dark mode | ✅ Complete |
| Landing page demo | ✅ Complete |

---

## KNOWN ISSUES (Non-blocking)

1. **15 ESLint warnings** — `@typescript-eslint/no-explicit-any` in legacy code
2. **TipTap type mismatches** — FileHandler callbacks use structural typing workaround
3. **No test suite** — Vitest/Playwright not configured
4. **Collaborative UI** — Yjs deps installed but not wired up

---

## DEVELOPMENT COMMANDS

```bash
npm run dev        # Dev server (localhost:3000)
npm run build      # Production build
npm run start      # Production server
npm run lint       # ESLint (flat config)
npm run typecheck  # tsc --noEmit
npm run prepare    # Husky install
```

---

## OPENCODE AGENTS (in `opencode.jsonc`)

| Agent | Purpose |
|-------|---------|
| `build` | Primary development |
| `plan` | Read-only analysis |
| `explorer` | Fast codebase search |
| `doc-writer` | Documentation updates |
| `doc-validator` | Code vs docs validation |
| `tiptap-expert` | TipTap extensions, bubble menus |
| `nextjs-expert` | Next.js 16 App Router |

---

## NEXT PRIORITIES (Portfolio Showcase)

1. **Full-screen demo page** (`/demo`) — Sticky toolbar, URL state, templates
2. **Sample content templates** — Per-mode starter content
3. **Keyboard shortcuts** — ⌘K command palette, shortcut hints
4. **Accessibility audit** — WCAG 2.1 AA, screen reader testing
5. **Performance** — Bundle analysis, lazy-load heavy extensions
6. **Blog post assets** — Architecture diagram, screenshots, code snippets

---

## FILES TO IGNORE (Generated/Config)

- `node_modules/`, `.next/`, `out/`, `dist/`, `build/`
- `.vercel/`, `.turbo/`, `coverage/`
- `*.log`, `.env*`, `*.tsbuildinfo`
- `.mcp-runtime.json`, `docs-repo.project-mcp.json`

---

## CONTACT

- **Author:** Ranit Saha (Coderooz)
- **Email:** contact@coderooz.in
- **Website:** https://coderooz.in
- **GitHub:** https://github.com/coderooz

---

*This is the condensed CHATGPT reference. Full details in `.workspace/PROJECT_CONTEXT_REPORT.md`*