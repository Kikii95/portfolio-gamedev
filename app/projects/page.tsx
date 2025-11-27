import { getAllProjects } from "@/lib/mdx/projects";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const categories = ["all", "école", "perso", "travail"] as const;

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Mes Projets
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Une sélection de mes projets en développement de jeux vidéo,
            outils et applications web. {projects.length} projets au total.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <Badge key={cat} variant={cat === "all" ? "default" : "outline"}>
              {cat === "all" ? "Tous" : cat}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.metadata.slug} project={project.metadata} />
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Aucun projet pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
