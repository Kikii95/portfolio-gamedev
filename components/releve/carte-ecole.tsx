import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { ProjectMetadata } from '@/lib/mdx/projects';
import { ETIQUETTE_ECOLE, piecesEcole, statutEcole } from '@/lib/releve/ecole';
import { PieceJustificative } from './piece-justificative';

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
      {piece ? (
        <PieceJustificative piece={piece} libelleLecture={t('piece.lire')} penche={rang % 2 ? 0.8 : -0.8} />
      ) : (
        <Link href={href} className="cartouche" aria-hidden="true" tabIndex={-1}>
          <span className="cartouche-annee mono">{meta.date.slice(0, 4)}</span>
          <span className="cartouche-techno">{meta.tags[0]}</span>
          <span className="cartouche-pile mono">{meta.tags.slice(1, OUTILS_MAX).join(' / ')}</span>
        </Link>
      )}
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
        <Link href={href}>{t('projets.voirFiche')} →</Link>
      </div>
    </article>
  );
}
