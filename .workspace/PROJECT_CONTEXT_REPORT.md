# Simple-Tiptap-editor — Complete Project Context Report

**Generated:** 2026-08-26
**Purpose:** Provide full context for AI-assisted development, portfolio showcase, and commercial licensing preparation

---

## 1. PROJECT OVERVIEW

### Basic Information
- **Name:** Simple-Tiptap-editor
- **Type:** Next.js 16 + TipTap v3 Rich Text Editor
- **Author:** Ranit Saha (Coderooz)
- **Repository:** https://github.com/coderooz/Simple-Tiptap-editor
- **Live Demo:** https://simple-tiptap-editor.vercel.app
- **License:** MIT (currently) — planned dual-license for commercial use
- **Status:** Production-ready, deployed on Vercel

### Vision
A professional-grade, extensible rich-text editor built with modern stack (Next.js 16, React 19, TipTap v3, Tailwind CSS 4) that serves as:
1. **Portfolio showcase** — demonstrating full-stack React/Next.js expertise
2. **Commercial product** — licensable editor component for other developers
3. **Open-source reference** — best practices for TipTap integration

---

## 2. TECHNOLOGY STACK

| Layer | Technology | Version | Notes |
|-------|------------|---------|-------|
| Framework | Next.js | 16.0.1 | App Router, Turbopack |
| Language | TypeScript | 5.x | Strict mode |
| Runtime | React | 19.2.0 | Server Components by default |
| Styling | Tailwind CSS | 4.x | CSS variables, @theme inline |
| UI Library | shadcn/ui | Latest | Radix UI primitives |
| Editor Core | TipTap | 3.10.1 | Headless, extensible |
| Icons | Lucide React | 0.548.0 | Tree-shakeable |
| Package Manager | npm | 10.x | package-lock.json committed |
| Deployment | Vercel | — | Auto-deploy on push to main |

### Key Dependencies
```json
{
  "@tiptap/react": "^3.10.1",
  "@tiptap/starter-kit": "^3.9.1",
  "@tiptap/extensions": "^3.9.1",
  "@tiptap/extension-table": "^3.10.1",
  "@tiptap/extension-image": "^3.9.1",
  "@tiptap/extension-youtube": "^3.10.1",
  "@tiptap/extension-link": "^3.9.1",
  "@tiptap/extension-placeholder": "^3.9.1",
  "@tiptap/extension-collaboration": "^3.10.1",
  "@tiptap/y-tiptap": "^3.0.0",
  "yjs": "^13.6.27",
  "y-protocols": "^1.0.6",
  "lowlight": "^3.3.0",
  "@radix-ui/react-*": "^1.1.x",
  "lucide-react": "^0.548.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.3.1",
  "class-variance-authority": "^0.7.1"
}
```

---

## 3. ARCHITECTURE

