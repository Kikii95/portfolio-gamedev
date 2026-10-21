import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';
import { getRealisation, getRealisations } from '@/lib/releve/realisations';
import { FicheRealisation } from '@/components/releve/fiche-realisation';

interface FicheProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((locale) => getRealisations(locale).map((r) => ({ locale, slug: r.slug })));
}

export async function generateMetadata({ params }: FicheProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const realisation = getRealisation(slug, locale);
  if (!realisation) return {};
  const image = realisation.pieces[0]?.poster ?? realisation.pieces.find((p) => p.type === 'image')?.src;
  return {
    title: `${realisation.titre} | Killian Abboud`,
    description: realisation.accroche,
    openGraph: image ? { images: [image] } : undefined,
  };
}

export default async function PageRealisation({ params }: FicheProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const toutes = getRealisations(locale);
  const rang = toutes.findIndex((r) => r.slug === slug);
  if (rang < 0) notFound();
  const suivante = toutes[(rang + 1) % toutes.length];

  return <FicheRealisation realisation={toutes[rang]} suivante={suivante} />;
}
