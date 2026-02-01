"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectMetadata } from "@/lib/mdx/projects";
import { ProjectStatus } from "@/lib/status-config";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { useState, useRef } from "react";
import { StatusBadge } from "./status-badge";
import { Code2 } from "lucide-react";

interface ProjectCardProps {
  project: ProjectMetadata;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const t = useTranslations('projects');
  const locale = useLocale();
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const categoryLabels = {
    'école': t('category.école'),
    'perso': t('category.perso'),
    'travail': t('category.travail')
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/${locale}/projects/${project.slug}`}>
        <Card className="h-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,69,69,0.3)] hover:border-primary/50 cursor-pointer group overflow-hidden">
          {/* Image/Video Section with padding frame */}
          <div className="p-4">
            <div className="relative w-full aspect-video bg-muted overflow-hidden rounded-lg border border-border/50">
              {project.thumbnail ? (
                <>
                  {/* Image - Always visible */}
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className={`object-cover transition-opacity duration-300 ${
                      isHovered && project.video ? 'opacity-0' : 'opacity-100'
                    }`}
                  />

                  {/* Video - Only visible on hover if exists */}
                  {project.video && (
                    <video
                      ref={videoRef}
                      src={project.video}
                      loop
                      muted
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  )}
                </>
              ) : (
                /* Placeholder when no thumbnail */
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                  <Code2 className="h-16 w-16 text-muted-foreground/50 group-hover:text-primary/50 transition-colors" />
                </div>
              )}
            </div>
          </div>

          <CardHeader>
            <div className="flex gap-2 mb-2 flex-wrap">
              <Badge variant="outline" className="group-hover:border-primary group-hover:text-primary transition-colors">
                {categoryLabels[project.category]}
              </Badge>
              {project.featured && (
                <Badge className="bg-gradient-to-r from-primary to-accent">
                  {t('featured')}
                </Badge>
              )}
              {project.status && (
                <StatusBadge status={project.status as ProjectStatus} variant="card" />
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
            {new Date(project.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
              year: 'numeric',
              month: 'long',
            })}
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