### Project Structure
```
Simple-Tiptap-editor/
├── .github/
│   ├── workflows/ci.yml           # CI/CD: lint, typecheck, build, deploy
│   ├── ISSUE_TEMPLATE/            # Bug report, feature request
│   ├── PULL_REQUEST_TEMPLATE/     # PR template with checklist
│   ├── dependabot.yml             # Weekly dependency updates
│   └── CODEOWNERS                 # @coderooz owns everything
├── .vscode/
│   ├── settings.json              # Editor config (format on save, ESLint, Prettier)
│   └── extensions.json            # Recommended extensions
├── app/                           # Next.js App Router
│   ├── comment/page.tsx           # Comment editor mode
│   ├── content/page.tsx           # Blog/content editor mode
│   ├── docs/page.tsx              # Documentation editor mode
│   ├── globals.css                # Tailwind v4 + CSS variables
│   ├── layout.tsx                 # Root layout with providers
│   └── page.tsx                   # Landing page
├── components/
│   ├── bubbleMenu/                # Context-aware floating menus
│   │   ├── BaseBubbleMenu.tsx
│   │   ├── TextBubbleMenu.tsx
│   │   ├── ImageBubbleMenu.tsx
│   │   ├── TableBubbleMenu.tsx
│   │   └── YoutubeBubbleMenu.tsx
│   ├── extensions/                # Custom TipTap extensions
│   │   ├── FontFamily.ts
│   │   ├── FontSize.ts
│   │   ├── ImageResizable.tsx     # Drag-resize images
│   │   └── MarkDownLink.ts        # [text](url) → link
│   ├── models/                    # Modal dialogs
│   │   ├── image.tsx              # Image upload/URL
│   │   ├── link.tsx               # Link editor
│   │   ├── youtube.tsx            # YouTube embed
│   │   └── ImportExport.tsx       # HTML/JSON import/export
│   ├── ui/                        # shadcn/ui components
│   │   ├── button.tsx, dialog.tsx, select.tsx, etc.
│   ├── EditorButton.tsx           # Toolbar button wrapper
│   ├── EditorMenuBar.tsx          # Dynamic toolbar
│   ├── EditorPage.tsx             # Main editor component
│   ├── LiveEditorDemo.tsx         # Landing page live demo
│   ├── MenuButton.tsx             # Dropdown button
│   ├── MenuSelect.tsx             # Select dropdown
│   └── ThemeToggle.tsx            # Dark/light mode toggle
├── constants/
│   ├── EditorExtension.tsx        # All TipTap extensions config
│   ├── EditorMenuOptions.ts       # Toolbar button definitions
│   └── EditorStateOptions.tsx     # Type definitions
├── context/
│   └── EditorContext.tsx          # Global editor state (Provider + Hook)
├── lib/
│   └── utils.ts                   # cn() utility (clsx + tailwind-merge)
├── public/                        # Static assets
├── Configuration files:
│   ├── opencode.jsonc             # OpenCode agent config
│   ├── tailwind.config.ts
│   ├── tsconfig.json              # Strict TypeScript
│   ├── eslint.config.mjs          # Flat config with React/TS rules
│   ├── .prettierrc                # Prettier + Tailwind plugin
│   ├── next.config.ts             # Security headers, image optimization
│   ├── vercel.json                # Vercel deployment config
│   ├── .editorconfig
│   ├── .gitignore
│   ├── AGENTS.md                  # Project-specific AI instructions
│   ├── PROJECT_REFERENCE_INDEX.md # PRI for AI context
│   ├── LICENSE (MIT)
│   ├── CONTRIBUTING.md
│   ├── CODE_OF_CONDUCT.md
│   ├── SECURITY.md
│   ├── CHANGELOG.md
│   └── README.md
```

### Editor Architecture

#### 4 Editor Modes
| Mode | Route | Extensions | Use Case |
|------|-------|------------|----------|
| `comment` | `/comment` | `COMMENT_EXTENSIONS` | Minimal comments |
| `document` | `/docs` | `DOCUMENT_EXTENSIONS` | Full documents |
| `content` | `/content` | `BLOG_EXTENSIONS` | Blog posts |
| `default` | `/` | `DEFAULT_EXTENSIONS` | Basic editor |

#### Extension Hierarchy
```
DEFAULT_EXTENSIONS (base)
  └── COMPLEX_EXTENSIONS (adds: Code, CodeBlock, Highlight, Strike, Sub/Sup, TextStyle, Color, BackgroundColor, Heading, FontFamily, FontSize, LineHeight, Lists, Details, HR, Image, FileHandler, Table, YouTube)
        ├── BLOG_EXTENSIONS = COMPLEX_EXTENSIONS
        ├── DOCUMENT_EXTENSIONS = COMPLEX_EXTENSIONS + CharacterCount
        └── COMMENT_EXTENSIONS = DEFAULT_EXTENSIONS + CharacterCount(limit: 2500)
```

#### State Management
- **EditorContext.tsx** — React Context + `useEditor` hook
- **Key features:**
  - Dynamic extension switching via `editorType` state
  - `immediatelyRender: false` for performance
  - `key: [editorType]` forces full editor reinitialization on mode switch
  - Real-time `charCount` and `editorContent` (HTML) tracking
  - `setEditorContent` for programmatic content injection

