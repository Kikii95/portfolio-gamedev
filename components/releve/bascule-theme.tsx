"use client";

import { useSyncExternalStore } from 'react';
import { useTranslations } from 'next-intl';

const CLE = 'releve-theme';
type Theme = 'clair' | 'sombre';

function themeEffectif(): Theme {
  return document.documentElement.dataset.releve === 'clair' ? 'clair' : 'sombre';
}

const EVENEMENT = 'releve-theme';

function abonner(rappel: () => void) {
  window.addEventListener(EVENEMENT, rappel);
  return () => window.removeEventListener(EVENEMENT, rappel);
}

export function BasculeTheme() {
  const t = useTranslations('releve.nav');
  const theme = useSyncExternalStore<Theme | null>(abonner, themeEffectif, () => null);

  const basculer = () => {
    const suivant: Theme = themeEffectif() === 'sombre' ? 'clair' : 'sombre';
    document.documentElement.dataset.releve = suivant;
    try {
      localStorage.setItem(CLE, suivant);
    } catch {
      // stockage indisponible : le choix vaut pour la page seulement
    }
    window.dispatchEvent(new Event(EVENEMENT));
  };

  const label = theme === 'clair' ? t('themeSombre') : t('themeClair');
  return (
    <button type="button" className="bascule-theme" onClick={basculer} aria-pressed={theme === 'clair'} aria-label={label} title={label}>
      <span aria-hidden="true" />
    </button>
  );
}

export const SCRIPT_THEME = `try{var t=localStorage.getItem('${CLE}');if(t==='clair'||t==='sombre')document.documentElement.dataset.releve=t}catch(e){}`;
