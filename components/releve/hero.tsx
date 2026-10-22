import { useTranslations } from 'next-intl';
import type { Realisation } from '@/lib/releve/types';
import { LIENS } from '@/lib/releve/chemin';
import { TableauService } from './tableau-service';

export function Hero({ realisations }: { realisations: Realisation[] }) {
  const t = useTranslations('releve');

  return (
    <section className="hero cadre">
      <div className="hero-texte">
        <h1>{t('hero.poste')}</h1>
        <p className="promesse">{t('methode.titre')}</p>
        <p className="hero-lead">{t('hero.chapo')}</p>
        <p className="dispo">
          <i className="point" aria-hidden="true" />
          <strong>{t('hero.dispo')}</strong>
          <span>{`${t('hero.lieu')} · ${t('hero.contrat')}`}</span>
        </p>
        <div className="hero-actions">
          <a className="bouton plein" href={LIENS.cv}>
            {t('contact.cv')}
          </a>
          <a className="bouton trait" href="#contact">
            {t('hero.contact')}
          </a>
        </div>
      </div>
      <TableauService realisations={realisations} />
    </section>
  );
}
