import { getAllProjects } from "@/lib/mdx/projects";
import { ProjectsPageClient } from "@/components/projects-page-client";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return <ProjectsPageClient projects={projects.map((p) => p.metadata)} />;
}
