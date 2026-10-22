import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { chemin, LIENS } from '@/lib/releve/chemin';
import { BasculeTheme } from './bascule-theme';

export function SiteHeader() {
  const t = useTranslations('releve.nav');
  const locale = useLocale();
  const accueil = chemin(locale);
  const ancres = [
    { href: `${accueil}#realisations`, label: t('realisations') },
    { href: `${accueil}#methode`, label: t('methode') },
    { href: `${accueil}#parcours`, label: t('parcours') },
    { href: `${accueil}#contact`, label: t('contact') },
  ];
  const autreLangue = locale === 'fr' ? 'en' : 'fr';
  const liens = (
    <>
      {ancres.map((a) => (
        <a key={a.href} href={a.href}>
          {a.label}
        </a>
      ))}
      <Link href={chemin(locale, '/jeu')} className="vers-atelier">
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
        </nav>
        <details className="menu">
          <summary>{t('menu')}</summary>
          <nav aria-label={t('menu')}>{liens}</nav>
        </details>
      </div>
    </header>
  );
}
