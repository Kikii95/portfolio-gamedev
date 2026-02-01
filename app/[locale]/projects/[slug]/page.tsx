import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/mdx/projects";
import { ProjectDetail } from "@/components/project-detail";

interface ProjectPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = getProjectBySlug(slug, locale);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.metadata.title} | Portfolio GameDev`,
    description: project.metadata.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug, locale } = await params;
  const project = getProjectBySlug(slug, locale);

  if (!project) {
    notFound();
  }

  return <ProjectDetail metadata={project.metadata} content={project.content} />;
}
