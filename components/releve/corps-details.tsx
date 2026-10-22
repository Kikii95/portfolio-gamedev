import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Project } from '@/lib/mdx/projects';

interface CorpsDetailsProps {
  projet: Project;
  pageHref?: string;
  libellePage: string;
}

const TITRE_EN_TETE = /^\s*#\s[^\n]*\n/;

export function CorpsDetails({ projet, pageHref, libellePage }: CorpsDetailsProps) {
  const { metadata: m, content } = projet;
  return (
    <div className="fenetre-contenu">
      <header className="fenetre-tete">
        <h2>{m.title}</h2>
        <p className="chapo">{m.description}</p>
        <p className="projet-outils">{m.tags.join(' · ')}</p>
        <p className="projet-liens">
          {pageHref && <a href={pageHref}>{libellePage} →</a>}
          {m.buildUrl && (
            <a href={m.buildUrl} target="_blank" rel="noopener noreferrer">
              {new URL(m.buildUrl).host} ↗
            </a>
          )}
          {m.github && (
            <a href={m.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          )}
        </p>
      </header>
      <div className="fiche-corps">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content.replace(TITRE_EN_TETE, '')}</ReactMarkdown>
        {m.techDetails && <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.techDetails}</ReactMarkdown>}
      </div>
    </div>
  );
}
