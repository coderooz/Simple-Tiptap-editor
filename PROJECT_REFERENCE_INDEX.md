# Project Reference Index (PRI)

**Project:** TipTap-Editor
**Version:** 1.0.0
**Last Updated:** 2026-08-28
**Repository:** https://github.com/coderooz/TipTap-Editor
**Deployment:** https://tiptap-editor.vercel.app

---

## Project Overview

A professional, production-ready TipTap rich-text editor showcase and reference implementation. Built with Next.js 16, React 19, TypeScript, and TipTap v3. Features 4 editor modes, 40+ toolbar actions, bubble menus, custom extensions, and comprehensive documentation for reusable integration.

---

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 16.0.1 (App Router) |
| Language | TypeScript | 5.x |
| Runtime | React | 19.2.0 |
| Styling | Tailwind CSS | 4.x |
| UI Components | shadcn/ui | Latest |
| Editor | TipTap | 3.10.1 |
| Icons | Lucide React | 0.548.0 |
| Package Manager | npm | Latest |
| Deployment | Vercel | Latest |

---

## Project Structure

```
TipTap-Editor/
├── .github/
│   ├── workflows/
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE/
├── .vscode/
│   └── settings.json
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

## Key Files & Entry Points

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with providers |
| `app/page.tsx` | Landing page with live demo |
| `app/demo/page.tsx` | Full playground |
| `components/editor/EditorCore.tsx` | Minimal editor wrapper |
| `components/toolbar/Toolbar.tsx` | Dynamic toolbar |
| `components/bubble-menus/BubbleMenuRegistry.tsx` | Bubble menu registry |
| `context/EditorContext.tsx` | Global editor state management |
| `constants/tiptap-feature-registry.ts` | Feature registry (SSOT) |
| `constants/EditorMenuOptions.ts` | Toolbar button definitions |
| `editor/core/extensions.ts` | Extension composition factory |
| `lib/utils.ts` | Utility functions (cn) |

---

## Editor Modes

| Mode | Route | Description | Extension Set |
|------|-------|-------------|---------------|
| `comment` | `/comment` | Minimal editor for comments | `COMMENT_EXTENSIONS` |
| `document` | `/docs` | Full-page editor for documents | `DOCUMENT_EXTENSIONS` |
| `content` | `/content` | Blog/post-style rich editor | `BLOG_EXTENSIONS` |
| `default` | `/` | Basic TipTap setup | `DEFAULT_EXTENSIONS` |

---

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run typecheck # TypeScript strict check
```

---

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Type checking
npm run typecheck
```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_APP_URL` | No | Application URL for production |

---

## Deployment

**Platform:** Vercel
**URL:** https://tiptap-editor.vercel.app
**Branch:** main (auto-deploy on push)

---

## Git Configuration

- **Default Branch:** main
- **Remote:** origin (https://github.com/coderooz/TipTap-Editor)
- **Commit Convention:** Conventional Commits

---

## Code Quality Tools

- **ESLint:** Flat config with React, TypeScript, Tailwind rules
- **TypeScript:** Strict mode enabled
- **Prettier:** Configured with Tailwind plugin
- **Husky:** Git hooks for pre-commit checks
- **lint-staged:** Run linters on staged files

---

## Testing

Test framework: Vitest + Playwright (in progress)
- Unit tests for extensions and utilities
- Integration tests for editor behavior
- E2E tests for critical user flows
- Accessibility tests with axe-core

---

## Known Issues / Technical Debt

1. Test suite in progress (Vitest + Playwright setup)
2. CI/CD pipeline with GitHub Actions (planned)
3. Dependabot configuration (planned)
4. Error boundary implementation (planned)
5. Analytics/tracking integration (planned)
6. Collaborative editing (Yjs) - dependencies installed, demo planned

---

## Future Enhancements

- [ ] Complete test suite (Vitest + Playwright)
- [ ] CI/CD pipeline with GitHub Actions
- [ ] Dependabot for dependency updates
- [ ] Error boundaries
- [ ] Analytics integration
- [ ] Collaborative editing (Yjs) demo
- [ ] More editor modes
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Dark mode support
- [ ] Keyboard shortcuts documentation
- [ ] Command palette (cmdk integration)

---

## Contact

**Author:** Ranit Saha (Coderooz)
**Email:** contact@coderooz.in
**Website:** https://coderooz.in
**GitHub:** https://github.com/coderooz