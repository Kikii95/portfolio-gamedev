import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  const skills = {
    "Game Engines": ["Unity", "Unreal Engine", "Godot", "Custom Engines"],
    "Languages": ["C++", "C#", "TypeScript", "Python", "GLSL"],
    "Tools": ["Git", "CMake", "Visual Studio", "VS Code", "Blender"],
    "Web": ["Next.js", "React", "Node.js", "PostgreSQL", "TailwindCSS"],
  };

  const education = [
    {
      period: "2023 - 2026",
      title: "Bachelor Développeur de Jeux Vidéo",
      school: "GTech Gaming Campus",
      description: "3ème année - Spécialisation Programmation Gameplay & Moteurs",
    },
  ];

  const experience = [
    {
      period: "2024",
      title: "Projet Template ECS",
      type: "École",
      description: "Développement d'un moteur Entity Component System en C++20 avec architecture modulaire professionnelle.",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            À Propos
          </h1>
          <p className="text-xl text-muted-foreground">
            Développeur de jeux vidéo passionné par la création d'expériences interactives.
          </p>
        </div>

        {/* Bio */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Qui suis-je ?</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Je suis un développeur de jeux vidéo en 3ème année à GTech Gaming Campus,
              passionné par la programmation gameplay, le développement de moteurs de jeu
              et l'architecture logicielle.
            </p>
            <p>
              Mon objectif est de créer des expériences de jeu innovantes et techniques,
              en combinant compétences en C++, Unity, et développement web moderne.
            </p>
          </CardContent>
        </Card>

        <Separator className="my-12" />

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Compétences Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
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
          <h2 className="text-3xl font-bold mb-6">Formation</h2>
          <div className="space-y-6">
            {education.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <Badge className="w-fit">{item.period}</Badge>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground mb-2">{item.school}</p>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Expérience</h2>
          <div className="space-y-6">
            {experience.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <Badge className="w-fit">{item.period}</Badge>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <Badge variant="outline">{item.type}</Badge>
                      </div>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
