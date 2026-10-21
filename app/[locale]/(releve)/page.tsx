import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getRealisations } from '@/lib/releve/realisations';
import { AUTRES_REALISATIONS } from '@/lib/releve/autres';
import { Hero } from '@/components/releve/hero';
import { Chiffres } from '@/components/releve/chiffres';
import { EntreeRealisation } from '@/components/releve/entree-realisation';
import { Methode } from '@/components/releve/methode';
import { AutresRealisations } from '@/components/releve/autres-realisations';
import { Parcours } from '@/components/releve/parcours';

export default async function Accueil({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('releve.realisations');
  const realisations = getRealisations(locale);

  return (
    <>
      <Hero />
      <Chiffres />
      <section className="realisations cadre" id="realisations" aria-labelledby="titre-realisations">
        <header className="section-tete">
          <h2 id="titre-realisations">{t('titre')}</h2>
          <p className="chapo">{t('chapo')}</p>
        </header>
        {realisations.map((r, i) => (
          <EntreeRealisation key={r.slug} realisation={r} rang={i} />
        ))}
      </section>
      <Methode />
      <AutresRealisations autres={AUTRES_REALISATIONS} />
      <Parcours />
    </>
  );
}
