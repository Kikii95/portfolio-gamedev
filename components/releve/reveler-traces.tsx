'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SELECTEUR = '.trace, .trace-mini';

export function RevelerTraces() {
  const chemin = usePathname();

  useEffect(() => {
    const site = document.querySelector<HTMLElement>('.releve-site');
    if (!site || !('IntersectionObserver' in window)) return;
    site.dataset.reveler = 'oui';
    const observateur = new IntersectionObserver((entrees) => {
      for (const e of entrees) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('vue');
        observateur.unobserve(e.target);
      }
    }, { rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll(SELECTEUR).forEach((el) => observateur.observe(el));
    return () => observateur.disconnect();
  }, [chemin]);

  return null;
}