#### Toolbar System (`EditorMenuOptions.ts`)
- **Button types:** `button`, `dropdown`, `input`, `model` (modal)
- **Groups:** `text`, `fonts`, `insert`, `styling`, `table`, `media`, `history`, `export`
- **Each button defines:** `title`, `icon`, `group`, `type`, `isActive(editor)`, `action(editor)`, `options[]` (for dropdowns), `getValue(editor)`

#### Bubble Menus
- **BaseBubbleMenu** — Positioning logic, portal rendering
- **TextBubbleMenu** — Bold, italic, underline, strikethrough, code, link
- **ImageBubbleMenu** — Resize (50/75/100%), align (L/C/R), delete
- **TableBubbleMenu** — Add row/col, merge, delete, align
- **YoutubeBubbleMenu** — Edit URL, delete

---

## 4. CURRENT STATE (as of 2026-08-26)

### ✅ Completed
- [x] Full editor with 4 modes
- [x] Dynamic toolbar with 40+ buttons
- [x] 4 context-aware bubble menus
- [x] Custom extensions: ImageResizable, FontFamily, FontSize, MarkDownLink
- [x] Modal dialogs: Image, Link, YouTube, Import/Export
- [x] HTML/JSON import/export
- [x] Professional repo setup: CI/CD, templates, docs, linting
- [x] TypeScript strict mode passing
- [x] ESLint passing (15 warnings only — `any` types in legacy code)
- [x] Production build passing
- [x] Deployed to Vercel (production URL active)
- [x] OpenCode configuration with custom agents
- [x] Landing page redesign with live editor demo
- [x] Dark/light mode toggle with persistence
- [x] Interactive mode switcher on landing page
- [x] Full metadata (OpenGraph, Twitter, icons, manifest)
- [x] Geist Sans/Mono fonts via next/font

### ⚠️ Known Issues (Non-blocking)
1. **15 ESLint warnings** — `@typescript-eslint/no-explicit-any` in:
   - `ImageBubbleMenu.tsx`, `ImageResizable.tsx`, `ImportExport.tsx`
   - `EditorExtension.tsx` (FileHandler callbacks, Heading options)
2. **TipTap types** — Some `Editor` type mismatches in FileHandler callbacks (workaround with structural typing)
3. **No test suite** — Vitest/Playwright not configured
4. **No collaborative editing UI** — Yjs deps installed but not wired up

### 📦 Deployment
- **Vercel Project:** `coderooz-projects/simple-tiptap-editor`
- **Production URL:** https://simple-tiptap-editor-93svo3w1c-coderooz-projects.vercel.app
- **Custom Domain:** https://simple-tiptap-editor.vercel.app (configured in Vercel dashboard)
- **Auto-deploy:** Push to `main` → production; PR → preview

---

## 5. PLANNED SUBSTANTIAL CHANGES

### Phase 1: Portfolio Showcase Enhancement
- [ ] **Landing page redesign** — Hero, feature grid, live demo embed, pricing/table
- [ ] **Dark mode** — Full theme support with `next-themes`
- [ ] **Keyboard shortcuts** — Command palette (⌘K), shortcut hints in tooltips
- [ ] **Accessibility audit** — WCAG 2.1 AA, screen reader testing, focus management
- [ ] **Performance optimization** — Bundle analysis, lazy-load heavy extensions
- [ ] **Error boundaries** — Graceful degradation for editor crashes

### Phase 2: Commercial Product Preparation
- [ ] **License system** — Dual license (MIT for OSS, commercial for paid)
  - License key validation (client + server)
  - Feature gating (collaboration, advanced tables, AI features)
- [ ] **NPM package** — Publish as `@coderooz/tiptap-editor` with:
  - Peer deps: React, Next.js, TipTap
  - Tree-shakeable exports
  - TypeScript declarations
  - CSS-in-JS or CSS modules for styles
