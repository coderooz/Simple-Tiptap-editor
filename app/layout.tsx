/** @format */

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { EditorProvider } from "@/context/EditorContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Simple TipTap Editor — Production-Ready Rich Text Editor",
    template: "%s | Simple TipTap Editor",
  },
  description:
    "A modern, extensible rich-text editor built with Next.js 16, React 19, TipTap v3, and Tailwind CSS 4. Features 4 editor modes, bubble menus, image resizing, YouTube embeds, and collaborative editing ready.",
  keywords: [
    "tiptap",
    "rich-text-editor",
    "nextjs",
    "react",
    "typescript",
    "wysiwyg",
    "editor",
    "collaborative-editing",
  ],
  authors: [{ name: "Ranit Saha (Coderooz)", url: "https://coderooz.in" }],
  creator: "Ranit Saha",
  publisher: "Coderooz",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://simple-tiptap-editor.vercel.app",
    siteName: "Simple TipTap Editor",
    title: "Simple TipTap Editor — Production-Ready Rich Text Editor",
    description:
      "A modern, extensible rich-text editor built with Next.js 16, React 19, TipTap v3, and Tailwind CSS 4.",
    images: [
      {
        url: "/ContentImage.png",
        width: 1200,
        height: 630,
        alt: "Simple TipTap Editor Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple TipTap Editor",
    description:
      "Production-ready rich text editor with Next.js 16, TipTap v3, and Tailwind CSS 4",
    images: ["/ContentImage.png"],
    creator: "@coderooz",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <EditorProvider>{children}</EditorProvider>
      </body>
    </html>
  );
}