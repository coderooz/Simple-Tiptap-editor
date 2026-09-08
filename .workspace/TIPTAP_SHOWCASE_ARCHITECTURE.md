# TipTap Showcase — Architecture Design

**Project:** Simple-Tiptap-editor → TipTap Showcase  
**Phase:** 1 — Architecture Design  
**Date:** 2026-08-26  
**Based on:** `TIPTAP_SHOWCASE_BASELINE.md`

---

## 1. ARCHITECTURAL PRINCIPLES

### 1.1 Core Principles

| Principle | Description |
|-----------|-------------|
| **Feature-First** | Every TipTap capability lives in its own discoverable boundary |
| **Composability** | Features can be combined without importing the entire showcase |
| **Discoverability** | A developer can find any feature implementation in < 30 seconds |
| **Copyability** | Minimal integration examples for every reusable feature |
| **Single Source of Truth** | Feature registry is the canonical catalog |
| **Progressive Disclosure** | Simple things simple, complex things possible |

### 1.2 Non-Goals

- ❌ Monolithic editor component
- ❌ Single giant configuration file
- ❌ Feature count over feature quality
- ❌ Architecture astronautics

---

## 2. PROPOSED DIRECTORY STRUCTURE

```
Simple-Tiptap-editor/
├── app/
│   ├── page.tsx                      # Landing page (showcase)
│   ├── demo/
│   │   ├── page.tsx                  # Full playground
│   │   └── components/               # Playground-specific UI
│   ├── features/
│   │   ├── [feature]/page.tsx        # Feature detail pages
│   │   └── page.tsx                  # Feature explorer index
│   ├── comment/page.tsx              # Reference scenario: Comment
│   ├── content/page.tsx              # Reference scenario: Content
│   ├── docs/page.tsx                 # Reference scenario: Document
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── editor/
│   │   ├── EditorCore.tsx            # Minimal editor wrapper
│   │   ├── EditorProvider.tsx        # Context provider
│   │   ├── EditorContent.tsx         # EditorContent wrapper
│   │   └── useEditor.ts              # Hook for editor access
│   ├── toolbar/
│   │   ├── Toolbar.tsx               # Main toolbar
│   │   ├── ToolbarGroup.tsx          # Group wrapper
│   │   ├── ToolbarButton.tsx         # Button renderer
│   │   ├── ToolbarDropdown.tsx       # Dropdown renderer
│   │   ├── ToolbarInput.tsx          # Input renderer
│   │   ├── ToolbarModel.tsx          # Modal renderer
│   │   └── registry.ts               # Feature → toolbar mapping
│   ├── bubble-menus/
│   │   ├── BaseBubbleMenu.tsx
│   │   ├── BubbleMenuRegistry.tsx    # Node type → menu mapping
│   │   ├── TextBubbleMenu.tsx
│   │   ├── ImageBubbleMenu.tsx
│   │   ├── TableBubbleMenu.tsx
│   │   └── YoutubeBubbleMenu.tsx
│   ├── dialogs/
│   │   ├── ImageDialog.tsx
│   │   ├── LinkDialog.tsx
│   │   ├── YoutubeDialog.tsx
│   │   └── ImportExportDialog.tsx
│   ├── commands/
│   │   ├── CommandPalette.tsx        # cmdk integration
│   │   └── registry.ts               # Feature → command mapping
│   ├── ui/                           # shadcn/ui (unchanged)
│   └── showcase/
│       ├── FeatureCard.tsx
│       ├── FeatureExplorer.tsx
│       ├── ImplementationViewer.tsx
│       └── MinimalExample.tsx
│
├── editor/
│   ├── core/
│   │   ├── createEditor.ts           # Editor factory
│   │   ├── EditorConfig.ts           # Configuration types
│   │   └── extensions.ts             # Extension composition
│   ├── extensions/
│   │   ├── index.ts                  # Barrel export
│   │   ├── formatting/
│   │   ├── links/
│   │   ├── media/
│   │   ├── tables/
│   │   ├── code/
│   │   ├── styling/
│   │   ├── lists/
│   │   ├── custom/
│   │   └── collaboration/
│   ├── commands/
│   │   ├── index.ts
│   │   ├── formatting.ts
│   │   ├── media.ts
│   │   ├── tables.ts
│   │   ├── links.ts
│   │   └── custom.ts
│   ├── state/
│   │   ├── EditorContext.tsx
│   │   ├── useEditorState.ts
│   │   └── types.ts
│   ├── serializers/
│   │   ├── html.ts
│   │   ├── json.ts
│   │   └── markdown.ts
│   └── types/
│       ├── editor.ts
│       ├── extensions.ts
│       └── features.ts
│
├── features/                         # FEATURE-CENTRIC (NEW)
│   ├── formatting/
│   │   ├── bold/
│   │   │   ├── BoldExtension.ts
│   │   │   ├── BoldCommand.ts
│   │   │   ├── BoldToolbar.ts
│   │   │   ├── BoldExample.tsx
│   │   │   ├── BoldTest.tsx
│   │   │   └── README.md
│   │   ├── italic/
│   │   ├── underline/
│   │   ├── strike/
│   │   ├── code/
│   │   ├── highlight/
│   │   ├── subscript/
│   │   └── superscript/
│   ├── links/
│   │   ├── link/
│   │   │   ├── LinkExtension.ts
│   │   │   ├── LinkCommand.ts
│   │   │   ├── LinkToolbar.ts
│   │   │   ├── LinkBubbleMenu.ts
│   │   │   ├── LinkDialog.tsx
│   │   │   ├── LinkExample.tsx
│   │   │   ├── LinkTest.tsx
│   │   │   └── README.md
│   │   ├── markdown-link/
│   │   └── autolink/
│   ├── media/
│   │   ├── image/
│   │   │   ├── ImageExtension.ts
│   │   │   ├── ImageCommand.ts
│   │   │   ├── ImageToolbar.ts
│   │   │   ├── ImageBubbleMenu.ts
│   │   │   ├── ImageDialog.tsx
│   │   │   ├── ImageResizableExtension.ts
│   │   │   ├── ImageExample.tsx
│   │   │   ├── ImageTest.tsx
│   │   │   └── README.md
│   │   ├── youtube/
│   │   └── file-handler/
│   ├── tables/
│   │   ├── table/
│   │   │   ├── TableExtension.ts
│   │   │   ├── TableCommands.ts
│   │   │   ├── TableToolbar.ts
│   │   │   ├── TableBubbleMenu.ts
│   │   │   ├── TableExample.tsx
│   │   │   ├── TableTest.tsx
│   │   │   └── README.md
│   │   └── table-advanced/
│   ├── code/
│   │   ├── inline-code/
│   │   ├── code-block/
│   │   └── syntax-highlighting/
│   ├── lists/
│   │   ├── bullet-list/
│   │   ├── ordered-list/
│   │   ├── task-list/
│   │   └── indent-outdent/
│   ├── styling/
│   │   ├── text-color/
│   │   ├── background-color/
│   │   ├── font-family/
│   │   │   ├── FontFamilyExtension.ts
│   │   │   ├── FontFamilyCommand.ts
│   │   │   ├── FontFamilyToolbar.ts
│   │   │   ├── FontFamilyExample.tsx
│   │   │   └── README.md
│   │   ├── font-size/
│   │   ├── line-height/
│   │   └── text-align/
│   ├── custom-extensions/
│   │   ├── custom-mark/
│   │   ├── custom-node/
│   │   ├── custom-extension/
│   │   ├── custom-attribute/
│   │   ├── custom-command/
│   │   ├── custom-keyboard-shortcut/
│   │   ├── custom-input-rule/
│   │   ├── custom-paste-rule/
│   │   └── custom-node-view/
│   ├── collaboration/
│   │   ├── yjs-setup/
│   │   ├── presence/
│   │   └── awareness/
│   ├── serialization/
│   │   ├── html/
│   │   ├── json/
│   │   └── markdown/
│   ├── import-export/
│   │   ├── json-import/
│   │   ├── json-export/
│   │   ├── html-import/
│   │   └── html-export/
│   └── editor-state/
│       ├── character-count/
│       ├── word-count/
│       ├── read-only/
│       └── programmatic-updates/
│
├── examples/                         # MINIMAL INTEGRATION EXAMPLES
│   ├── basic-editor/
│   ├── headings/
│   ├── text-color/
│   ├── links/
│   ├── images/
│   ├── resizable-images/
│   ├── youtube/
│   ├── tables/
│   ├── code-blocks/
│   ├── character-count/
│   ├── custom-mark/
│   ├── custom-node/
│   ├── custom-extension/
│   └── import-export/
│
├── docs/
│   ├── architecture/
│   │   ├── editor-architecture.md
│   │   ├── feature-architecture.md
│   │   ├── extension-flow.md
│   │   ├── state-management.md
│   │   ├── serialization.md
│   │   └── testing.md
│   ├── features/
│   │   ├── formatting.md
│   │   ├── links.md
│   │   ├── media.md
│   │   ├── tables.md
│   │   ├── code.md
│   │   ├── styling.md
│   │   ├── lists.md
│   │   ├── custom-extensions.md
│   │   ├── collaboration.md
│   │   ├── serialization.md
│   │   └── import-export.md
│   ├── integration/
│   │   ├── getting-started.md
│   │   ├── minimal-setup.md
│   │   ├── adding-features.md
│   │   ├── custom-extensions.md
│   │   ├── toolbar-customization.md
│   │   ├── bubble-menus.md
│   │   ├── serialization.md
│   │   └── deployment.md
│   ├── reference/
│   │   ├── api-reference.md
│   │   ├── feature-registry.md
│   │   ├── implementation-matrix.md
│   │   └── reuse-readiness.md
│   └── TIPTAP_IMPLEMENTATION_MATRIX.md
│
├── tests/
│   ├── unit/
│   │   ├── extensions/
│   │   ├── commands/
│   │   ├── serializers/
│   │   └── utils/
│   ├── integration/
│   │   ├── editor/
│   │   ├── toolbar/
│   │   ├── bubble-menus/
│   │   └── dialogs/
│   ├── e2e/
│   │   ├── editor-flows/
│   │   ├── feature-interactions/
│   │   └── regression/
│   ├── accessibility/
│   │   ├── toolbar.a11y.test.ts
│   │   ├── editor.a11y.test.ts
│   │   └── dialogs.a11y.test.ts
│   └── fixtures/
│
├── constants/
│   ├── tiptap-feature-registry.ts    # SSOT for feature catalog (NEW)
│   ├── editor-modes.ts               # Mode definitions
│   └── editor-config.ts              # Shared config
│
├── context/
│   ├── EditorContext.tsx             # Refactored
│   └── EditorProvider.tsx
│
├── public/
│
├── .workspace/
│   ├── TIPTAP_SHOWCASE_BASELINE.md
│   ├── TIPTAP_SHOWCASE_ARCHITECTURE.md
│   ├── ARCHITECTURE_DECISIONS.md
│   ├── TODO.md
│   └── CHANGELOG_DRAFT.md
│
├── PROJECT_REFERENCE_INDEX.md        # Updated
├── README.md                         # Rewritten
├── AGENTS.md                         # Updated
├── CHANGELOG.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── opencode.jsonc
└── vercel.json
```