- [ ] **Documentation site** — Nextra or Mintlify with:
  - Getting started guide
  - API reference (auto-generated from TS)
  - Extension authoring guide
  - Migration guides
  - Live playground
- [ ] **Demo/Playground** — Interactive editor with all modes
- [ ] **Pricing page** — Stripe/Paddle integration for license sales

### Phase 3: Advanced Features (Post-launch)
- [ ] **Collaborative editing** — Yjs + WebRTC/WebSocket provider
- [ ] **AI Assistant** — TipTap AI extension (completion, rewrite, translate)
- [ ] **Templates** — Pre-built document templates (resume, blog, docs)
- [ ] **Version history** — LocalStorage/IndexedDB snapshots
- [ ] **Plugin marketplace** — Community extensions

---

## 6. COMMERCIAL STRATEGY

### Licensing Model
| Tier | Price | Features |
|------|-------|----------|
| **Community** | Free (MIT) | Core editor, 4 modes, basic extensions, self-hosted |
| **Pro** | $29/mo or $290/yr | Collaboration, AI assistant, templates, priority support, license key |
| **Enterprise** | Custom | SSO, audit logs, custom extensions, SLA, on-premise |

### Distribution Channels
1. **NPM** — `@coderooz/tiptap-editor` (public + private scopes)
2. **GitHub Packages** — Private registry for Pro/Enterprise
3. **Direct download** — License key verified ZIP

### Revenue Targets
- **Month 1-3:** 10 Pro licenses = $290/mo
- **Month 6:** 50 Pro + 2 Enterprise = $2,500/mo
- **Year 1:** 200 Pro + 10 Enterprise = $15,000/mo

---

## 7. DEVELOPMENT WORKFLOW

### Commands
```bash
npm run dev        # Development server (localhost:3000)
npm run build      # Production build
npm run start      # Production server
npm run lint       # ESLint (flat config)
npm run typecheck  # tsc --noEmit
npm run prepare    # Husky install
```

### Git Workflow
- **Main branch:** `main` (protected)
- **Commits:** Conventional Commits (`feat:`, `fix:`, `chore:`, etc.)
- **PR Required:** Yes, 1 approval minimum
- **CI:** GitHub Actions → lint → typecheck → build → deploy preview

### Quality Gates (Pre-commit via Husky)
1. `npm run lint` — passes
2. `npx tsc --noEmit` — passes
3. `npm run build` — passes

---

## 8. OPENCODE CONFIGURATION

### Custom Agents (in `opencode.jsonc`)
| Agent | Purpose |
|-------|---------|
| `build` | Primary development agent |
| `plan` | Read-only analysis/planning |
| `explorer` | Fast codebase search |
| `doc-writer` | Documentation updates |
| `doc-validator` | Code vs docs validation |
| `doc-indexer` | Doc catalog maintenance |
| `issue-handler` | GitHub issues/PRs via `gh` |
| `devops` | Vercel deploy, CI/CD, env vars |
| `deployer` | Specialized Vercel deployment |
| `tiptap-expert` | TipTap extensions, bubble menus, custom nodes |
| `nextjs-expert` | Next.js 16 App Router, Server Components |

### Custom Commands
- `/dev` — Start dev server
- `/build` — Production build
- `/lint` — Run ESLint
- `/typecheck` — TypeScript check
- `/deploy-preview` — Vercel preview deploy
- `/deploy-prod` — Vercel production deploy
- `/add-extension` — Add TipTap extension (guided)
- `/add-editor-mode` — Add editor mode (guided)
- `/fix-bubble-menu` — Debug bubble menus

---

## 9. FILES FOR AI CONTEXT (Priority Order)

When working on this project, read in this order:

