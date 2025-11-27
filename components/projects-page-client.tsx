"use client";

import { ProjectCard } from "@/components/project-card";
import { ProjectMetadata } from "@/lib/mdx/projects";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProjectsPageClientProps {
  projects: ProjectMetadata[];
}

export function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  const categories = ["all", "école", "perso", "travail"] as const;

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Mes Projets
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Une sélection de mes projets en développement de jeux vidéo,
            outils et applications web. {projects.length} projets au total.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8 flex gap-2 flex-wrap"
        >
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={cat === "all" ? "default" : "outline"}
              className="cursor-pointer hover:scale-110 transition-transform"
            >
              {cat === "all" ? "Tous" : cat}
            </Badge>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
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
