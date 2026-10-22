import { useTranslations } from 'next-intl';
import { JournalMatin } from './journal-matin';

export function Hero() {
  const t = useTranslations('releve.hero');

  return (
    <section className="hero">
      <div className="hero-texte">
        <p className="statut mono">
          <span className="voyant" aria-hidden="true" /> {t('statut')}
        </p>
        <h1>{t('titre')}</h1>
        <p className="poste">
          <strong>{t('poste')}</strong>
          <span>{t('dispo')}</span>
          <span>{t('lieu')}</span>
          <span>{t('contrat')}</span>
        </p>
        <p className="chapo">{t('chapo')}</p>
        <div className="hero-actions">
          <a className="bouton plein" href="#realisations">
            {t('voir')}
          </a>
          <a className="bouton trait" href="#contact">
            {t('contact')}
          </a>
        </div>
      </div>
      <JournalMatin />
    </section>
  );
}
