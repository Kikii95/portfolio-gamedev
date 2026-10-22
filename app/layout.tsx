import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Martian_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Sans({
  variable: "--font-interface",
  subsets: ["latin"],
  axes: ["wdth"],
});

const martian = Martian_Mono({
  variable: "--font-donnees",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const viewport: Viewport = {
  themeColor: "#111214",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://killian-abboud.vercel.app"),
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
  const fonts = [geistSans, geistMono, instrument, martian].map((f) => f.variable).join(" ");
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${fonts} antialiased flex min-h-screen flex-col`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