---

## 3. FEATURE REGISTRY (SSOT)

### 3.1 Registry Schema

```typescript
// constants/tiptap-feature-registry.ts

export type FeatureCategory =
  | "core-editing"
  | "text-styling"
  | "lists"
  | "links"
  | "media"
  | "tables"
  | "code"
  | "advanced-nodes"
  | "serialization"
  | "import-export"
  | "editor-state"
  | "ui-integration"
  | "custom-extensions"
  | "collaboration";

export type ImplementationLevel =
  | "native-tiptap"      // Direct TipTap extension usage
  | "tiptap-integration" // TipTap + project UI/state
  | "custom-extension";  // Project-specific extension

export type FeatureStatus =
  | "implemented"
  | "partial"
  | "experimental"
  | "planned"
  | "unsupported";

export interface FeatureRegistryEntry {
  // Identity
  id: string;                    // Unique: "tables", "images", "font-family"
  name: string;                  // Display: "Tables", "Resizable Images"
  category: FeatureCategory;
  
  // TipTap Integration
  tipTapExtensions: string[];    // Package names: ["@tiptap/extension-table"]
  customExtensions: string[];    // Local: ["ImageResizable"]
  implementationLevel: ImplementationLevel;
  
  // Status
  status: FeatureStatus;
  versionAdded: string;          // "v0.1.0"
  lastVerified: string;          // ISO date
  
  // Implementation Paths
  paths: {
    extension?: string;          // "editor/extensions/media/ImageExtension.ts"
    commands?: string;           // "editor/commands/media.ts"
    toolbar?: string;            // "components/toolbar/registry.ts"
    bubbleMenu?: string;         // "components/bubble-menus/ImageBubbleMenu.tsx"
    dialog?: string;             // "components/dialogs/ImageDialog.tsx"
    example?: string;            // "examples/images/"
    test?: string;               // "tests/integration/media/"
    docs?: string;               // "docs/features/media.md"
  };
  
  // Dependencies
  dependencies: {
    required: string[];          // Must install
    optional: string[];          // Enhances feature
    peer: string[];              // Peer deps
  };
  
  // Reusability
  reusability: {
    discoverable: boolean;       // In registry + explorer
    isolated: boolean;           // Can extract without project
    documented: boolean;         // Has README + docs
    tested: boolean;             // Has tests
    copyable: boolean;           // Has minimal example
    score: number;               // 0-100
  };
  
  // Showcase
  showcase: {
    demoRoute: string;           // "/demo?feature=images"
    detailRoute: string;         // "/features/images"
    hasLiveDemo: boolean;
    hasImplementationViewer: boolean;
  };
  
  // Notes
  knownLimitations: string[];
  migrationNotes?: string;
}
```

