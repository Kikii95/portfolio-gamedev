import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-releve-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-gamedev.vercel.app"),
  title: "Killian Abboud | Automatisation des process & intégration de l'IA",
  description:
    "Des automatisations et des assistants IA qui tournent déjà, chez des PME et au quotidien, avec un humain qui garde la main.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fonts = [geistSans, geistMono, schibsted, plexMono].map((f) => f.variable).join(" ");
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${fonts} antialiased flex min-h-screen flex-col`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
