"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations('about');

  const skills = {
    gameEngines: ["Unity", "Unreal Engine", "Godot", "Custom Engines"],
    languages: ["C++", "C#", "TypeScript", "Python", "GLSL"],
    tools: ["Git", "CMake", "Visual Studio", "VS Code", "Blender"],
    web: ["Next.js", "React", "Node.js", "PostgreSQL", "TailwindCSS"],
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        {/* Bio */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{t('whoAmI')}</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-none">
            <p>{t('bio1')}</p>
            <p>{t('bio2')}</p>
          </CardContent>
        </Card>

        <Separator className="my-12" />

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{t('skillsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{t(`skillsCategories.${category}`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{t('educationTitle')}</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <Badge className="w-fit">{t('educationItems.gtech.period')}</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{t('educationItems.gtech.title')}</h3>
                    <p className="text-muted-foreground mb-2">{t('educationItems.gtech.school')}</p>
                    <p className="text-sm">{t('educationItems.gtech.description')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{t('experienceTitle')}</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <Badge className="w-fit">{t('experienceItems.ecs.period')}</Badge>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold">{t('experienceItems.ecs.title')}</h3>
                      <Badge variant="outline">{t('experienceItems.ecs.type')}</Badge>
                    </div>
                    <p className="text-sm">{t('experienceItems.ecs.description')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
