import Link from 'next/link';
import type { ReactNode } from 'react';

interface Etiquette {
  classe: string;
  libelle: string;
}

export interface LigneRegistreProps {
  titre: string;
  href?: string;
  texte: string;
  outils: string[];
  annee?: string;
  etiquette: Etiquette;
  liens?: ReactNode;
}

export function LigneRegistre({ titre, href, texte, outils, annee, etiquette, liens }: LigneRegistreProps) {
  return (
    <li className="registre-ligne">
      <div className="registre-meta">
        <span className="registre-annee mono">{annee ?? '·'}</span>
        <span className={`etiquette ${etiquette.classe}`}>{etiquette.libelle}</span>
      </div>
      <div className="registre-corps">
        <h3>{href ? <Link href={href}>{titre}</Link> : titre}</h3>
        <p>{texte}</p>
        {liens && <div className="projet-liens">{liens}</div>}
      </div>
      <p className="registre-outils mono">{outils.join(' · ')}</p>
    </li>
  );
}

interface RegistreProps {
  legende: string;
  children: ReactNode;
}

export function Registre({ legende, children }: RegistreProps) {
  return (
    <div className="registre">
      <p className="registre-legende mono">{legende}</p>
      <ol className="registre-liste">{children}</ol>
    </div>
  );
}
