import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { CarteProjet } from '@/components/releve/carte-projet';
import { chemin } from '@/lib/releve/chemin';
import { FAMILLES, LABO, PROJETS } from '@/lib/releve/projets';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'releve.projets' });
  return { title: t('metaTitre'), description: t('chapo') };
}

export default async function ProjetsPage({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'releve.projets' });
  return (
    <div className="page-projets cadre" data-section="perso">
      <header className="projets-entete">
        <p className="mono surtitre">{t('surtitre', { nombre: PROJETS.length + LABO.length })}</p>
        <h1>{t('titre')}</h1>
        <p className="chapo">{t('chapo')}</p>
      </header>
      {FAMILLES.map((famille) => {
        const liste = PROJETS.filter((p) => p.famille === famille);
        if (liste.length === 0) return null;
        return (
          <section key={famille} className="projets-famille" aria-labelledby={`famille-${famille}`}>
            <h2 id={`famille-${famille}`}>{t(`familles.${famille}`)}</h2>
            <div className="projets-grille">
              {liste.map((p, i) => (
                <CarteProjet key={p.titre} projet={p} rang={i} ficheHref={p.fiche ? chemin(locale, `/realisations/${p.fiche}`) : undefined} />
              ))}
            </div>
          </section>
        );
      })}
      {LABO.length > 0 && (
        <section className="labo" aria-labelledby="titre-labo">
          <h2 id="titre-labo">{t('labo')}</h2>
          <p className="chapo">{t('laboChapo')}</p>
          <ul className="labo-liste">
            {LABO.map((l) => (
              <li key={l.titre}>
                <span className="labo-titre">{l.titre}</span>
                <span>{l.texte}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
