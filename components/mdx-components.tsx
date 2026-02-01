"use client";

import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Components } from "react-markdown";

const SECTION_ICONS: Record<string, string> = {
  contexte: "📋",
  context: "📋",
  stack: "🛠️",
  "stack technique": "🛠️",
  "tech stack": "🛠️",
  fonctionnalités: "✨",
  features: "✨",
  "points techniques": "⚙️",
  "technical points": "⚙️",
  architecture: "⚙️",
  liens: "🔗",
  links: "🔗",
  demo: "🎮",
  démo: "🎮",
  gameplay: "🎮",
  objectifs: "🎯",
  objectives: "🎯",
  goals: "🎯",
  défis: "💡",
  challenges: "💡",
  apprentissages: "📚",
  learnings: "📚",
};

function getSectionIcon(title: string): string {
  const normalized = title.toLowerCase().trim();
  for (const [key, icon] of Object.entries(SECTION_ICONS)) {
    if (normalized.includes(key)) {
      return icon;
    }
  }
  return "📌";
}

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

function SectionCard({ title, children }: SectionCardProps) {
  const icon = getSectionIcon(title);

  return (
    <Card className="my-6 bg-muted/30 border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl text-primary">
          <span>{icon}</span>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">{children}</CardContent>
    </Card>
  );
}

let currentSection: { title: string; content: ReactNode[] } | null = null;

export const markdownComponents: Components = {
  h2: ({ children }) => {
    const title = String(children);
    return (
      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 flex items-center gap-2" id={title.toLowerCase().replace(/\s+/g, "-")}>
        <span>{getSectionIcon(title)}</span>
        <span>{title}</span>
      </h2>
    );
  },

  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-accent mt-6 mb-3">{children}</h3>
  ),

  p: ({ children }) => (
    <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
  ),

  ul: ({ children }) => (
    <ul className="space-y-2 my-4">{children}</ul>
  ),

  ol: ({ children }) => (
    <ol className="space-y-2 my-4 list-decimal list-inside">{children}</ol>
  ),

  li: ({ children }) => (
    <li className="flex items-start gap-2 text-muted-foreground">
      <span className="text-primary mt-1.5 text-xs">▸</span>
      <span className="flex-1">{children}</span>
    </li>
  ),

  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline font-medium"
    >
      {children}
    </a>
  ),

  strong: ({ children }) => (
    <strong className="text-foreground font-semibold">{children}</strong>
  ),

  code: ({ children }) => (
    <code className="text-accent bg-muted px-1.5 py-0.5 rounded text-sm">{children}</code>
  ),

  pre: ({ children }) => (
    <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto my-4">
      {children}
    </pre>
  ),

  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary bg-muted/50 py-2 px-4 rounded-r my-4 italic">
      {children}
    </blockquote>
  ),

  hr: () => <hr className="border-border my-8" />,

  table: ({ children }) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full border border-border rounded-lg overflow-hidden">
        {children}
      </table>
    </div>
  ),

  th: ({ children }) => (
    <th className="bg-muted p-3 text-left font-semibold border-b border-border">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="p-3 border-b border-border/50">{children}</td>
  ),
};