### 3.2 Registry Usage

```typescript
// Usage in Feature Explorer
import { featureRegistry } from "@/constants/tiptap-feature-registry";

// Get all implemented features
const implemented = featureRegistry.filter(f => f.status === "implemented");

// Get features by category
const mediaFeatures = featureRegistry.filter(f => f.category === "media");

// Get copyable features
const copyable = featureRegistry.filter(f => f.reusability.copyable);

// Generate implementation matrix
const matrix = featureRegistry.map(f => ({
  feature: f.name,
  category: f.category,
  tipTapExtensions: f.tipTapExtensions.join(", "),
  customExtensions: f.customExtensions.join(", "),
  status: f.status,
  docs: f.paths.docs ? "✅" : "❌",
  tests: f.paths.test ? "✅" : "❌",
  demo: f.showcase.hasLiveDemo ? "✅" : "❌",
  reusable: f.reusability.copyable ? "✅" : "❌",
}));
```

---

## 4. EXTENSION COMPOSITION SYSTEM

### 4.1 Factory Function

```typescript
// editor/core/extensions.ts

export interface FeatureSet {
  // Core editing
  basicFormatting?: boolean;
  headings?: boolean;
  lists?: boolean;
  code?: boolean;
  blockquote?: boolean;
  horizontalRule?: boolean;
  
  // Text styling
  textColor?: boolean;
  backgroundColor?: boolean;
  highlight?: boolean;
  fontFamily?: boolean;
  fontSize?: boolean;
  lineHeight?: boolean;
  subscript?: boolean;
  superscript?: boolean;
  textAlign?: boolean;
  
  // Links
  links?: boolean;
  markdownLinks?: boolean;
  autolink?: boolean;
  
  // Media
  images?: boolean;
  resizableImages?: boolean;
  youtube?: boolean;
  fileHandler?: boolean;
  
  // Tables
  tables?: boolean;
  tableAdvanced?: boolean;
  
  // Code
  inlineCode?: boolean;
  codeBlocks?: boolean;
  syntaxHighlighting?: boolean;
  
  // Advanced
  details?: boolean;
  taskLists?: boolean;
  footnotes?: boolean;
  mentions?: boolean;
  
  // Collaboration
  collaboration?: boolean;
  
  // State
  characterCount?: boolean;
  wordCount?: boolean;
  readOnly?: boolean;
  
  // History
  undoRedo?: boolean;
}

export function createEditorExtensions(config: FeatureSet = {}): Extension[] {
  const extensions: Extension[] = [];
  
  // Core (always included)
  extensions.push(
    Document.configure(baseAttr),
    Paragraph.configure({ HTMLAttributes: { class: "mb-4 mt-0" } }),
    Text.configure(baseAttr)
  );
  
  // Basic Formatting
  if (config.basicFormatting !== false) {
    extensions.push(
      Bold.configure(baseAttr),
      Italic.configure(baseAttr),
      Underline.configure(baseAttr),
      Strike.configure({ HTMLAttributes: { class: "line-through text-gray-500" } })
    );
  }
  
  // Headings
  if (config.headings) {
    extensions.push(Heading);
  }
  
  // Lists
  if (config.lists) {
    extensions.push(
      BulletList.configure({ ... }),
      OrderedList.configure({ ... }),
      ListItem.configure({ ... })
    );
  }
  
  // ... continue for all features
  
  // Always add placeholder
  extensions.push(
    Placeholder.configure({
      placeholder: "Write something…",
      includeChildren: true,
      showOnlyWhenEditable: true,
    })
  );
  
  return extensions;
}

// Preset configurations
export const editorPresets = {
  minimal: createEditorExtensions({
    basicFormatting: true,
    links: true,
  }),
  
  comment: createEditorExtensions({
    basicFormatting: true,
    links: true,
    characterCount: true,
  }),
  
  document: createEditorExtensions({
    basicFormatting: true,
    headings: true,
    lists: true,
    code: true,
    blockquote: true,
    horizontalRule: true,
    textColor: true,
    backgroundColor: true,
    highlight: true,
    fontFamily: true,
    fontSize: true,
    lineHeight: true,
    subscript: true,
    superscript: true,
    textAlign: true,
    links: true,
    markdownLinks: true,
    autolink: true,
    images: true,
    resizableImages: true,
    youtube: true,
    fileHandler: true,
    tables: true,
    tableAdvanced: true,
    inlineCode: true,
    codeBlocks: true,
    syntaxHighlighting: true,
    details: true,
    undoRedo: true,
    characterCount: true,
  }),
  
  content: createEditorExtensions({
    // Same as document but without characterCount
    ...editorPresets.document,
    characterCount: false,
  }),
  
  default: createEditorExtensions({
    basicFormatting: true,
    links: true,
    markdownLinks: true,
    textAlign: true,
    undoRedo: true,
  }),
};
```

