"use client";

import { ProjectCard } from "@/components/project-card";
import { ProjectMetadata } from "@/lib/mdx/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Filter, X } from "lucide-react";

interface ProjectsPageClientProps {
  projects: ProjectMetadata[];
}

type CategoryFilter = "all" | "école" | "perso" | "travail";

export function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract unique years from projects
  const years = useMemo(() => {
    const projectYears = projects.map((p) => new Date(p.date).getFullYear());
    return ["all", ...Array.from(new Set(projectYears)).sort((a, b) => b - a)];
  }, [projects]);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = selectedCategory === "all" || project.category === selectedCategory;
      const yearMatch = selectedYear === "all" || new Date(project.date).getFullYear().toString() === selectedYear;
      const tagMatch = selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag));

      return categoryMatch && yearMatch && tagMatch;
    });
  }, [projects, selectedCategory, selectedYear, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedYear("all");
    setSelectedTags([]);
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedYear !== "all" || selectedTags.length > 0;

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
            outils et applications web. {filteredProjects.length} / {projects.length} projets.
          </p>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8 space-y-6"
        >
          {/* Filter Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Filtres</h3>
            </div>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-primary"
              >
                <X className="h-4 w-4 mr-2" />
                Réinitialiser
              </Button>
            )}
          </div>

          {/* Category Filters */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Catégorie</p>
            <div className="flex gap-2 flex-wrap">
              {(["all", "école", "perso", "travail"] as const).map((cat) => (
                <Badge
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  className="cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === "all" ? "Tous" : cat}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Year Filters */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Année</p>
            <div className="flex gap-2 flex-wrap">
              {years.map((year) => (
                <Badge
                  key={year}
                  variant={selectedYear === year.toString() ? "default" : "outline"}
                  className="cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setSelectedYear(year.toString())}
                >
                  {year === "all" ? "Toutes" : year}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Tag Filters */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              Technologies ({selectedTags.length > 0 && `${selectedTags.length} sélectionnées`})
            </p>
            <div className="flex gap-2 flex-wrap">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "secondary"}
                  className="cursor-pointer hover:scale-110 transition-all"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedYear}-${selectedTags.join(",")}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg mb-4">
              Aucun projet ne correspond aux filtres sélectionnés.
            </p>
            <Button onClick={clearFilters} variant="outline">
              Réinitialiser les filtres
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
