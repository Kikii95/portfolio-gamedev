'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

function heurePlusUne(heure: string): string {
  const [h, m] = heure.split(':').map(Number);
  const total = h * 60 + m + 1;
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

type Decision = 'attente' | 'valide' | 'annule';

const CLASSE: Record<Decision, string> = { attente: 'porte', valide: 'porte valide', annule: 'porte annule' };

export function CarteFeuVert() {
  const t = useTranslations('releve.methode');
  const [decision, setDecision] = useState<Decision>('attente');
  const heure = t('feuHeure');
  const enAttente = decision === 'attente';
  const bandeau = enAttente ? `◆ ${t('feuDe')}` : decision === 'valide' ? `${t('tampon')} · ${heurePlusUne(heure)}` : t('annule');

  return (
    <div className={CLASSE[decision]} aria-live="polite">
      <div className="bandeau">
        <span className="bandeau-etat">
          {decision === 'valide' && (
            <svg className="coche" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8.5l3 3 7-7" />
            </svg>
          )}
          {bandeau}
        </span>
        <span>{heure}</span>
      </div>
      <div className="corps">
        <p className="message">{t('feuMessage')}</p>
        <div className="actions">
          <button type="button" className="vas-y" onClick={() => setDecision('valide')} disabled={!enAttente}>
            {decision === 'valide' ? t('envoye') : t('vasy')}
          </button>
          <button type="button" className="annuler" onClick={() => setDecision('annule')} disabled={!enAttente}>
            {t('annuler')}
          </button>
        </div>
      </div>
    </div>
  );
}
