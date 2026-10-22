import type { Piece } from './types';

export type Famille = 'automatisation' | 'app' | 'jeu';
export type StatutProjet = 'service' | 'beta' | 'dev' | 'pause';

export interface ProjetPerso {
  titre: string;
  famille: Famille;
  statut: StatutProjet;
  texte: string;
  outils: string[];
  cartouche?: string;
  detail?: string;
  fiche?: string;
  site?: string;
  piece?: Piece;
}

export interface ProjetLabo {
  titre: string;
  texte: string;
  detail?: string;
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
    detail: 'memogram',
    famille: 'automatisation',
    statut: 'service',
    texte: 'Un journal tenu en écrivant à un bot Telegram : chaque journée est résumée, rangée par semaine et par mois.',
    outils: ['Telegram', 'Claude', 'Next.js'],
    piece: video('memogram', 'memogram', 'Jour, semaine, mois, recherche', 'vidéo · 0:24'),
  },
  {
    titre: 'MAO',
    detail: 'mao',
    famille: 'automatisation',
    statut: 'pause',
    texte: "Un orchestrateur où deux agents Claude, un chef qui planifie et un ouvrier qui code, construisent un projet de A à Z sans intervention.",
    outils: ['Python', 'FastAPI', 'Claude', 'React', 'Vite'],
    piece: video('mao', 'mao', 'Deux agents Claude construisent un projet seuls', 'vidéo · 0:28'),
  },
  {
    titre: 'Home Gateway',
    detail: 'home-gateway',
    famille: 'automatisation',
    statut: 'service',
    texte: "Le point d'accès unique de mes outils : il détient les accès à mes comptes, les sert à mes autres apps et garde la trace de chaque usage.",
    outils: ['Next.js', 'PostgreSQL', 'Drizzle', 'NextAuth'],
    cartouche: 'Passerelle',
  },
  {
    titre: 'Obsidian Web',
    detail: 'obsidian-web',
    famille: 'app',
    statut: 'service',
    texte: "Mes notes Obsidian lisibles et modifiables depuis n'importe quel navigateur : arborescence, recherche, liens.",
    outils: ['Next.js', 'React', 'GitHub API', 'PWA'],
    piece: video('obsidian-web', 'obsidian-web', 'Navigation et recherche', 'vidéo · 0:26'),
  },
  {
    titre: 'Sleep Tracker',
    detail: 'sleep-tracker',
    famille: 'app',
    statut: 'service',
    texte: "Suivi du sommeil installable sur téléphone : scores, tendances, et des données de santé traitées comme telles.",
    outils: ['Next.js', 'PostgreSQL', 'Drizzle', 'Passkeys'],
    cartouche: 'Sommeil',
  },
  {
    titre: 'HSR Lab',
    detail: 'hsr-lab',
    famille: 'app',
    statut: 'service',
    texte: "Un assistant pour Honkai: Star Rail : base de connaissances, constructeur d'équipes et conseiller de tirage chiffré.",
    outils: ['Next.js', 'PostgreSQL', 'Drizzle', 'Zod'],
    piece: video('hsr-lab', 'hsr-lab', 'Tirer ou attendre : le verdict chiffré', 'vidéo · 0:27'),
  },
  {
    titre: 'Expense Tracker',
    detail: 'expense-tracker',
    famille: 'app',
    statut: 'service',
    texte: 'Suivi des dépenses hors ligne : saisie rapide, budgets, plusieurs devises, import de relevés bancaires.',
    outils: ['Flutter', 'Riverpod', 'Hive', 'Node.js'],
    site: 'https://expense-tracker-one-bay-10.vercel.app',
    piece: video('expense-tracker', 'expense-tracker', 'Une dépense notée en trois gestes', 'vidéo · 0:27'),
  },
  {
    titre: 'HaltèrEgo',
    detail: 'halterego',
    famille: 'app',
    statut: 'dev',
    texte: 'Un coach de musculation et de calories qui montre ses calculs au lieu de les cacher.',
    outils: ['Next.js', 'PostgreSQL', 'Drizzle', 'Vitest'],
    cartouche: 'Musculation',
  },
  {
    titre: 'Politica France',
    detail: 'politica-france',
    famille: 'app',
    statut: 'service',
    texte: 'La vie politique française en données sourcées : élus, mandats, scrutins, carte des circonscriptions.',
    outils: ['Next.js', 'PostgreSQL', 'MapLibre', 'D3'],
    site: 'https://politica-france.vercel.app',
    piece: video('politica-france', 'politica-france', "Du scrutin à l'élu, chaque chiffre sourcé", 'vidéo · 0:28'),
  },
  {
    titre: 'HUMAN',
    detail: 'humain',
    famille: 'jeu',
    statut: 'beta',
    texte: "Un jeu de cartes d'introspection en application mobile et web, en bêta fermée auprès de testeurs invités.",
    outils: ['React Native', 'Expo', 'TypeScript'],
    piece: video('human', 'human', 'Choisir une partie, retourner les cartes', 'vidéo · 0:38'),
  },
  {
    titre: "Drink'n'Reveal",
    detail: 'drink-n-reveal',
    famille: 'jeu',
    statut: 'service',
    texte: "Un jeu de cartes de soirée (18+) : un deck imprimable et une application compagnon qui marche hors ligne.",
    outils: ['Next.js', 'React', 'Tailwind', 'pdf-lib'],
    site: 'https://drink-n-reveal.vercel.app',
    piece: video('drink-n-reveal', 'drink-n-reveal', 'Une partie, du setup au premier verdict', 'vidéo · 0:34'),
  },
  {
    titre: 'MotJuste',
    detail: 'motjuste',
    famille: 'jeu',
    statut: 'service',
    texte: 'Des mots fléchés en français générés à l’infini, jouables hors ligne.',
    outils: ['Next.js', 'React', 'PostgreSQL', 'Passkeys'],
    site: 'https://motjuste.vercel.app',
    piece: video('motjuste', 'motjuste', 'Une grille de mots fléchés remplie, mot à mot', 'vidéo · 0:25'),
  },
];

export const LABO: ProjetLabo[] = [
  { titre: 'Timebeat', texte: 'Suivi du temps de travail sur web, bureau et mobile (Next.js, Tauri, Capacitor, Supabase).', detail: 'timebeat' },
  { titre: 'WSL Terminal', texte: 'Terminal pour WSL2 avec onglets, panneaux, Git, Docker et SSH (Tauri, React, xterm.js).', detail: 'wsl-terminal' },
  { titre: 'Process Tracker', texte: 'Lancer et surveiller ses services de développement locaux depuis une app de bureau (Tauri, React).', detail: 'process-tracker' },
  { titre: 'System Monitor', texte: 'Moniteur système léger dans le terminal : CPU, RAM, GPU, réseau (Rust).', detail: 'system-monitor' },
  { titre: 'DAW custom', texte: 'Une station audio personnelle pour les mashups et le sound design (C++20, JUCE).', detail: 'daw-custom' },
];
