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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('brand')}
            </h3>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {t('tagline')}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-sm font-semibold">{t('technologies')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>C++ / C#</li>
              <li>Unity / Unreal</li>
              <li>TypeScript / React</li>
              <li>Python / Tools</li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-sm font-semibold">{t('social')}</h4>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a
                href="https://github.com/Kikii95"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:votre@email.com"
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
