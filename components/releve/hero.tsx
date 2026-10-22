import { useTranslations } from 'next-intl';
import { LIENS } from '@/lib/releve/chemin';
import { Chiffres } from './chiffres';
import { JournalMatin } from './journal-matin';

export function Hero() {
  const t = useTranslations('releve.hero');
  const lignes = [
    { cle: t('cleQuand'), valeur: t('dispo') },
    { cle: t('cleLieu'), valeur: t('lieu') },
    { cle: t('cleContrat'), valeur: t('contrat') },
  ];

  return (
    <section className="hero cadre">
      <div className="hero-texte">
        <p className="statut mono">
          <span className="voyant" aria-hidden="true" /> {t('statut')}
        </p>
        <h1>{t('titre')}</h1>
        <div className="bordereau">
          <p className="bordereau-tete mono">{t('bordereau')}</p>
          <p className="bordereau-poste">{t('poste')}</p>
          <dl className="bordereau-lignes">
            {lignes.map((l) => (
              <div key={l.cle}>
                <dt className="mono">{l.cle}</dt>
                <dd>{l.valeur}</dd>
              </div>
            ))}
          </dl>
          <div className="bordereau-actions">
            <a className="bouton plein" href={LIENS.cv}>
              {t('cv')}
            </a>
            <a className="bouton trait" href="#contact">
              {t('contact')}
            </a>
          </div>
        </div>
        <p className="chapo">{t('chapo')}</p>
        <a className="lien-suite" href="#realisations">
          {t('voir')} ↓
        </a>
      </div>
      <JournalMatin />
      <Chiffres />
    </section>
  );
}
