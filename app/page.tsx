import { getAllProjects } from "@/lib/mdx/projects";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const projects = getAllProjects();
  const featuredProjects = projects.filter((p) => p.metadata.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Portfolio GameDev
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Développeur de jeux vidéo passionné. 3ème année GTech Gaming Campus.
            Spécialisé en C++, Unity, et développement web.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="#projects">Voir mes projets</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">À propos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section id="projects" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8">Projets en vedette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.metadata.slug} project={project.metadata} />
            ))}
          </div>
        </section>
      )}

      {/* All Projects Section */}
      {projects.length > featuredProjects.length && (
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8">Tous les projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.metadata.featured)
              .map((project) => (
                <ProjectCard key={project.metadata.slug} project={project.metadata} />
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
