import { useTranslations } from 'next-intl';

type LigneJournal = [heure: string, texte: string, etat: string];

const CLASSE_ETAT: Record<string, string> = { ok: 'ok', attente: 'wait', waiting: 'wait' };

export function JournalMatin() {
  const t = useTranslations('releve');
  const lignes = t.raw('journal') as LigneJournal[];

  return (
    <div className="journal hero-journal" aria-label={t('hero.journal')}>
      <div className="journal-tete">
        <span>{t('hero.journal')}</span>
        <span className="ok">● {t('etats.ok')}</span>
      </div>
      {lignes.map(([heure, texte, etat], i) => (
        <div className="ligne" key={heure + texte} style={{ ['--i' as string]: i }}>
          <span className="h">{heure}</span>
          <span>{texte}</span>
          <span className={CLASSE_ETAT[etat] ?? 'ok'}>{etat}</span>
        </div>
      ))}
      <div className="ligne suite" style={{ ['--i' as string]: lignes.length }}>
        <span className="h">…</span>
        <span>
          {t('hero.journalSuite')} <span className="curseur" aria-hidden="true" />
        </span>
        <span />
      </div>
    </div>
  );
}
