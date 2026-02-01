import { getAllProjects } from "@/lib/mdx/projects";
import { ProjectsPageClient } from "@/components/projects-page-client";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  const projects = getAllProjects(locale);

  return <ProjectsPageClient projects={projects.map((p) => p.metadata)} />;
}
