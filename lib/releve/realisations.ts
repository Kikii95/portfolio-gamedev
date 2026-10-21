import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Realisation } from './types';

const RACINE = path.join(process.cwd(), 'content/realisations');
const LANGUE_PAR_DEFAUT = 'fr';

function dossier(locale: string): string {
  const cible = path.join(RACINE, locale);
  return fs.existsSync(cible) ? cible : path.join(RACINE, LANGUE_PAR_DEFAUT);
}

function lire(fichier: string, slug: string): Realisation {
  const { data, content } = matter(fs.readFileSync(fichier, 'utf8'));
  const meta = data as Omit<Realisation, 'slug' | 'corps'>;
  return { ...meta, pieces: meta.pieces ?? [], liens: meta.liens ?? [], outils: meta.outils ?? [], slug, corps: content };
}

export function getRealisations(locale: string): Realisation[] {
  const dir = dossier(locale);
  return fs
    .readdirSync(dir)
    .filter((nom) => nom.endsWith('.mdx'))
    .map((nom) => lire(path.join(dir, nom), nom.replace(/\.mdx$/, '')))
    .sort((a, b) => a.ordre - b.ordre);
}

export function getRealisation(slug: string, locale: string): Realisation | undefined {
  return getRealisations(locale).find((r) => r.slug === slug);
}
