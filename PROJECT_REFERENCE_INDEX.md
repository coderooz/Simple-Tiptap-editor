# Project Reference Index (PRI)

**Project:** Simple-Tiptap-editor
**Version:** 0.1.0
**Last Updated:** 2026-08-26
**Repository:** https://github.com/coderooz/Simple-Tiptap-editor
**Deployment:** https://simple-tiptap-editor.vercel.app

---

## Project Overview

A modern, extensible rich-text editor built with Next.js 16, TypeScript, and TipTap v3 — featuring a modular menu bar, bubble menus, image resizing, YouTube embeds, table tools, and customizable extensions for documents, blog content, and comments.

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
Simple-Tiptap-editor/
├── .github/
│   ├── workflows/
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE/
├── .vscode/
│   └── settings.json
├── app/
│   ├── comment/page.tsx
│   ├── content/page.tsx
│   ├── docs/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── bubbleMenu/
│   │   ├── BaseBubbleMenu.tsx
│   │   ├── ImageBubbleMenu.tsx
│   │   ├── TableBubbleMenu.tsx
│   │   ├── TextBubbleMenu.tsx
│   │   └── YoutubeBubbleMenu.tsx
│   ├── extensions/
│   │   ├── FontFamily.ts
│   │   ├── FontSize.ts
│   │   ├── ImageResizable.tsx
│   │   └── MarkDownLink.ts
│   ├── models/
│   │   ├── image.tsx
│   │   ├── ImportExport.tsx
│   │   ├── link.tsx
│   │   └── youtube.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── command.tsx
│   │   ├── dialog.tsx
│   │   ├── hover-card.tsx
│   │   ├── input.tsx
│   │   ├── native-select.tsx
│   │   ├── popover.tsx
│   │   ├── select.tsx
│   │   └── tabs.tsx
│   ├── EditorButton.tsx
│   ├── EditorMenuBar.tsx
│   ├── EditorPage.tsx
│   ├── MenuButton.tsx
│   └── MenuSelect.tsx
├── constants/
│   ├── EditorExtension.tsx
│   ├── EditorMenuOptions.ts
│   └── EditorStateOptions.tsx
├── context/
│   └── EditorContext.tsx
├── lib/
│   └── utils.ts
├── public/
│   ├── ContentImage.png
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── AGENTS.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── SECURITY.md
├── tsconfig.json
└── vercel.json
```

---

## Key Files & Entry Points

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with providers |
| `app/page.tsx` | Main landing page |
| `components/EditorPage.tsx` | Main editor component |
| `components/EditorMenuBar.tsx` | Dynamic toolbar |
| `context/EditorContext.tsx` | Global editor state management |
| `constants/EditorExtension.tsx` | TipTap extension configurations |
| `constants/EditorMenuOptions.ts` | Toolbar button definitions |
| `lib/utils.ts` | Utility functions (cn) |

---

## Editor Modes

| Mode | Description | Extensions |
|------|-------------|------------|
| `comment` | Minimal editor for comments | `COMMENT_EXTENSIONS` |
| `document` | Full-page editor for documents | `DOCUMENT_EXTENSIONS` |
| `content` | Blog/post-style rich editor | `BLOG_EXTENSIONS` |
| `default` | Basic TipTap setup | `DEFAULT_EXTENSIONS` |

---

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
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
npx tsc --noEmit
```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_APP_URL` | No | Application URL for production |

---

## Deployment

**Platform:** Vercel
**URL:** https://simple-tiptap-editor.vercel.app
**Branch:** main (auto-deploy on push)

---

## Git Configuration

- **Default Branch:** main
- **Remote:** origin (https://github.com/coderooz/Simple-Tiptap-editor)
- **Commit Convention:** Conventional Commits

---

## Code Quality Tools

- **ESLint:** Configured with Next.js recommended rules
- **TypeScript:** Strict mode enabled
- **Prettier:** Configured for consistent formatting
- **Husky:** Git hooks for pre-commit checks
- **lint-staged:** Run linters on staged files

---

## Testing

No test framework currently configured. Recommended: Vitest + Playwright.

---

## Known Issues / Technical Debt

1. No automated test suite
2. No CI/CD pipeline configured
3. No dependency update automation (Dependabot)
4. EditorContext has commented-out bubble menu components
5. No error boundary implementation
6. No analytics/tracking configured

---

## Future Enhancements

- [ ] Add comprehensive test suite
- [ ] Implement CI/CD with GitHub Actions
- [ ] Add Dependabot for dependency updates
- [ ] Add error boundaries
- [ ] Add analytics integration
- [ ] Add collaborative editing (Yjs)
- [ ] Add more editor modes
- [ ] Improve accessibility (WCAG compliance)
- [ ] Add dark mode support
- [ ] Add keyboard shortcuts documentation

---

## Contact

**Author:** Ranit Saha (Coderooz)
**Email:** contact@coderooz.in
**Website:** https://coderooz.in
**GitHub:** https://github.com/coderooz