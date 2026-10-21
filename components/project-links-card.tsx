"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Github, FileText, ExternalLink, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { ProjectMetadata } from "@/lib/mdx/projects";
import { markdownComponents } from "./mdx-components";

interface ProjectLinksCardProps {
  metadata: ProjectMetadata;
  content: string;
}

export function ProjectLinksCard({ metadata, content }: ProjectLinksCardProps) {
  const t = useTranslations('projects');
  const [techDetailsOpen, setTechDetailsOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t('detail.links')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {/* GitHub Link */}
        {metadata.github && (
          <Button asChild variant="outline" className="w-full justify-start">
            <a href={metadata.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {t('detail.githubRepo')}
              <ExternalLink className="ml-auto h-3 w-3" />
            </a>
          </Button>
        )}

        {/* Build Download Link */}
        {metadata.buildUrl && (
          <Button asChild variant="outline" className="w-full justify-start">
            <a href={metadata.buildUrl} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              {t('detail.downloadBuild')}
              <ExternalLink className="ml-auto h-3 w-3" />
            </a>
          </Button>
        )}

        {/* Technical Details Modal */}
        <Dialog open={techDetailsOpen} onOpenChange={setTechDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              {t('detail.technicalDoc')}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[min(50rem,calc(100vw-2rem))] max-h-[85vh] flex flex-col">
            <DialogHeader className="flex-shrink-0">
              <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('detail.technicalDoc')}
              </DialogTitle>
              <DialogDescription>
                {t('detail.technicalDocSubtitle')}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 overflow-y-auto flex-1 -mr-6 pr-6">
              {/* Technical Details Content - Direct Prose Rendering */}
              {/* Zoom out on small screens to avoid horizontal scroll */}
              <div className="origin-top-left [zoom:0.8] sm:[zoom:0.9] md:[zoom:1]">
                <article className="prose prose-invert max-w-none
                  prose-headings:font-bold
                  prose-h2:text-xl prose-h2:text-primary prose-h2:mt-6 prose-h2:mb-3 prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-2
                  prose-h3:text-lg prose-h3:text-accent prose-h3:mt-4 prose-h3:mb-2
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:my-2
                  prose-strong:text-foreground
                  prose-code:text-accent prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto prose-pre:text-xs
                  prose-ul:text-muted-foreground prose-ul:my-2
                  prose-ol:text-muted-foreground prose-ol:my-2
                  prose-li:marker:text-primary prose-li:my-1
                  prose-table:border prose-table:border-border prose-table:text-sm
                  prose-th:bg-muted prose-th:px-3 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-th:border-b prose-th:border-border
                  prose-td:px-3 prose-td:py-2 prose-td:border-b prose-td:border-border/50
                  prose-hr:border-border prose-hr:my-4
                ">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                    {metadata.techDetails || content.split('\n\n')[0] || metadata.description}
                  </ReactMarkdown>
                </article>
              </div>

              {/* Repository Link */}
              {metadata.github && (
                <div className="mt-6">
                  <Button asChild className="w-full" size="lg">
                    <a href={metadata.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      {t('detail.viewGithub')}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
