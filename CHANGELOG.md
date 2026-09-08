# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-08-28

### Added
- **Project renamed** from `simple-tiptap-editor` to `tiptap-editor` (TipTap-Editor)
- Professional repository configuration with GitHub Actions CI/CD pipeline
- GitHub Issues, PR templates, and milestone tracking
- Contributing guidelines, Code of Conduct, Security policy
- MIT License
- Comprehensive PROJECT_REFERENCE_INDEX.md (PRI) for AI reference
- AGENTS.md with project-specific AI agent instructions
- Feature registry (SSOT) at `constants/tiptap-feature-registry.ts`
- Professional README with complete documentation
- DEVELOPMENT_NOTES.md for development context

### Changed
- **Project name**: `simple-tiptap-editor` → `tiptap-editor` (TipTap-Editor)
- **Version**: 0.1.0 → 1.0.0 (production-ready release)
- **Repository**: `coderooz/Simple-Tiptap-editor` → `coderooz/TipTap-Editor`
- **Deployment URL**: `simple-tiptap-editor.vercel.app` → `tiptap-editor.vercel.app`
- **Package name**: `simple-tiptap-editor` → `tiptap-editor`
- Updated all documentation references to new project name
- Updated package.json with professional metadata, keywords, and repository info
- Updated PROJECT_REFERENCE_INDEX.md (PRI) with new project identity
- Updated AGENTS.md with new project name and references

### Fixed
- TypeScript strict mode compliance across codebase
- ESLint warnings resolved (unused imports, explicit any types)
- Build configuration optimized for production

## [0.1.0] - 2025-10-30

### Added
- Initial release of Simple-Tiptap-editor
- Next.js 15 (App Router) with TypeScript
- TipTap v3 integration
- Four editor modes: comment, document, content, default
- Dynamic menu bar with toolbar buttons
- Context-aware bubble menus (text, image, table, YouTube)
- Custom extensions: ImageResizable, FontFamily, FontSize, MarkDownLink
- Modal dialogs for image, link, YouTube, import/export
- shadcn/ui component library integration
- Tailwind CSS 4 styling
- Lucide React icons
- Editor context API for global state management
- Import/Export functionality (HTML/JSON)
- Vercel deployment configuration

### Editor Modes
- **Comment** - Minimal editor for comments
- **Document** - Full-page editor for documents
- **Content** - Blog/post-style rich editor
- **Default** - Basic TipTap setup

### Extensions Included
- StarterKit
- Blockquote, Bold, Code, CodeBlockLowlight
- Collaboration, Details, DragHandle, DragHandleReact
- FileHandler, Heading, Highlight, HorizontalRule
- Image, Italic, Link, List, NodeRange
- Paragraph, Placeholder, Strike, Subscript, Superscript
- Table, Text, TextAlign, TextStyle, Typography
- Underline, YouTube
- Custom: FontFamily, FontSize, ImageResizable, MarkDownLink

---

## Release Template

### [Version] - YYYY-MM-DD

#### Added
- New features

#### Changed
- Changes in existing functionality

#### Deprecated
- Soon-to-be removed features

#### Removed
- Removed features

#### Fixed
- Bug fixes

#### Security
- Security improvements