import { getAllProjects, getProjectBySlug, type Project, type ProjectMetadata } from '@/lib/mdx/projects';
import type { Piece } from './types';

export type StatutEcole = 'encours' | 'termine' | 'pause';

const STATUT: Record<NonNullable<ProjectMetadata['status']>, StatutEcole> = {
  actif: 'encours',
  maintenance: 'encours',
  stable: 'termine',
  archive: 'termine',
  pause: 'pause',
};

export const ETIQUETTE_ECOLE: Record<StatutEcole, string> = { encours: 'etat section', termine: 'etat', pause: 'etat' };

export function statutEcole(meta: ProjectMetadata): StatutEcole {
  return meta.status ? STATUT[meta.status] : 'termine';
}

export function piecesEcole(meta: ProjectMetadata): Piece[] {
  const medias = meta.gallery ?? [];
  return medias.map((src) => {
    const video = src.endsWith('.mp4') || src.endsWith('.webm');
    return video
      ? { type: 'video', src, poster: meta.thumbnail, legende: meta.title }
      : { type: 'image', src, legende: meta.title };
  });
}

export function projetsEcole(locale: string): Project[] {
  return getAllProjects(locale);
}

export function projetEcole(slug: string, locale: string): Project | undefined {
  return getProjectBySlug(slug, locale);
}
