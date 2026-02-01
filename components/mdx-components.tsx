"use client";

import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Components } from "react-markdown";
import {
  ClipboardList,
  Wrench,
  Sparkles,
  Cog,
  Link2,
  Gamepad2,
  Target,
  Lightbulb,
  BookOpen,
  Pin,
  LucideIcon,
} from "lucide-react";

const SECTION_ICONS: Record<string, LucideIcon> = {
  contexte: ClipboardList,
  context: ClipboardList,
  stack: Wrench,
  "stack technique": Wrench,
  "tech stack": Wrench,
  fonctionnalités: Sparkles,
  features: Sparkles,
  "points techniques": Cog,
  "technical points": Cog,
  architecture: Cog,
  liens: Link2,
  links: Link2,
  demo: Gamepad2,
  démo: Gamepad2,
  gameplay: Gamepad2,
  objectifs: Target,
  objectives: Target,
  goals: Target,
  défis: Lightbulb,
  challenges: Lightbulb,
  apprentissages: BookOpen,
  learnings: BookOpen,
};

function getSectionIcon(title: string): LucideIcon {
  const normalized = title.toLowerCase().trim();
  for (const [key, Icon] of Object.entries(SECTION_ICONS)) {
    if (normalized.includes(key)) {
      return Icon;
    }
  }
  return Pin;
}

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

function SectionCard({ title, children }: SectionCardProps) {
  const Icon = getSectionIcon(title);

  return (
    <Card className="my-6 bg-muted/30 border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl text-primary">
          <Icon className="h-5 w-5" />
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
    const Icon = getSectionIcon(title);
    return (
      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 flex items-center gap-2" id={title.toLowerCase().replace(/\s+/g, "-")}>
        <Icon className="h-6 w-6" />
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