### 4.2 Usage

```typescript
// In EditorProvider
import { createEditorExtensions, editorPresets } from "@/editor/core/extensions";

const extensions = useMemo(() => {
  return editorPresets[editorType] || editorPresets.default;
}, [editorType]);
```

---

## 5. TOOLBAR REGISTRATION SYSTEM

### 5.1 Feature → Toolbar Mapping

```typescript
// components/toolbar/registry.ts

import type { MenuItem } from "@/constants/EditorMenuOptions";

export interface ToolbarFeatureRegistration {
  featureId: string;              // Matches feature registry ID
  items: MenuItem[];              // Toolbar items for this feature
  group: string;                  // Toolbar group
  order?: number;                 // Within group
  condition?: (editor: Editor) => boolean; // When to show
}

export const toolbarRegistry: ToolbarFeatureRegistration[] = [
  {
    featureId: "history",
    group: "history",
    order: 1,
    items: [
      { title: "Undo", icon: Undo, type: "button", action: (e) => e.chain().focus().undo().run() },
      { title: "Redo", icon: Redo, type: "button", action: (e) => e.chain().focus().redo().run() },
    ],
  },
  {
    featureId: "basic-formatting",
    group: "styling",
    order: 1,
    items: [
      { title: "Bold", icon: Bold, type: "button", isActive: (e) => e.isActive("bold"), action: (e) => e.chain().focus().toggleBold().run() },
      { title: "Italic", icon: Italic, type: "button", isActive: (e) => e.isActive("italic"), action: (e) => e.chain().focus().toggleItalic().run() },
      { title: "Underline", icon: Underline, type: "button", isActive: (e) => e.isActive("underline"), action: (e) => e.chain().focus().toggleUnderline().run() },
      { title: "Strike", icon: Strikethrough, type: "button", isActive: (e) => e.isActive("strike"), action: (e) => e.chain().focus().toggleStrike().run() },
    ],
  },
  {
    featureId: "links",
    group: "insert",
    order: 1,
    items: [
      { title: "Link", icon: Link, type: "model", isActive: (e) => e.isActive("link"), model: { title: "Add / Edit Link", content: (e) => <LinkDialog editor={e} /> } },
    ],
  },
  // ... more features
];

// Build toolbar for current editor configuration
export function buildToolbar(enabledFeatures: string[]): MenuItem[] {
  return toolbarRegistry
    .filter(reg => enabledFeatures.includes(reg.featureId))
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .flatMap(reg => reg.items);
}
```

