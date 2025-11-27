import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface ProjectMetadata {
  title: string;
  description: string;
  date: string;
  category: 'école' | 'perso' | 'travail';
  tags: string[];
  featured?: boolean;
  github?: string;
  thumbnail?: string;
  slug: string;
}

export interface Project {
  metadata: ProjectMetadata;
  content: string;
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
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

export function getProjectBySlug(slug: string): Project | undefined {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    metadata: {
      ...data,
      slug,
    } as ProjectMetadata,
    content,
  };
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.metadata.featured);
}
