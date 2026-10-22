"use client";

import { useSyncExternalStore } from 'react';
import { useTranslations } from 'next-intl';

const CLE = 'releve-theme';
type Theme = 'clair' | 'sombre';

function themeEffectif(): Theme {
  const pose = document.documentElement.dataset.releve;
  if (pose === 'clair' || pose === 'sombre') return pose;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'sombre' : 'clair';
}

const EVENEMENT = 'releve-theme';

function abonner(rappel: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener('change', rappel);
  window.addEventListener(EVENEMENT, rappel);
  return () => {
    media.removeEventListener('change', rappel);
    window.removeEventListener(EVENEMENT, rappel);
  };
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

  const label = theme === 'sombre' ? t('themeClair') : t('themeSombre');
  return (
    <button type="button" className="bascule-theme" onClick={basculer} aria-pressed={theme === 'sombre'} aria-label={label} title={label}>
      <span aria-hidden="true" />
    </button>
  );
}

export const SCRIPT_THEME = `try{var t=localStorage.getItem('${CLE}');if(t==='clair'||t==='sombre')document.documentElement.dataset.releve=t}catch(e){}`;