### 5.2 Dynamic Toolbar

```typescript
// components/toolbar/Toolbar.tsx
export function Toolbar({ editor, enabledFeatures }: { editor: Editor; enabledFeatures: string[] }) {
  const menuItems = useMemo(() => buildToolbar(enabledFeatures), [enabledFeatures]);
  
  // Group and render as before
}
```

---

## 6. BUBBLE MENU REGISTRATION

### 6.1 Node Type → Menu Mapping

```typescript
// components/bubble-menus/BubbleMenuRegistry.ts

import type { Editor } from "@tiptap/react";
import { BaseBubbleMenu } from "./BaseBubbleMenu";

export interface BubbleMenuRegistration {
  nodeType: string;                    // TipTap node/mark name
  component: React.FC<{ editor: Editor | null }>;
  priority?: number;                   // When multiple match
  condition?: (editor: Editor) => boolean;
}

export const bubbleMenuRegistry: BubbleMenuRegistration[] = [
  {
    nodeType: "text",
    component: TextBubbleMenu,
    priority: 10,
  },
  {
    nodeType: "paragraph",
    component: TextBubbleMenu,
    priority: 10,
  },
  {
    nodeType: "image",
    component: ImageBubbleMenu,
    priority: 20,
  },
  {
    nodeType: "imageResizable",
    component: ImageBubbleMenu,
    priority: 20,
  },
  {
    nodeType: "table",
    component: TableBubbleMenu,
    priority: 20,
  },
  {
    nodeType: "youtube",
    component: YoutubeBubbleMenu,
    priority: 20,
  },
];

// Render all matching bubble menus
export function BubbleMenus({ editor }: { editor: Editor | null }) {
  if (!editor) return null;
  
  const activeMenus = bubbleMenuRegistry
    .filter(reg => reg.condition?.(editor) ?? editor.isActive(reg.nodeType))
    .sort((a, b) => (b.priority || 0) - (a.priority || 0));
  
  return (
    <>
      {activeMenus.map(reg => (
        <reg.component key={reg.nodeType} editor={editor} />
      ))}
    </>
  );
}
```

