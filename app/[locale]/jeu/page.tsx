import { getAllProjects } from "@/lib/mdx/projects";
import { HomeHero } from "@/components/home-hero";
import { ProjectsGrid } from "@/components/projects-grid";
import { getTranslations } from "next-intl/server";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  const t = await getTranslations('home');
  const projects = getAllProjects(locale);
  const featuredProjects = projects.filter((p) => p.metadata.featured);

  return (
    <div className="min-h-screen bg-background">
      <HomeHero />

      {/* Featured Projects Only */}
      {featuredProjects.length > 0 && (
        <div id="projects">
          <ProjectsGrid
            projects={featuredProjects.map((p) => p.metadata)}
            title={t('featuredProjects')}
            startIndex={0}
          />
        </div>
      )}
    </div>
  );
}
