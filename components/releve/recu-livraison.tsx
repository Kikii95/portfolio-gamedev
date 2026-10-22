import type { Recu } from '@/lib/releve/types';

export function RecuLivraison({ recu, statut, compact }: { recu: Recu; statut: string; compact?: boolean }) {
  if (compact) {
    return (
      <dl className="rapport-lignes compact">
        {recu.lignes.map(([cle, valeur]) => (
          <div className="ligne" key={cle}>
            <dt>{cle}</dt>
            <dd>{valeur}</dd>
          </div>
        ))}
      </dl>
    );
  }
  return (
    <div className="rapport">
      <div className="rapport-tete">
        <span className="titre-r">{recu.titre}</span>
        <span className="etat service">{statut}</span>
      </div>
      <div className="chiffre">{recu.chiffre}</div>
      <p className="legende">{recu.legende}</p>
      <dl className="rapport-lignes">
        {recu.lignes.map(([cle, valeur]) => (
          <div className="ligne" key={cle}>
            <dt>{cle}</dt>
            <dd>{valeur}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
