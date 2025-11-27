"use client";

import { ProjectCard } from "@/components/project-card";
import { ProjectMetadata } from "@/lib/mdx/projects";
import { motion } from "framer-motion";

interface ProjectsGridProps {
  projects: ProjectMetadata[];
  title: string;
  startIndex?: number;
}

export function ProjectsGrid({ projects, title, startIndex = 0 }: ProjectsGridProps) {
  return (
    <section className="container mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={startIndex + index}
          />
        ))}
      </div>
    </section>
  );
}
