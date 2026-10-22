'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const SEUIL_LECTURE = 0.4;
const MARGE_BAS = 2;

function lienDePage(nav: HTMLElement, chemin: string): HTMLElement | null {
  const pages = nav.querySelectorAll<HTMLElement>('[data-page]');
  return Array.from(pages).find((lien) => chemin.endsWith(lien.dataset.page ?? '')) ?? null;
}

function lienDeSection(nav: HTMLElement): HTMLElement | null {
  const ancres = Array.from(nav.querySelectorAll<HTMLElement>('[data-ancre]'));
  const enBas = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - MARGE_BAS;
  let actif: HTMLElement | null = null;
  for (const lien of ancres) {
    const section = document.getElementById(lien.dataset.ancre ?? '');
    if (!section) continue;
    if (enBas || section.getBoundingClientRect().top < window.innerHeight * SEUIL_LECTURE) actif = lien;
  }
  return actif;
}

export function IndicateurNav() {
  const barre = useRef<HTMLSpanElement>(null);
  const chemin = usePathname();

  useEffect(() => {
    const el = barre.current;
    const nav = el?.parentElement;
    const repere = el?.closest<HTMLElement>('.entete-ligne');
    if (!el || !nav || !repere) return;
    let image = 0;

    function placer() {
      image = 0;
      const lien = lienDePage(nav!, chemin) ?? lienDeSection(nav!);
      if (!lien) {
        el!.dataset.visible = 'non';
        return;
      }
      const base = repere!.getBoundingClientRect().left;
      const zone = lien.getBoundingClientRect();
      el!.style.setProperty('--x', String(zone.left - base));
      el!.style.setProperty('--l', String(zone.width));
      el!.dataset.visible = 'oui';
    }
    function demander() {
      if (!image) image = requestAnimationFrame(placer);
    }

    placer();
    window.addEventListener('scroll', demander, { passive: true });
    window.addEventListener('resize', demander);
    return () => {
      cancelAnimationFrame(image);
      window.removeEventListener('scroll', demander);
      window.removeEventListener('resize', demander);
    };
  }, [chemin]);

  return <span ref={barre} className="indicateur-nav" aria-hidden="true" data-visible="non" />;
}
