import type { Piece } from './types';

export type Famille = 'automatisation' | 'app' | 'jeu';
export type StatutProjet = 'service' | 'beta' | 'pause';

export interface ProjetPerso {
  titre: string;
  famille: Famille;
  statut: StatutProjet;
  texte: string;
  outils: string[];
  fiche?: string;
  site?: string;
  piece?: Piece;
}

export interface ProjetLabo {
  titre: string;
  texte: string;
}

export const FAMILLES: Famille[] = ['automatisation', 'app', 'jeu'];

const video = (dossier: string, nom: string, legende: string, duree: string): Piece => ({
  type: 'video',
  src: `/medias/${dossier}/${nom}.mp4`,
  poster: `/medias/${dossier}/${nom}-poster.webp`,
  legende,
  duree,
});

export const PROJETS: ProjetPerso[] = [
  {
    titre: 'DataDawn',
    famille: 'automatisation',
    statut: 'service',
    texte: "Mon cabinet d'automatisation : des assistants IA en service chez des PME, l'équipe valide ce qui compte.",
    outils: ['n8n', 'Claude', 'Mistral', 'Next.js', 'PostgreSQL'],
    fiche: 'datadawn',
    piece: video('n8n', 'n8n', 'Un workflow de relance de devis', 'vidéo · 0:16'),
  },
  {
    titre: 'JobHunter',
    famille: 'automatisation',
    statut: 'service',
    texte: "Collecte d'offres chaque matin, notation contre le profil de chacun, trajet réel, le tout rangé dans un hub.",
    outils: ['Python', 'API France Travail', 'Claude', 'Next.js', 'PostgreSQL'],
    fiche: 'jobhunter',
    piece: video('jobhunter', 'jobhunter', "Fil d'offres notées et mode Découvrir", 'vidéo · 0:43'),
  },
  {
    titre: 'JARVIS',
    famille: 'automatisation',
    statut: 'service',
    texte: "Un assistant personnel qui trie les mails de cinq comptes et prépare le reste, sans rien envoyer sans mon feu vert.",
    outils: ['Claude', 'Telegram', 'Gmail API', 'Python'],
    fiche: 'jarvis',
    piece: video('jarvis', 'jarvis', 'La présentation, section par section', 'vidéo · 0:24'),
  },
  {
    titre: 'Magpie',
    famille: 'automatisation',
    statut: 'service',
    texte: "Les captures d'écran, vidéos et liens mis de côté deviennent des fiches classées et recherchables.",
    outils: ['Claude', 'Next.js', 'Obsidian', 'PostgreSQL'],
    fiche: 'magpie',
    piece: video('magpie', 'magpie', '« Ce soir ? », sections, fiche', 'vidéo · 0:25'),
  },
  {
    titre: 'Memogram',
    famille: 'automatisation',
    statut: 'service',
    texte: 'Un journal tenu en écrivant à un bot Telegram : chaque journée est résumée, rangée par semaine et par mois.',
    outils: ['Telegram', 'Claude', 'Next.js'],
    piece: video('memogram', 'memogram', 'Jour, semaine, mois, recherche', 'vidéo · 0:24'),
  },
  {
    titre: 'Obsidian Web',
    famille: 'app',
    statut: 'service',
    texte: "Mes notes Obsidian lisibles et modifiables depuis n'importe quel navigateur : arborescence, recherche, liens.",
    outils: ['Next.js', 'React', 'GitHub API', 'PWA'],
    piece: video('obsidian-web', 'obsidian-web', 'Navigation et recherche', 'vidéo · 0:26'),
  },
  {
    titre: 'HUMAN',
    famille: 'jeu',
    statut: 'beta',
    texte: "Un jeu de cartes d'introspection en application mobile et web, en bêta auprès de testeurs.",
    outils: ['React Native', 'Expo', 'TypeScript'],
    site: 'https://humain-beta.vercel.app',
    piece: video('human', 'human', 'Choisir une partie, retourner les cartes', 'vidéo · 0:38'),
  },
];

export const LABO: ProjetLabo[] = [];
