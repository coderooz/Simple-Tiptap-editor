/** @format */

import { LiveEditorDemo } from "@/components/LiveEditorDemo";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import {
  Github,
  Twitter,
  Package,
  Sparkles,
  Code,
  Layers,
  Zap,
  Shield,
  Accessibility,
  ArrowRight,
  Star,
  Heart,
} from "lucide-react";

const FEATURES = [
  {
    icon: Layers,
    title: "4 Editor Modes",
    description:
      "Comment, Document, Content, and Default modes — each with tailored extensions for its use case.",
    href: "/content",
  },
  {
    icon: Code,
    title: "Extensible Architecture",
    description:
      "40+ toolbar buttons, custom extensions (ImageResizable, FontFamily, FontSize, MarkDownLink), and easy plugin system.",
    href: "/docs",
  },
  {
    icon: Sparkles,
    title: "Smart Bubble Menus",
    description:
      "Context-aware floating menus for text formatting, image resizing, table manipulation, and YouTube embeds.",
    href: "/comment",
  },
  {
    icon: Package,
    title: "Import/Export",
    description:
      "Full round-trip support for HTML, JSON, and Markdown. Perfect for CMS integration and content migration.",
    href: "/content",
  },
  {
    icon: Zap,
    title: "Collaborative Ready",
    description:
      "Yjs and y-protocols pre-installed. Add a WebSocket provider for real-time collaborative editing.",
    href: "/docs",
  },
  {
    icon: Shield,
    title: "TypeScript Strict",
    description:
      "Full TypeScript strict mode with zero `any` types in new code. Type-safe editor extensions and commands.",
    href: "/docs",
  },
  {
    icon: Accessibility,
    title: "Accessibility First",
    description:
      "WCAG 2.1 AA compliant. Semantic HTML, ARIA labels, keyboard navigation, focus management, screen reader support.",
    href: "/comment",
  },
  {
    icon: Star,
    title: "Modern Stack",
    description:
      "Next.js 16 App Router, React 19, TipTap v3, Tailwind CSS 4, shadcn/ui, Radix UI primitives.",
    href: "/docs",
  },
];

const TECH_SPECS = [
  { label: "Framework", value: "Next.js 16 (App Router)" },
  { label: "Language", value: "TypeScript 5 (Strict)" },
  { label: "Runtime", value: "React 19" },
  { label: "Editor Core", value: "TipTap v3.10.1" },
  { label: "Styling", value: "Tailwind CSS 4" },
  { label: "UI Library", value: "shadcn/ui + Radix UI" },
  { label: "Icons", value: "Lucide React" },
  { label: "Deployment", value: "Vercel (Edge)" },
  { label: "Package Manager", value: "npm" },
  { label: "License", value: "MIT" },
];

