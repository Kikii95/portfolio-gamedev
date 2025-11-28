"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 py-12">
        {/* Single Row Layout: Technologies (Left) | Brand (Center) | Social (Right) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 items-start mb-8">
          {/* Technologies - Left */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-semibold">{t('technologies')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>C++ / C#</li>
              <li>Unity / Unreal</li>
              <li>TypeScript / React</li>
              <li>Python / Tools</li>
            </ul>
          </div>

          {/* Brand - Center */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('brand')}
            </h3>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {t('tagline')}
            </p>
          </div>

          {/* Social - Right */}
          <div className="space-y-4 text-right">
            <h4 className="text-sm font-semibold">{t('social')}</h4>
            <div className="flex gap-4 justify-end">
              <a
                href="https://github.com/Kikii95"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/killian-abboud-a799962a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:killian.abboud@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden space-y-8 mb-8">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('brand')}
            </h3>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {t('tagline')}
            </p>
          </div>

          <div className="space-y-4 text-center">
            <h4 className="text-sm font-semibold">{t('technologies')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>C++ / C#</li>
              <li>Unity / Unreal</li>
              <li>TypeScript / React</li>
              <li>Python / Tools</li>
            </ul>
          </div>

          <div className="space-y-4 text-center">
            <h4 className="text-sm font-semibold">{t('social')}</h4>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/Kikii95"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/killian-abboud-a799962a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:killian.abboud@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} {t('copyright')}</p>
          <p className="text-xs">
            {t('madeWith')} <span className="text-primary">♥</span> {t('in')}
          </p>
        </div>
      </div>
    </footer>
  );
}
