import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackgroundParticles } from "@/components/background-particles";

export default function JeuLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark flex min-h-screen flex-1 flex-col bg-background font-sans text-foreground">
      <BackgroundParticles />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
