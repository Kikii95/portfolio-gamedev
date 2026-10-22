import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FicheEcole } from '@/components/releve/fiche-ecole';
import { projetEcole, projetsEcole } from '@/lib/releve/ecole';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return projetsEcole('fr').map((p) => ({ slug: p.metadata.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const projet = projetEcole(slug, locale);
  if (!projet) return {};
  return { title: `${projet.metadata.title} — Killian Abboud`, description: projet.metadata.description };
}

export default async function FicheEcolePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const projet = projetEcole(slug, locale);
  if (!projet) notFound();
  return <FicheEcole projet={projet} />;
}
