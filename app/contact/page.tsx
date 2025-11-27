import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Me Contacter
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Intéressé par une collaboration, un stage ou simplement discuter de jeux vidéo ?
            N'hésitez pas à me contacter !
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Email</CardTitle>
              <CardDescription>Envoyez-moi un email</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:votre@email.com"
                className="text-primary hover:underline font-medium"
              >
                votre@email.com
              </a>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>GitHub</CardTitle>
              <CardDescription>Consultez mon code</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://github.com/Kikii95"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                @Kikii95
              </a>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>LinkedIn</CardTitle>
              <CardDescription>Connectons-nous</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://linkedin.com/in/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Mon Profil
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Availability */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                <span className="text-2xl">💼</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Disponibilité</h3>
                <p className="text-muted-foreground mb-4">
                  Actuellement en recherche de <strong className="text-foreground">stage</strong> ou <strong className="text-foreground">alternance</strong>
                  {" "}en développement de jeux vidéo pour 2025.
                </p>
                <Button asChild>
                  <a href="mailto:votre@email.com">Discutons de votre projet</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
