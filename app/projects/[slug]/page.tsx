import { getAllProjects, getProjectBySlug } from "@/lib/mdx/projects";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.metadata.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux projets
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-12">
          <div className="flex gap-2 mb-4 flex-wrap">
            <Badge variant="outline">{metadata.category}</Badge>
            {metadata.featured && <Badge>Featured</Badge>}
            {metadata.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {metadata.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            {metadata.description}
          </p>

          <div className="flex gap-4">
            {metadata.github && (
              <Button asChild>
                <a
                  href={metadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Voir sur GitHub
                </a>
              </Button>
            )}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>

        <Separator className="my-12" />

        {/* Footer Navigation */}
        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tous les projets
            </Link>
          </Button>

          {metadata.github && (
            <Button asChild variant="outline">
              <a
                href={metadata.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code source
                <Github className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
