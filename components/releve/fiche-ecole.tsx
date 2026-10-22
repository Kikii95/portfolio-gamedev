import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLocale, useTranslations } from 'next-intl';
import type { Project } from '@/lib/mdx/projects';
import { chemin } from '@/lib/releve/chemin';
import { ETIQUETTE_ECOLE, piecesEcole, statutEcole } from '@/lib/releve/ecole';
import { PieceJustificative } from './piece-justificative';

export function FicheEcole({ projet }: { projet: Project }) {
  const t = useTranslations('releve');
  const locale = useLocale();
  const { metadata: m, content } = projet;
  const statut = statutEcole(m);
  const pieces = piecesEcole(m);

  return (
    <article className="fiche cadre" data-section="ecole">
      <Link className="retour mono" href={chemin(locale, '/ecole')}>
        ← {t('ecole.retour')}
      </Link>
      <header className="fiche-tete">
        <div>
          <p className="entree-meta mono">
            <span className={`etiquette ${ETIQUETTE_ECOLE[statut]}`}>{t(`ecole.statuts.${statut}`)}</span>
            <span>{m.date.slice(0, 4)}</span>
          </p>
          <h1>{m.title}</h1>
          <p className="chapo">{m.description}</p>
          <p className="projet-outils mono">{m.tags.join(' · ')}</p>
          {m.github && (
            <p className="projet-liens">
              <a href={m.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </p>
          )}
        </div>
      </header>
      {pieces.length > 0 && (
        <div className="pieces-grille">
          {pieces.map((p, i) => (
            <PieceJustificative key={p.src} piece={p} libelleLecture={t('piece.lire')} penche={i % 2 ? 0.6 : -0.6} />
          ))}
        </div>
      )}
      <div className="fiche-corps">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content.replace(/^#\s.*\n/, '')}</ReactMarkdown>
        {m.techDetails && <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.techDetails}</ReactMarkdown>}
      </div>
    </article>
  );
}
