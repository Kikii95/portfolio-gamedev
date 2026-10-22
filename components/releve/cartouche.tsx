import Link from 'next/link';

interface CartoucheProps {
  href?: string;
  techno: string;
  pile: string[];
  annee?: string;
}

export function Cartouche({ href, techno, pile, annee }: CartoucheProps) {
  const contenu = (
    <>
      {annee && <span className="cartouche-annee mono">{annee}</span>}
      <span className="cartouche-techno">{techno}</span>
      <span className="cartouche-pile mono">{pile.join(' / ')}</span>
    </>
  );
  if (!href) {
    return (
      <div className="cartouche" aria-hidden="true">
        {contenu}
      </div>
    );
  }
  return (
    <Link href={href} className="cartouche" aria-hidden="true" tabIndex={-1}>
      {contenu}
    </Link>
  );
}