---

## 7. COMMAND REGISTRATION

### 7.1 Feature → Command Mapping

```typescript
// editor/commands/registry.ts

export interface CommandRegistration {
  featureId: string;
  commands: Record<string, (editor: Editor, ...args: any[]) => boolean>;
  shortcuts?: Record<string, string>; // "mod+b" → "bold"
}

export const commandRegistry: CommandRegistration[] = [
  {
    featureId: "basic-formatting",
    commands: {
      bold: (editor) => editor.chain().focus().toggleBold().run(),
      italic: (editor) => editor.chain().focus().toggleItalic().run(),
      underline: (editor) => editor.chain().focus().toggleUnderline().run(),
      strike: (editor) => editor.chain().focus().toggleStrike().run(),
    },
    shortcuts: {
      "mod+b": "bold",
      "mod+i": "italic",
      "mod+u": "underline",
    },
  },
  {
    featureId: "links",
    commands: {
      setLink: (editor, href: string) => editor.chain().focus().extendMarkRange("link").setLink({ href }).run(),
      unsetLink: (editor) => editor.chain().focus().extendMarkRange("link").unsetLink().run(),
    },
    shortcuts: {
      "mod+k": "setLink",
    },
  },
  // ...
];

// Hook for keyboard shortcuts
export function useCommandShortcuts(editor: Editor | null, enabledFeatures: string[]) {
  useEffect(() => {
    if (!editor) return;
    
    const shortcuts = commandRegistry
      .filter(reg => enabledFeatures.includes(reg.featureId))
      .flatMap(reg => Object.entries(reg.shortcuts || {}));
    
    // Register with editor or global listener
  }, [editor, enabledFeatures]);
}
```

---

## 8. MINIMAL INTEGRATION EXAMPLES

### 8.1 Example Template

Each example in `examples/` follows this structure:

```
examples/
└── images/
    ├── package.json          # Minimal deps
    ├── tsconfig.json
    ├── next.config.ts        # If Next.js
    ├── src/
    │   ├── app/
    │   │   ├── page.tsx      # Demo page
    │   │   └── layout.tsx
    │   ├── components/
    │   │   └── Editor.tsx    # Minimal editor with ONLY image feature
    │   └── lib/
    │       └── utils.ts
    ├── README.md             # Copy-paste instructions
    └── COPY_INSTRUCTIONS.md  # Exact file list + modifications
```

### 8.2 COPY_INSTRUCTIONS.md Template

```markdown
# Copy Instructions: Resizable Images

## Files to Copy

### Required
- `editor/extensions/media/ImageResizableExtension.ts` → `your-project/extensions/`
- `components/bubble-menus/ImageBubbleMenu.tsx` → `your-project/components/`
- `components/dialogs/ImageDialog.tsx` → `your-project/components/`

### Optional
- `editor/commands/media.ts` → `your-project/commands/` (if using command layer)
- `features/media/images/ImageExample.tsx` → `your-project/examples/` (for reference)

## Modifications Required

1. **Update imports** — Change `@/` aliases to your project paths
2. **Register extension** — Add `ImageResizable` to your editor extensions
3. **Register bubble menu** — Add to your bubble menu registry
4. **Register toolbar** — Add image toolbar items
5. **Add styles** — Copy Tailwind classes from example
6. **Configure dialog** — Update `ImageDialog` for your upload API

## Dependencies

```json
{
  "@tiptap/extension-image": "^3.x",
  "@tiptap/react": "^3.x",
  "@tiptap/core": "^3.x"
}
```

## Integration Checklist

- [ ] Extension added to editor
- [ ] Bubble menu shows on image selection
- [ ] Toolbar button inserts image
- [ ] Dialog opens and inserts image
- [ ] Resize handles work
- [ ] Alignment works
- [ ] Delete works
- [ ] Styles applied correctly
```

