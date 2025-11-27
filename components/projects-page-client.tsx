"use client";

import { ProjectCard } from "@/components/project-card";
import { ProjectMetadata } from "@/lib/mdx/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { Filter, X } from "lucide-react";
import { useTranslations } from "next-intl";

interface ProjectsPageClientProps {
  projects: ProjectMetadata[];
}

type CategoryFilter = "all" | "école" | "perso" | "travail";

export function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  const t = useTranslations('projects');

  // Get current year as default
  const currentYear = new Date().getFullYear().toString();

  const [selectedYear, setSelectedYear] = useState<string>(currentYear);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract unique years from projects (no "all" option)
  const years = useMemo(() => {
    const projectYears = projects.map((p) => new Date(p.date).getFullYear());
    return Array.from(new Set(projectYears)).sort((a, b) => b - a);
  }, [projects]);

  // First filter by year (primary filter)
  const projectsInYear = useMemo(() => {
    return projects.filter((project) => {
      return new Date(project.date).getFullYear().toString() === selectedYear;
    });
  }, [projects, selectedYear]);

  // Extract available categories from projects in selected year
  const availableCategories = useMemo(() => {
    const categories = new Set<CategoryFilter>();
    categories.add("all"); // Always include "all"
    projectsInYear.forEach((p) => categories.add(p.category as CategoryFilter));
    return Array.from(categories);
  }, [projectsInYear]);

  // Extract available tags from projects in selected year
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    projectsInYear.forEach((p) => p.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [projectsInYear]);

  // Reset filters if selected category/tags are not available in current year
  useEffect(() => {
    if (selectedCategory !== "all" && !availableCategories.includes(selectedCategory)) {
      setSelectedCategory("all");
    }
    if (selectedTags.length > 0) {
      const validTags = selectedTags.filter((tag) => availableTags.includes(tag));
      if (validTags.length !== selectedTags.length) {
        setSelectedTags(validTags);
      }
    }
  }, [selectedYear, availableCategories, availableTags, selectedCategory, selectedTags]);

  // Then apply secondary filters (category + tags) on year-filtered projects
  const filteredProjects = useMemo(() => {
    return projectsInYear.filter((project) => {
      const categoryMatch = selectedCategory === "all" || project.category === selectedCategory;
      const tagMatch = selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag));

      return categoryMatch && tagMatch;
    });
  }, [projectsInYear, selectedCategory, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedTags([]);
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedTags.length > 0;

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            {t('description')}
          </p>

          {/* Year Tabs */}
          <div className="flex gap-3 mb-2">
            {years.map((year) => (
              <motion.button
                key={year}
                onClick={() => setSelectedYear(year.toString())}
                className={`px-6 py-3 text-lg font-semibold rounded-lg transition-all ${
                  selectedYear === year.toString()
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {year}
              </motion.button>
            ))}
          </div>
          <Separator className="mb-8" />
        </motion.div>

        {/* Secondary Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8 space-y-4"
        >
          {/* Filter Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">
                {t('filters')} ({filteredProjects.length} / {projectsInYear.length} {t('projectsCount', { filtered: filteredProjects.length, total: projectsInYear.length, year: selectedYear })})
              </h3>
            </div>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-primary"
              >
                <X className="h-4 w-4 mr-2" />
                {t('resetFilters')}
              </Button>
            )}
          </div>

          {/* Category Filters */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{t('categories')}</p>
            <div className="flex gap-2 flex-wrap">
              {availableCategories.map((cat) => (
                <Badge
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  className="cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {t(`category.${cat}`)}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tag Filters */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              {selectedTags.length > 0 ? t('technologiesSelected', { count: selectedTags.length }) : t('technologies')}
            </p>
            <div className="flex gap-2 flex-wrap">
              {availableTags.map((tag) => (
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
              {t('noProjects')}
            </p>
            <Button onClick={clearFilters} variant="outline">
              {t('resetFilters')}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
