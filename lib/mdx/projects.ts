import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getProjectsDirectory(locale: string = 'fr') {
  return path.join(process.cwd(), 'content/projects', locale);
}

export interface ProjectMetadata {
  title: string;
  description: string;
  date: string;
  category: 'école' | 'perso' | 'travail';
  tags: string[];
  featured?: boolean;
  status?: 'actif' | 'pause' | 'stable' | 'maintenance' | 'archive';
  github?: string;
  buildUrl?: string;
  thumbnail?: string;
  video?: string;
  gallery?: string[];
  slug: string;
}

export interface Project {
  metadata: ProjectMetadata;
  content: string;
}

export function getAllProjects(locale: string = 'fr'): Project[] {
  const dir = getProjectsDirectory(locale);
  const fallbackDir = getProjectsDirectory('fr');

  // Use fallback if locale dir doesn't exist
  const targetDir = fs.existsSync(dir) ? dir : fallbackDir;

  if (!fs.existsSync(targetDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(targetDir);
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(targetDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        metadata: {
          ...data,
          slug,
        } as ProjectMetadata,
        content,
      };
    });

  return allProjects.sort((a, b) => {
    if (a.metadata.date < b.metadata.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getProjectBySlug(slug: string, locale: string = 'fr'): Project | undefined {
  const dir = getProjectsDirectory(locale);
  const fullPath = path.join(dir, `${slug}.mdx`);

  // Fallback to FR if file doesn't exist in requested locale
  const fallbackPath = path.join(getProjectsDirectory('fr'), `${slug}.mdx`);
  const targetPath = fs.existsSync(fullPath) ? fullPath : fallbackPath;

  if (!fs.existsSync(targetPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(targetPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    metadata: {
      ...data,
      slug,
    } as ProjectMetadata,
    content,
  };
}

export function getFeaturedProjects(locale: string = 'fr'): Project[] {
  return getAllProjects(locale).filter((project) => project.metadata.featured);
}