---

## 9. DOCUMENTATION STRUCTURE

### 9.1 Feature Documentation Template

Each feature in `docs/features/` follows:

```markdown
# Feature Name

## Purpose
What this feature does and when to use it.

## What TipTap Provides
Native TipTap extension capabilities.

## What This Project Adds
Project-specific UI, commands, bubble menus, dialogs.

## Dependencies
Required/optional/peer packages.

## Extension Configuration
Code showing extension setup.

## Editor Integration
How to add to editor.

## Toolbar Integration
How to add toolbar buttons.

## Bubble/Floating UI
Contextual menu implementation.

## Commands
Programmatic control.

## Styling
Tailwind/CSS classes used.

## Serialization
HTML/JSON behavior.

## Minimal Integration
Link to example + copy instructions.

## Full Implementation
Link to source files.

## Usage Example
Code snippet.

## Testing
Test coverage.

## Accessibility
WCAG compliance notes.

## Performance Notes
Bundle impact, lazy-loading.

## Common Mistakes
Pitfalls to avoid.

## Copy/Adapt Checklist
Step-by-step extraction guide.
```

---

## 10. TESTING STRATEGY

### 10.1 Test Pyramid

```
                    E2E (Playwright)
                   /                  \
          Integration (Vitest)        \
         /              \              \
Unit (Vitest)    Accessibility (axe)  Visual (Chromatic)
```

### 10.2 Test Coverage Targets

| Layer | Target | Tools |
|-------|--------|-------|
| Unit | 80% | Vitest |
| Integration | 70% | Vitest |
| E2E | Critical paths | Playwright |
| Accessibility | 100% critical | axe-core |
| Visual | Key states | Chromatic |

### 10.3 Test Organization

```
tests/
├── unit/
│   ├── extensions/
│   │   ├── FontFamily.test.ts
│   │   ├── FontSize.test.ts
│   │   ├── ImageResizable.test.ts
│   │   └── MarkDownLink.test.ts
│   ├── commands/
│   │   ├── formatting.test.ts
│   │   ├── media.test.ts
│   │   └── tables.test.ts
│   ├── serializers/
│   │   ├── html.test.ts
│   │   ├── json.test.ts
│   │   └── markdown.test.ts
│   └── utils/
│       └── cn.test.ts
├── integration/
│   ├── editor/
│   │   ├── editor-initialization.test.ts
│   │   ├── mode-switching.test.ts
│   │   └── content-sync.test.ts
│   ├── toolbar/
│   │   ├── button-actions.test.ts
│   │   ├── dropdown-selection.test.ts
│   │   └── model-dialogs.test.ts
│   ├── bubble-menus/
│   │   ├── text-bubble.test.ts
│   │   ├── image-bubble.test.ts
│   │   └── table-bubble.test.ts
│   └── dialogs/
│       ├── image-dialog.test.ts
│       ├── link-dialog.test.ts
│       └── youtube-dialog.test.ts
├── e2e/
│   ├── editor-flows/
│   │   ├── create-document.spec.ts
│   │   ├── edit-content.spec.ts
│   │   └── mode-switching.spec.ts
│   ├── feature-interactions/
│   │   ├── tables.spec.ts
│   │   ├── images.spec.ts
│   │   └── youtube.spec.ts
│   └── regression/
│       └── serialization-roundtrip.spec.ts
├── accessibility/
│   ├── toolbar.a11y.test.ts
│   ├── editor.a11y.test.ts
│   └── dialogs.a11y.test.ts
└── fixtures/
    ├── sample-html.html
    ├── sample-json.json
    └── sample-markdown.md
```

---

## 11. MIGRATION STRATEGY

### 11.1 Phase 2: Core Refactor (Week 1-2)

| Step | Action | Validation |
|------|--------|------------|
| 1 | Create `editor/core/` structure | Build passes |
| 2 | Extract `createEditorExtensions` factory | All 4 modes work |
| 3 | Move extensions to `editor/extensions/` | TypeScript passes |
| 4 | Create `editor/commands/` layer | Commands work |
| 5 | Create `editor/state/` types | Context works |
| 6 | Create `editor/serializers/` | Import/export works |
| 6 | Update `EditorContext.tsx` to use new core | All modes work |
| 7 | Update `EditorMenuBar.tsx` to use toolbar registry | Toolbar renders |
| 8 | Update bubble menus to use registry | Bubble menus show |

