"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Download } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale();
  const [cvDialogOpen, setCvDialogOpen] = useState(false);

  // CV URL based on locale
  const cvUrl = locale === 'fr' ? '/cv/CV_FR.pdf' : '/cv/CV_EN.pdf';

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

        {/* CV Viewer Button */}
        <div className="mb-8 flex justify-center">
          <Dialog open={cvDialogOpen} onOpenChange={setCvDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="group">
                <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t('cv.viewButton')}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
              <DialogHeader>
                <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t('cv.dialogTitle')}
                </DialogTitle>
                <DialogDescription>
                  {t('cv.dialogDescription')}
                </DialogDescription>
              </DialogHeader>

              {/* PDF Viewer */}
              <div className="flex-1 min-h-0 relative rounded-lg overflow-hidden border border-border bg-muted">
                <iframe
                  src={cvUrl}
                  className="w-full h-full min-h-[600px]"
                  title="CV PDF Viewer"
                />
              </div>

              {/* Download Button */}
              <div className="flex justify-center pt-4">
                <Button asChild size="lg" className="group">
                  <a href={cvUrl} download>
                    <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    {t('cv.downloadButton')}
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

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

      </div>
    </div>
  );
}
