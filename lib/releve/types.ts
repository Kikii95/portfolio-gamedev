export type TypeEtape = 'declencheur' | 'auto' | 'attente' | 'livre' | 'reprise';

export interface Etape {
  heure: string;
  type: TypeEtape;
  verbe: string;
  detail?: string;
  etiquette?: string;
}

export interface Piece {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  legende: string;
  duree?: string;
  format?: 'bureau' | 'mobile';
}

export interface Recu {
  titre: string;
  chiffre: string;
  legende: string;
  lignes: [string, string][];
}

export interface Lien {
  label: string;
  href: string;
}

export interface Realisation {
  slug: string;
  ordre: number;
  titre: string;
  accroche: string;
  statut: string;
  periode: string;
  role: string;
  demande: string;
  intervention: string;
  resultat: string;
  recu: Recu;
  etapes: Etape[];
  pieces: Piece[];
  outils: string[];
  liens: Lien[];
  corps: string;
}
