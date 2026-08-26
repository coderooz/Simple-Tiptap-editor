# AGENTS.md — Simple-Tiptap-editor

> Project-specific instructions for AI agents working on this repository.

---

## Project Identity

- **Name:** Simple-Tiptap-editor
- **Type:** Next.js 16 + TipTap v3 Rich Text Editor
- **Author:** Ranit Saha (Coderooz)
- **Repository:** https://github.com/coderooz/Simple-Tiptap-editor
- **Deployment:** https://simple-tiptap-editor.vercel.app

---

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5 (strict mode)
- **UI:** React 19, Tailwind CSS 4, shadcn/ui
- **Editor:** TipTap v3.10.1
- **Icons:** Lucide React
- **Package Manager:** npm

---

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

---

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── comment/           # Comment editor mode
│   ├── content/           # Content/blog editor mode
│   ├── docs/              # Documentation editor mode
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/
│   ├── bubbleMenu/        # Context-aware bubble menus
│   ├── extensions/        # Custom TipTap extensions
│   ├── models/            # Modal dialogs (image, link, youtube, import/export)
│   ├── ui/                # shadcn/ui components
│   ├── EditorButton.tsx   # Toolbar button component
│   ├── EditorMenuBar.tsx  # Dynamic toolbar
│   ├── EditorPage.tsx     # Main editor component
│   ├── MenuButton.tsx     # Menu button wrapper
│   └── MenuSelect.tsx     # Dropdown select component
├── constants/
│   ├── EditorExtension.tsx    # TipTap extension configurations
│   ├── EditorMenuOptions.ts   # Toolbar button definitions
│   └── EditorStateOptions.tsx # Editor state types
├── context/
│   └── EditorContext.tsx  # Global editor state (Provider + Hook)
├── lib/
│   └── utils.ts           # Utility functions (cn)
└── public/                # Static assets
```

---

## Editor Architecture

### Editor Modes (4 types)
| Mode | Use Case | Extensions |
|------|----------|------------|
| `comment` | Minimal comments | `COMMENT_EXTENSIONS` |
| `document` | Full documents | `DOCUMENT_EXTENSIONS` |
| `content` | Blog/posts | `BLOG_EXTENSIONS` |
| `default` | Basic editor | `DEFAULT_EXTENSIONS` |

### Key Components

1. **EditorContext.tsx** — Global state provider with `useEditorContext()` hook
2. **EditorPage.tsx** — Main editor rendering component
3. **EditorMenuBar.tsx** — Dynamic toolbar from `EditorMenuOptions.ts`
4. **Bubble Menus** — Context menus for text, images, tables, YouTube
5. **Custom Extensions** — ImageResizable, FontFamily, FontSize, MarkDownLink

---

## Code Conventions

### TypeScript
- Strict mode enabled
- Prefer `interface` over `type` for object shapes
- Use `const` over `let`, never `var`
- Avoid `any` — use `unknown` with type guards
- Use optional chaining (`?.`) and nullish coalescing (`??`)

### React/Next.js
- Server Components by default
- `'use client'` only when needed (interactivity, browser APIs, context)
- Colocate styles, tests, types with components
- Use `next/image` for images

### Styling
- Tailwind CSS 4 with CSS variables
- shadcn/ui patterns: `cva()` for variants, `cn()` for class merging
- Use `clsx` + `tailwind-merge` via `lib/utils.ts`

### File Naming
- Components: PascalCase (`EditorPage.tsx`)
- Utilities: camelCase (`utils.ts`)
- Constants: PascalCase (`EditorExtension.tsx`)
- Types: PascalCase with `Type` suffix (`EditorType`)

---

## Git Workflow

- **Branch:** `main` (protected)
- **Commits:** Conventional Commits (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `test:`, `style:`, `perf:`)
- **PR Required:** Yes, for all changes to main
- **Reviews:** At least 1 approval required

---

## Quality Gates

Before committing/pushing:
1. `npm run lint` — passes
2. `npx tsc --noEmit` — passes
2. `npm run build` — passes
3. No console.log in production code
4. No commented-out code blocks

---

## Agent Instructions

### When Adding Features
1. Check existing patterns in `components/`, `constants/`, `context/`
2. Follow shadcn/ui component patterns for new UI
3. Add new extensions to `constants/EditorExtension.tsx`
4. Add new toolbar items to `constants/EditorMenuOptions.ts`
5. Update types in `constants/EditorStateOptions.tsx` if needed

### When Fixing Bugs
1. Reproduce locally first
2. Check EditorContext for state management issues
3. Verify TipTap extension configurations
4. Test all 4 editor modes

### When Refactoring
1. Maintain backward compatibility
2. Update all 4 editor modes if changing extensions
3. Test bubble menus for affected nodes
4. Verify import/export functionality

---

## Common Tasks

### Add New Toolbar Button
1. Add icon import to `EditorMenuOptions.ts`
2. Add button config to appropriate group
3. Define `isActive` and `action` functions

### Add New TipTap Extension
1. Create extension in `components/extensions/`
2. Export from `constants/EditorExtension.tsx`
3. Add to relevant extension arrays

### Add New Editor Mode
1. Add mode to `EditorType` in `EditorContext.tsx`
2. Create extension array in `EditorExtension.tsx`
3. Add case to extensions map in `EditorContext.tsx`
4. Create page in `app/<mode>/page.tsx`

---

## Testing Strategy (Future)

- Unit: Vitest for utilities and hooks
- Integration: Playwright for editor flows
- Visual: Chromatic for UI components
- E2E: Playwright for critical user journeys

---

## Deployment

- **Platform:** Vercel
- **Trigger:** Push to `main`
- **Preview:** Automatic for PRs
- **Environment:** Production on `main`, Preview on PRs

---

## Security

- No secrets in code
- Validate all user inputs
- Sanitize HTML output from editor
- Rate limit API routes (when added)

---

## Accessibility

- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management in modals
- Color contrast compliance

---

## Performance

- Dynamic imports for heavy components
- `immediatelyRender: false` in TipTap
- Memoize editor extensions
- Optimize images with `next/image`

---

## References

- [TipTap Documentation](https://tiptap.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)