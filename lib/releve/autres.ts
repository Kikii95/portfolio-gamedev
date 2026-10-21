import type { AutreRealisation } from '@/components/releve/autres-realisations';

export const AUTRES_REALISATIONS: AutreRealisation[] = [
  {
    titre: 'Obsidian Web',
    texte: "Mes notes Obsidian lisibles et modifiables depuis n'importe quel navigateur : arborescence, recherche, liens entre notes.",
    piece: { type: 'video', src: '/medias/obsidian-web/obsidian-web.mp4', poster: '/medias/obsidian-web/obsidian-web-poster.webp', legende: 'Navigation et recherche', duree: 'vidéo · 0:26' },
  },
  {
    titre: 'Memogram',
    texte: 'Un journal tenu en écrivant à un bot Telegram : chaque journée est résumée, rangée par semaine et par mois, et recherchable.',
    piece: { type: 'video', src: '/medias/memogram/memogram.mp4', poster: '/medias/memogram/memogram-poster.webp', legende: 'Jour, semaine, mois, recherche', duree: 'vidéo · 0:24' },
  },
  {
    titre: 'HUMAN',
    texte: "Un jeu de cartes d'introspection en application web, en bêta auprès de testeurs.",
    piece: { type: 'video', src: '/medias/human/human.mp4', poster: '/medias/human/human-poster.webp', legende: 'Choisir une partie, retourner les cartes', duree: 'vidéo · 0:38' },
  },
];
