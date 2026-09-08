"use client";

import { useState, useEffect } from "react";
import EditorPage from "@/components/EditorPage";
import type { EditorType } from "@/context/EditorContext";
import { cn } from "@/lib/utils";

const SAMPLE_CONTENT: Record<EditorType, string> = {
  comment: "<p>Great point! Thanks for sharing this perspective.</p>",
  document: `
    <h1>Project Proposal</h1>
    <h2>Executive Summary</h2>
    <p>This document outlines the proposal for a new rich-text editor component...</p>
    <h2>Technical Requirements</h2>
    <ul>
      <li>Next.js 16+ compatibility</li>
      <li>TipTap v3 integration</li>
      <li>TypeScript strict mode</li>
    </ul>
    <h2>Timeline</h2>
    <p>Q1 2026: MVP Release</p>
  `,
  content: `
    <h1>Building a Production-Ready TipTap Editor</h1>
    <p class="lead">When we started this project, we wanted an editor that just works.</p>
    <h2>Why TipTap?</h2>
    <p>TipTap provides a headless, framework-agnostic approach to rich text editing...</p>
    <h3>Key Features</h3>
    <ul>
      <li>Extensible architecture</li>
      <li>Collaborative editing with Yjs</li>
      <li>Markdown shortcuts</li>
    </ul>
    <blockquote>
      <p>The best editor is the one you don't notice.</p>
    </blockquote>
    <h2>Conclusion</h2>
    <p>This editor is now powering our blog and documentation...</p>
  `,
  default: "<p>Start writing here... Try the toolbar buttons above!</p>",
};

const MODE_LABELS: Record<EditorType, string> = {
  comment: "Comment",
  document: "Document",
  content: "Content",
  default: "Default",
};

const MODE_DESCRIPTIONS: Record<EditorType, string> = {
  comment: "Minimal editor for comments & replies",
  document: "Full-featured document editor",
  content: "Blog posts & long-form content",
  default: "Basic editor with core features",
};

export function LiveEditorDemo() {
  const [activeMode, setActiveMode] = useState<EditorType>("content");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const modes: EditorType[] = ["comment", "document", "content", "default"];

  return (
    <section className="w-full max-w-4xl mx-auto" aria-labelledby="live-demo-heading">
      <div className="mb-6">
        <h2 id="live-demo-heading" className="text-2xl font-bold text-center text-foreground mb-2">
          Live Editor Demo
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Switch between editor modes to see different configurations in action.
          Each mode has a tailored set of extensions for its use case.
        </p>
      </div>

      <div className="mb-4 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Editor modes">
        {modes.map((mode) => (
          <button
            key={mode}
            role="tab"
            aria-selected={activeMode === mode}
            aria-controls={`editor-panel-${mode}`}
            id={`tab-${mode}`}
            onClick={() => setActiveMode(mode)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              activeMode === mode
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {MODE_LABELS[mode]}
          </button>
        ))}
      </div>

      <div className="relative" role="tabpanel" id={`editor-panel-${activeMode}`} aria-labelledby={`tab-${activeMode}`}>
        {!isLoaded ? (
          <div className="flex items-center justify-center min-h-[300px] bg-muted/50 rounded-xl border border-border">
            <div className="flex flex-col items-center gap-3 text-muted-foreground">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-sm">Loading editor...</p>
            </div>
          </div>
        ) : (
          <EditorPage type={activeMode} initialContent={SAMPLE_CONTENT[activeMode]} />
        )}

        <div className="mt-3 text-center text-xs text-muted-foreground">
          <p>{MODE_DESCRIPTIONS[activeMode]}</p>
        </div>
      </div>
    </section>
  );
}