1. **`AGENTS.md`** — Project-specific AI instructions
2. **`PROJECT_REFERENCE_INDEX.md`** — Full project reference
3. **`context/EditorContext.tsx`** — Core state management
4. **`constants/EditorExtension.tsx`** — All TipTap extensions
5. **`constants/EditorMenuOptions.ts`** — Toolbar configuration
6. **`components/EditorPage.tsx`** — Main editor component
7. **`components/EditorMenuBar.tsx`** — Toolbar rendering
8. **`components/bubbleMenu/*.tsx`** — Context menus
9. **`components/extensions/*.ts`** — Custom extensions
10. **`components/models/*.tsx`** — Modal dialogs

---

## 10. NEXT IMMEDIATE ACTIONS

### For Portfolio Showcase (Week 1) — ✅ COMPLETED
1. ✅ Created `.workspace/TODO_PORTFOLIO.md` with detailed tasks
2. ✅ Redesigned landing page (`app/page.tsx`) with:
   - Hero section with live editor embed (`LiveEditorDemo` component)
   - Feature grid (8 cards with icons)
   - Stats section (6 metrics)
   - Tech specs table (10 items)
   - 4 mode cards with "Try X Mode" links
   - CTA section with GitHub star + demo links
   - Full footer with resources, connect, legal links
3. ✅ Added dark mode support (`ThemeToggle` component + `next/font` Geist)
4. ✅ Created `components/LiveEditorDemo.tsx` — Interactive mode switcher with live editors
5. ✅ Created `components/ThemeToggle.tsx` — Dark/light mode with localStorage persistence
6. ✅ Updated `app/layout.tsx` — Full metadata, Geist fonts, viewport config

### For Portfolio Showcase (Week 2) — IN PROGRESS
1. Create `app/demo/page.tsx` — Full-screen interactive demo
2. Sample content templates per mode
3. Keyboard shortcuts (⌘K command palette)
4. Accessibility audit (WCAG 2.1 AA)
5. Performance optimization (bundle analysis, lazy-load)
6. Blog post assets for portfolio website

### For Commercial Prep (Week 2-3)
1. Create `.workspace/LICENSE_STRATEGY.md` — Dual license legal review
2. Set up NPM package structure in `/packages/editor`
3. Extract editor as standalone package (peer deps)
4. Build documentation site (`/docs` folder or separate repo)
5. Integrate Stripe for license sales

### Infrastructure
1. Add Vitest + Playwright test suite
2. Set up Chromatic for visual regression
3. Add bundle analyzer (`@next/bundle-analyzer`)
4. Configure Sentry for error tracking

---

## 11. KEY DECISIONS & RATIONALE

| Decision | Rationale |
|----------|-----------|
| Next.js 16 App Router | Modern, Server Components, streaming |
| TipTap v3 | Headless, framework-agnostic, active development |
| shadcn/ui + Radix | Accessible, customizable, no runtime overhead |
| Tailwind CSS 4 | CSS-first, faster builds, native variables |
| Context + `useEditor` key | Forces clean reinit on mode switch |
| `immediatelyRender: false` | Prevents hydration mismatch, better perf |
| MIT → Dual license | OSS adoption + commercial revenue |
| Vercel deployment | Zero-config Next.js, edge functions, analytics |

---

## 12. CONTACT & RESOURCES

- **Author:** Ranit Saha (Coderooz)
- **Email:** contact@coderooz.in
- **Website:** https://coderooz.in
- **GitHub:** https://github.com/coderooz
- **Twitter/X:** @coderooz
- **Legal Docs:** `C:\Code_Works\Docs\legal\`

---

## 13. WORKSPACE FILES INDEX

```
.workspace/
├── PROJECT_CONTEXT_REPORT.md      # This file
├── TODO_PORTFOLIO.md              # Portfolio tasks (to create)
├── LICENSE_STRATEGY.md            # Commercial licensing (to create)
├── ARCHITECTURE_DECISIONS.md      # ADR log (to create)
├── TEST_PLAN.md                   # Test strategy (to create)
├── DEPLOYMENT_CHECKLIST.md        # Pre-deploy verification (to create)
└── CHANGELOG_DRAFT.md             # Unreleased changes tracking
```

---

*This report is the single source of truth for AI-assisted development on this project. Update it when architecture, scope, or commercial strategy changes.*