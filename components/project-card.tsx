"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectMetadata } from "@/lib/mdx/projects";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: ProjectMetadata;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Link href={`/projects/${project.slug}`}>
        <Card className="h-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,69,69,0.3)] hover:border-primary/50 cursor-pointer group">
          <CardHeader>
            <div className="flex gap-2 mb-2 flex-wrap">
              <Badge variant="outline" className="group-hover:border-primary group-hover:text-primary transition-colors">
                {project.category}
              </Badge>
              {project.featured && (
                <Badge className="bg-gradient-to-r from-primary to-accent">
                  Featured
                </Badge>
              )}
            </div>
            <CardTitle className="group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              {project.tags.slice(0, 4).map((tag) => (
                <Badge key={tag} variant="secondary" className="group-hover:bg-primary/10 transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            {new Date(project.date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
            })}
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
