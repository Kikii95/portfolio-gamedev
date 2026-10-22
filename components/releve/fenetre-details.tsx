'use client';

import { useRef } from 'react';

interface FenetreDetailsProps {
  titre: string;
  libelleOuvrir: string;
  libelleFermer: string;
  children: React.ReactNode;
}

export function FenetreDetails({ titre, libelleOuvrir, libelleFermer, children }: FenetreDetailsProps) {
  const fenetre = useRef<HTMLDialogElement>(null);

  function fermerSurFond(evenement: React.MouseEvent<HTMLDialogElement>) {
    if (evenement.target === fenetre.current) fenetre.current?.close();
  }

  return (
    <>
      <button type="button" className="ouvrir-details" onClick={() => fenetre.current?.showModal()}>
        {libelleOuvrir} <span aria-hidden="true">+</span>
      </button>
      <dialog ref={fenetre} className="fenetre-details" aria-label={titre} onClick={fermerSurFond}>
        <div className="fenetre-feuille">
          <form method="dialog" className="fenetre-barre">
            <span className="fenetre-titre">{titre}</span>
            <button type="submit" className="fermer-details">
              {libelleFermer} <kbd>Échap</kbd>
            </button>
          </form>
          {children}
        </div>
      </dialog>
    </>
  );
}
