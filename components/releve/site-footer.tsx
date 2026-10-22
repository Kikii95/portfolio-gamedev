import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { chemin, LIENS } from '@/lib/releve/chemin';

export function SiteFooter() {
  const t = useTranslations('releve');
  const locale = useLocale();

  return (
    <footer className="pied" id="contact">
      <div className="cadre pied-grille">
        <div className="pied-texte">
          <h2>{t('contact.titre')}</h2>
          <p className="chapo">{t('contact.chapo')}</p>
          <div className="pied-actions">
            <a className="bouton plein" href={LIENS.mail}>
              {t('contact.mail')}
            </a>
            <a className="bouton trait" href={LIENS.cv}>
              {t('contact.cv')}
            </a>
          </div>
          <p className="pied-liens mono">
            <a href={LIENS.mail}>killian.abboud@gmail.com</a>
            <a href={LIENS.linkedin} target="_blank" rel="noopener noreferrer">{t('contact.linkedin')}</a>
            <a href={LIENS.github} target="_blank" rel="noopener noreferrer">{t('contact.github')}</a>
          </p>
        </div>
        <Link href={chemin(locale, '/ecole')} className="aiguillage">
          <span>{t('aiguillage.texte')}</span>
          <strong>{t('aiguillage.lien')} →</strong>
        </Link>
      </div>
    </footer>
  );
}
