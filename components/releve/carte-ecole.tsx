import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { ProjectMetadata } from '@/lib/mdx/projects';
import { ETIQUETTE_ECOLE, piecesEcole, statutEcole } from '@/lib/releve/ecole';
import { DetailsProjet } from './details-projet';
import { PieceJustificative } from './piece-justificative';
import { LigneRegistre } from './registre';

interface CarteEcoleProps {
  meta: ProjectMetadata;
  href: string;
  rang: number;
}

const OUTILS_MAX = 5;

export function CarteEcole({ meta, href, rang }: CarteEcoleProps) {
  const t = useTranslations('releve');
  const statut = statutEcole(meta);
  const [piece] = piecesEcole(meta);
  return (
    <article className="projet">
      {piece && <PieceJustificative piece={piece} libelleLecture={t('piece.lire')} penche={rang % 2 ? 0.8 : -0.8} />}
      <div className="projet-tete">
        <h3>
          <Link href={href}>{meta.title}</Link>
        </h3>
        <span className={`etiquette ${ETIQUETTE_ECOLE[statut]}`}>{t(`ecole.statuts.${statut}`)}</span>
      </div>
      <p>{meta.description}</p>
      <p className="projet-outils mono">
        {meta.date.slice(0, 4)} · {meta.tags.slice(0, OUTILS_MAX).join(' · ')}
      </p>
      <div className="projet-liens">
        <DetailsProjet slug={meta.slug} collection="projects" pageHref={href} />
      </div>
    </article>
  );
}

export function LigneEcole({ meta, href }: Omit<CarteEcoleProps, 'rang'>) {
  const t = useTranslations('releve');
  const statut = statutEcole(meta);
  return (
    <LigneRegistre
      titre={meta.title}
      href={href}
      texte={meta.description}
      outils={meta.tags.slice(0, OUTILS_MAX)}
      annee={meta.date.slice(0, 4)}
      etiquette={{ classe: ETIQUETTE_ECOLE[statut], libelle: t(`ecole.statuts.${statut}`) }}
      liens={<DetailsProjet slug={meta.slug} collection="projects" pageHref={href} />}
    />
  );
}

export function aUnePiece(meta: ProjectMetadata): boolean {
  return piecesEcole(meta).length > 0;
}
