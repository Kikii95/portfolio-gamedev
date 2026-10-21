import type { Recu } from '@/lib/releve/types';

export function RecuLivraison({ recu, statut }: { recu: Recu; statut: string }) {
  return (
    <div className="recu">
      <div className="titre">{recu.titre}</div>
      <div className="chiffre">{recu.chiffre}</div>
      <p>{recu.legende}</p>
      <div className="recu-lignes">
        {recu.lignes.map(([cle, valeur]) => (
          <div className="ligne" key={cle}>
            <span>{cle}</span>
            <span>{valeur}</span>
          </div>
        ))}
      </div>
      <span className="etiquette livre">{statut}</span>
    </div>
  );
}
