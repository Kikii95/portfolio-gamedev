import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { chemin, LIENS } from '@/lib/releve/chemin';
import { BasculeTheme } from './bascule-theme';
import { IndicateurNav } from './indicateur-nav';

export function SiteHeader() {
  const t = useTranslations('releve.nav');
  const locale = useLocale();
  const accueil = chemin(locale);
  const ancres = [
    { id: 'realisations', label: t('realisations') },
    { id: 'methode', label: t('methode') },
    { id: 'parcours', label: t('parcours') },
    { id: 'contact', label: t('contact') },
  ];
  const autreLangue = locale === 'fr' ? 'en' : 'fr';
  const liens = (
    <>
      {ancres.map((a) => (
        <a key={a.id} href={`${accueil}#${a.id}`} data-ancre={a.id}>
          {a.label}
        </a>
      ))}
      <Link href={chemin(locale, '/projets')} className="nav-perso" data-page="/projets">
        {t('projets')}
      </Link>
      <Link href={chemin(locale, '/ecole')} className="vers-atelier nav-ecole" data-page="/ecole">
        {t('atelier')}
      </Link>
      <Link href={chemin(autreLangue)} hrefLang={autreLangue} className="langue">
        {autreLangue.toUpperCase()}
      </Link>
      <BasculeTheme />
      <a href={LIENS.cv} className="bouton trait">
        {t('cv')}
      </a>
    </>
  );

  return (
    <header className="entete">
      <div className="cadre entete-ligne">
        <Link href={accueil} className="signature">
          <Image src="/favicon.svg" alt="" width={28} height={28} className="marque" />
          Killian Abboud
        </Link>
        <nav className="nav-large" aria-label={t('menu')}>
          {liens}
          <IndicateurNav />
        </nav>
        <a href={LIENS.cv} className="bouton trait cv-mobile">
          {t('cv')}
        </a>
        <details className="menu">
          <summary>{t('menu')}</summary>
          <nav aria-label={t('menu')}>{liens}</nav>
        </details>
      </div>
    </header>
  );
}