### 11.2 Phase 3: Feature Coverage (Week 3-4)

| Feature | Priority | Effort |
|---------|----------|--------|
| Task Lists | High | Medium |
| Footnotes | Medium | Medium |
| Mentions | Low | High |
| Search/Replace | Medium | Medium |
| Read-only mode | High | Low |
| Print/Export PDF | Low | Medium |

### 11.3 Phase 4: Showcase UI (Week 5-6)

| Component | Priority |
|-----------|----------|
| Feature Explorer | Critical |
| Full Playground (`/demo`) | Critical |
| Feature Detail Pages | High |
| Implementation Viewer | High |
| Minimal Example Viewer | High |

### 11.4 Phase 5: Documentation (Week 7)

| Doc | Priority |
|-----|----------|
| Feature docs (all) | Critical |
| Architecture docs | High |
| Integration guides | High |
| Copy/adapt guides | Critical |
| API reference | Medium |

### 11.5 Phase 6: Testing (Week 8)

| Test Type | Target |
|-----------|--------|
| Unit | 80% |
| Integration | 70% |
| E2E | Critical paths |
| Accessibility | 100% critical |
| Visual | Key states |

---

## 12. QUALITY GATES

### 12.1 Per-Feature Definition of Done

```markdown
## Feature: [Name]

- [ ] Implementation works
- [ ] Demo works in playground
- [ ] Documentation exists (`docs/features/`)
- [ ] Dependencies documented
- [ ] Minimal integration example exists (`examples/`)
- [ ] Unit tests exist (`tests/unit/`)
- [ ] Integration tests exist (`tests/integration/`)
- [ ] Feature registry updated (`tiptap-feature-registry.ts`)
- [ ] PROJECT_REFERENCE_INDEX.md updated
- [ ] Accessibility reviewed
- [ ] No unrelated regression
- [ ] Copy/adapt instructions exist (`examples/*/COPY_INSTRUCTIONS.md`)
```

### 12.2 Project-Level Gates

```bash
# Pre-commit (Husky)
npm run lint        # ESLint passes
npm run typecheck   # TypeScript passes
npm run build       # Build passes

# Pre-push (CI)
npm run test        # Unit + Integration pass
npm run test:e2e    # E2E critical paths pass
npm run test:a11y   # Accessibility passes

# Release
npm run test:all    # All tests pass
npm run build:prod  # Production build passes
```

---

## 13. ARCHITECTURAL DECISIONS LOG

| Decision | Context | Chosen | Rationale |
|----------|---------|--------|-----------|
| Feature directory structure | How to organize features | `features/{category}/{feature}/` | Matches mental model, enables isolation |
| Extension composition | Factory vs spread | Factory function | Explicit, composable, testable |
| Toolbar registration | Declarative config | Feature → toolbar mapping | Decouples features from toolbar |
| Bubble menu pattern | Per-node vs generic | Generic with registry | Reusable, extensible |
| State management | Context + hooks | Keep React Context | Native, no extra deps |
| Example structure | Per-feature minimal | `examples/{feature}/` | Copy-paste ready |
| Documentation format | MDX vs Markdown | Markdown | Simpler, AI-readable |
| Testing framework | Vitest + Playwright | Yes | Modern, fast, reliable |

---

## 14. RISK MITIGATION

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Breaking existing modes | High | High | Test all 4 modes after each refactor |
| Bundle size increase | Medium | Medium | Lazy-load heavy features, analyze bundle |
| TypeScript errors | High | Medium | Fix incrementally, use `unknown` casts |
| Feature regression | Medium | High | E2E tests for critical paths |
| Documentation drift | High | Medium | Generate from registry where possible |
| API changes in TipTap v3 | Low | High | Pin versions, test on updates |

---

## 15. SUCCESS METRICS

| Metric | Baseline | Target |
|--------|----------|--------|
| Feature discoverability (time to find) | ~10 min | < 30 sec |
| Copy-paste success rate | ~20% | > 90% |
| Test coverage | 0% | 80% unit, 70% integration |
| Accessibility score | Unknown | 100% critical |
| Bundle size | ~180KB | < 200KB (with lazy loading) |
| Build time | ~10s | < 15s |
| Feature registry completeness | 0% | 100% implemented features |
| Documentation coverage | ~10% | 100% implemented features |

---

*This architecture document guides the Phase 2+ implementation. Update as decisions evolve.*