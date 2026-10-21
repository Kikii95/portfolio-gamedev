'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

function heurePlusUne(heure: string): string {
  const [h, m] = heure.split(':').map(Number);
  const total = h * 60 + m + 1;
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

type Decision = 'attente' | 'valide' | 'annule';

export function CarteFeuVert() {
  const t = useTranslations('releve.methode');
  const [decision, setDecision] = useState<Decision>('attente');
  const heure = t('feuHeure');
  const valide = decision === 'valide';

  return (
    <div className={decision === 'attente' ? 'feu' : 'feu valide'} aria-live="polite">
      <div className="de">
        <span>{t('feuDe')}</span>
        <span>{heure}</span>
      </div>
      {valide && <span className="tampon">{`${t('tampon')} ${heurePlusUne(heure)}`}</span>}
      {decision === 'annule' && <span className="tampon annule">{t('annule')}</span>}
      <p className="message">{t('feuMessage')}</p>
      <div className="actions">
        <button type="button" className="vas-y" onClick={() => setDecision('valide')} disabled={decision !== 'attente'}>
          {valide ? t('envoye') : t('vasy')}
        </button>
        <button type="button" className="annuler" onClick={() => setDecision('annule')} disabled={decision !== 'attente'}>
          {t('annuler')}
        </button>
      </div>
    </div>
  );
}
