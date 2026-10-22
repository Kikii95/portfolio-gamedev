"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ProjectMetadata } from "@/lib/mdx/projects";
import { ProjectStatus } from "@/lib/status-config";
import { ProjectGallery } from "./project-gallery";
import { ProjectLinksCard } from "./project-links-card";
import { StatusBadge } from "./status-badge";
import { markdownComponents } from "./mdx-components";

interface ProjectDetailProps {
  metadata: ProjectMetadata;
  content: string;
}

export function ProjectDetail({ metadata, content }: ProjectDetailProps) {
  const locale = useLocale();
  const t = useTranslations('projects');

  const categoryLabels = {
    'école': t('category.école'),
    'perso': t('category.perso'),
    'travail': t('category.travail')
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Backdrop Blur */}
      {metadata.thumbnail && (
        <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
          {/* Background Image Blurred */}
          <div className="absolute inset-0">
            <Image
              src={metadata.thumbnail}
              alt={metadata.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>

          {/* Hero Content */}
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button variant="ghost" asChild className="mb-4 group">
                <Link href={`/${locale}/ecole/projects`}>
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  {t('backToProjects')}
                </Link>
              </Button>

              <div className="flex gap-2 mb-4 flex-wrap">
                <Badge variant="outline" className="backdrop-blur-md bg-background/50">
                  {categoryLabels[metadata.category]}
                </Badge>
                {metadata.featured && (
                  <Badge className="bg-gradient-to-r from-primary to-accent backdrop-blur-md">
                    {t('featured')}
                  </Badge>
                )}
                {metadata.status && (
                  <StatusBadge status={metadata.status as ProjectStatus} variant="hero" />
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {metadata.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">{metadata.description}</p>
            </motion.div>
          </div>
        </div>
      )}

      {/* Content Grid: 2 columns on desktop */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Gallery Carousel - Steam Style */}
            {metadata.gallery && metadata.gallery.length > 0 ? (
              <div className="mb-8">
                <ProjectGallery items={metadata.gallery} title={metadata.title} />
              </div>
            ) : (
              /* Fallback: Single Video if exists */
              metadata.video && (
                <div className="mb-8 relative w-full aspect-video overflow-hidden rounded-lg border border-border bg-muted">
                  <video
                    src={metadata.video}
                    controls
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            )}

            {/* Tags */}
            <div className="flex gap-2 flex-wrap mb-8">
              {metadata.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="hover:bg-primary/10 transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>

            <Separator className="my-8" />

            {/* MDX Content with improved styles */}
            <article className="prose prose-invert prose-lg max-w-none
              prose-headings:scroll-mt-20
              prose-headings:font-bold
              prose-h1:text-4xl prose-h1:text-primary prose-h1:mb-6
              prose-h2:text-3xl prose-h2:text-primary prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:text-accent prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:font-medium
              prose-strong:text-foreground prose-strong:font-semibold
              prose-code:text-accent prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:p-4
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:marker:text-primary
              prose-img:rounded-lg prose-img:border prose-img:border-border
              prose-hr:border-border
              prose-table:border prose-table:border-border prose-th:bg-muted prose-th:p-3 prose-td:p-3
            ">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {content}
              </ReactMarkdown>
            </article>
          </motion.div>

          {/* Sidebar - Sticky on desktop */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-24 lg:self-start space-y-6"
          >
            {/* Project Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('detail.information')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Date */}
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">{t('detail.date')}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(metadata.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                      })}
                    </p>
                  </div>
                </div>

                {/* Category */}
                <div className="flex items-start gap-3">
                  <Tag className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">{t('detail.category')}</p>
                    <p className="text-sm text-muted-foreground">
                      {categoryLabels[metadata.category]}
                    </p>
                  </div>
                </div>

                {/* Status */}
                {metadata.status && (
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <StatusBadge status={metadata.status as ProjectStatus} variant="card" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <ProjectLinksCard metadata={metadata} content={content} />

            {/* Technologies Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('detail.technologiesTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {metadata.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
