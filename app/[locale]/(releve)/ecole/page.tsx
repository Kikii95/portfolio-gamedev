import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { CarteEcole } from '@/components/releve/carte-ecole';
import { chemin } from '@/lib/releve/chemin';
import { projetsEcole } from '@/lib/releve/ecole';

type Params = Promise<{ locale: string }>;

const FAMILLES_ECOLE = ['ecole', 'perso'] as const;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'releve.ecole' });
  return { title: t('metaTitre'), description: t('chapo') };
}

export default async function EcolePage({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'releve.ecole' });
  const projets = projetsEcole(locale);
  return (
    <div className="page-projets cadre" data-section="ecole">
      <header className="projets-entete">
        <p className="mono surtitre">{t('surtitre', { nombre: projets.length })}</p>
        <h1>{t('titre')}</h1>
        <p className="chapo">{t('chapo')}</p>
      </header>
      {FAMILLES_ECOLE.map((famille) => {
        const liste = projets.filter((p) => (p.metadata.category === 'perso') === (famille === 'perso'));
        if (liste.length === 0) return null;
        return (
          <section key={famille} className="projets-famille" aria-labelledby={`famille-${famille}`}>
            <h2 id={`famille-${famille}`}>{t(`familles.${famille}`)}</h2>
            <div className="frise">
              {liste.map((p) => (
                <CarteEcole key={p.metadata.slug} meta={p.metadata} href={chemin(locale, `/ecole/${p.metadata.slug}`)} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
