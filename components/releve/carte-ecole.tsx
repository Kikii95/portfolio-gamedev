import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { ProjectMetadata } from '@/lib/mdx/projects';
import { ETIQUETTE_ECOLE, piecesEcole, statutEcole } from '@/lib/releve/ecole';
import { DetailsProjet } from './details-projet';
import { PieceJustificative } from './piece-justificative';

interface CarteEcoleProps {
  meta: ProjectMetadata;
  href: string;
}

const OUTILS_MAX = 5;

export function CarteEcole({ meta, href }: CarteEcoleProps) {
  const t = useTranslations('releve');
  const statut = statutEcole(meta);
  const [piece] = piecesEcole(meta);
  return (
    <article className={piece ? 'cursus avec-ecran' : 'cursus'}>
      <span className="cursus-annee">{meta.date.slice(0, 4)}</span>
      <div className="cursus-info">
        <h3>
          <Link href={href}>{meta.title}</Link>
        </h3>
        <p>{meta.description}</p>
        <p className="projet-outils">{meta.tags.slice(0, OUTILS_MAX).join(' · ')}</p>
      </div>
      <div className="cursus-cote">
        <span className={ETIQUETTE_ECOLE[statut]}>{t(`ecole.statuts.${statut}`)}</span>
        <DetailsProjet slug={meta.slug} collection="projects" pageHref={href} />
      </div>
      {piece && <PieceJustificative piece={piece} libelleLecture={t('piece.lire')} />}
    </article>
  );
}
