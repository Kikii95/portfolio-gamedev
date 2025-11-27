import { getAllProjects } from "@/lib/mdx/projects";
import { HomeHero } from "@/components/home-hero";
import { ProjectsGrid } from "@/components/projects-grid";

export default function Home() {
  const projects = getAllProjects();
  const featuredProjects = projects.filter((p) => p.metadata.featured);
  const otherProjects = projects.filter((p) => !p.metadata.featured);

  return (
    <div className="min-h-screen bg-background">
      <HomeHero />

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div id="projects">
          <ProjectsGrid
            projects={featuredProjects.map((p) => p.metadata)}
            title="Projets en vedette"
            startIndex={0}
          />
        </div>
      )}

      {/* All Projects */}
      {otherProjects.length > 0 && (
        <ProjectsGrid
          projects={otherProjects.map((p) => p.metadata)}
          title="Tous les projets"
          startIndex={featuredProjects.length}
        />
      )}
    </div>
  );
}
