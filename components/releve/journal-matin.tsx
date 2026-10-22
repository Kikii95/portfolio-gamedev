import { useTranslations } from 'next-intl';

type LigneJournal = [heure: string, texte: string, etat: string];

const CLASSE_ETAT: Record<string, string> = { ok: 'etat service', attente: 'etat attend', waiting: 'etat attend' };

function decouper(texte: string): [string, string] {
  const [systeme, ...reste] = texte.split(' · ');
  return reste.length ? [systeme, reste.join(' · ')] : ['', texte];
}

export function JournalMatin() {
  const t = useTranslations('releve');
  const lignes = t.raw('journal') as LigneJournal[];

  return (
    <div className="journal" aria-label={t('hero.journal')}>
      <div className="journal-tete">
        <span>{t('hero.journal')}</span>
        <span className="etat service">{t('etats.ok')}</span>
      </div>
      <ol>
        {lignes.map(([heure, texte, etat], i) => {
          const [systeme, action] = decouper(texte);
          return (
            <li key={heure + texte} style={{ ['--i' as string]: i }}>
              <span className="h">{heure}</span>
              <span className="action">
                {systeme && <span className="sys">{systeme}</span>}
                {action}
              </span>
              <span className={CLASSE_ETAT[etat] ?? 'etat service'}>{etat}</span>
            </li>
          );
        })}
      </ol>
      <p className="journal-suite">{t('hero.journalSuite')}</p>
    </div>
  );
}