const STATS = [
  { label: "Editor Modes", value: "4" },
  { label: "Toolbar Buttons", value: "40+" },
  { label: "Custom Extensions", value: "4" },
  { label: "Bubble Menus", value: "4" },
  { label: "Bundle Size", value: "~180KB" },
  { label: "Lighthouse Score", value: "95+" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground">Simple TipTap Editor</span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                <Star className="w-3 h-3" />
                v0.2.0
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/demo"
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                Live Demo
              </Link>
              <Link
                href="https://github.com/coderooz/Simple-Tiptap-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40" aria-labelledby="hero-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Production-Ready Rich Text Editor</span>
              </div>
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
              >
                Build Better{" "}
                <span className="text-primary">Editing Experiences</span>{" "}
                <br />
                with Next.js 16 & TipTap v3
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                A modern, extensible rich-text editor featuring 4 specialized modes,
                smart bubble menus, image resizing, YouTube embeds, collaborative editing
                ready, and full TypeScript support.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link
                  href="/demo"
                  className="group inline-flex items-center gap-2 px-8 py-3 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25"
                >
                  <Sparkles className="w-5 h-5" />
                  Try Live Demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="https://github.com/coderooz/Simple-Tiptap-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 text-base font-semibold text-foreground bg-background border border-border rounded-lg hover:bg-muted transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  MIT Licensed
                </span>
                <span className="flex items-center gap-1">
                  <Code className="w-4 h-4" />
                  TypeScript Strict
                </span>
                <span className="flex items-center gap-1">
                  <Accessibility className="w-4 h-4" />
                  WCAG 2.1 AA
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  {"<"} 2s LCP
                </span>
              </div>
            </div>

            <LiveEditorDemo />
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-muted/30" aria-labelledby="features-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Everything You Need for{" "}
                <span className="text-primary">Rich Text Editing</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Purpose-built features for modern content creation workflows.
                Each feature is designed to be composable and extensible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURES.map((feature, index) => (
                <article
                  key={feature.title}
                  className="group relative p-6 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <feature.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                    <Link
                      href={feature.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28" aria-labelledby="stats-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="stats-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Trusted by Developers
              </h2>
              <p className="text-lg text-muted-foreground">
                Built with modern tooling and best practices for production applications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center p-6">
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-muted/30" aria-labelledby="tech-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="tech-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Modern Technology Stack
              </h2>
              <p className="text-lg text-muted-foreground">
                Carefully selected tools for performance, developer experience, and maintainability.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {TECH_SPECS.map((spec) => (
                <div
                  key={spec.label}
                  className="p-4 bg-background rounded-lg border border-border text-center hover:border-primary/50 transition-colors"
                >
                  <div className="text-sm font-semibold text-foreground mb-1">{spec.value}</div>
                  <div className="text-xs text-muted-foreground">{spec.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28" aria-labelledby="modes-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="modes-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Four Specialized Editor Modes
              </h2>
              <p className="text-lg text-muted-foreground">
                Each mode is a curated set of extensions optimized for its specific use case.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ModeCard
                title="Comment"
                description="Minimal editor for comments, replies, and quick notes. Core formatting only."
                icon="MessageSquare"
                features={["Bold, Italic, Underline", "Links", "Character count", "2500 char limit"]}
                href="/comment"
              />
              <ModeCard
                title="Document"
                description="Full-featured document editor with structure, tables, and advanced formatting."
                icon="FileText"
                features={["All formatting", "Tables", "Code blocks", "Details blocks", "Character count"]}
                href="/docs"
              />
              <ModeCard
                title="Content"
                description="Blog posts and long-form content with media embeds and typography."
                icon="PenTool"
                features={["Rich typography", "Images & YouTube", "Headings", "Lists & quotes", "Import/Export"]}
                href="/content"
              />
              <ModeCard
                title="Default"
                description="Basic TipTap setup for simple use cases and custom extension starting point."
                icon="Type"
                features={["Core formatting", "Lists", "Links", "Extensible base"]}
                href="/"
              />
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-gradient-to-br from-primary/5 via-background to-background" aria-labelledby="cta-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Ready to Build Better Editors?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Clone the repository, customize the extensions, and deploy in minutes.
                Join developers building the next generation of content editing experiences.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://github.com/coderooz/Simple-Tiptap-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-3 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25"
                >
                  <Github className="w-5 h-5" />
                  Star on GitHub
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-8 py-3 text-base font-semibold text-foreground bg-background border border-border rounded-lg hover:bg-muted transition-all duration-200"
                >
                  <Sparkles className="w-5 h-5" />
                  Open Full Demo
                </Link>
              </div>
              <p className="mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Heart className="w-4 h-4 text-red-500" aria-hidden="true" />
                Built with care by <a href="https://coderooz.in" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Coderooz</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted/30 border-t border-border py-12" role="contentinfo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Simple TipTap Editor
              </h3>
              <p className="text-muted-foreground max-w-xs leading-relaxed">
                A production-ready rich text editor built with Next.js 16, React 19, TipTap v3, and Tailwind CSS 4.
                Open source, extensible, and designed for modern web applications.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/demo" className="hover:text-primary transition-colors">Live Demo</Link></li>
                <li><Link href="https://github.com/coderooz/Simple-Tiptap-editor" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">GitHub Repository <Github className="w-3 h-3" /></Link></li>
                <li><Link href="https://www.npmjs.com/package/simple-tiptap-editor" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">NPM Package <Package className="w-3 h-3" /></Link></li>
                <li><Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://twitter.com/coderooz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">Twitter <Twitter className="w-3 h-3" /></a></li>
                <li><a href="https://github.com/coderooz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">GitHub <Github className="w-3 h-3" /></a></li>
                <li><a href="https://coderooz.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Website</a></li>
                <li><a href="mailto:contact@coderooz.in" className="hover:text-primary transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Coderooz. MIT Licensed.</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/coderooz/Simple-Tiptap-editor/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">License</a>
              <a href="https://github.com/coderooz/Simple-Tiptap-editor/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Security</a>
              <a href="https://github.com/coderooz/Simple-Tiptap-editor/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contributing</a>
              <a href="https://github.com/coderooz/Simple-Tiptap-editor/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ModeCard({
  title,
  description,
  icon,
  features,
  href,
}: {
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}) {
  const IconComponent = {
    MessageSquare: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    FileText: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    PenTool: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>,
    Type: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  }[icon];

  return (
    <article className="p-6 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
          {IconComponent && <IconComponent aria-hidden="true" />}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2 mb-6" role="list">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors w-full justify-center py-2 px-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-all"
      >
        Try {title} Mode
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}