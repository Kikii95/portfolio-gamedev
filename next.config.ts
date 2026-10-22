import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const ANCIENNE_ADRESSE = 'portfolio-gamedev.vercel.app';
const ADRESSE = 'https://killian-abboud.vercel.app';
const LANGUES = ['', '/:locale(fr|en)'];
const ANCIENS_ATELIERS = ['', '/jeu', '/ecole'];

function versAccueil(langue: string, ancre: string): string {
  return `${langue ? '/:locale' : ''}/#${ancre}`;
}

function anciennesPages() {
  return LANGUES.flatMap((langue) => {
    const cible = `${langue ? '/:locale' : ''}/ecole`;
    return ANCIENS_ATELIERS.flatMap((atelier) => [
      { source: `${langue}${atelier}/about`, destination: versAccueil(langue, 'parcours'), permanent: true },
      { source: `${langue}${atelier}/contact`, destination: versAccueil(langue, 'contact'), permanent: true },
      { source: `${langue}${atelier}/projects`, destination: cible, permanent: true },
      { source: `${langue}${atelier}/projects/:slug`, destination: `${cible}/:slug`, permanent: true },
    ]).concat([
      { source: `${langue}/jeu`, destination: cible, permanent: true },
      { source: `${langue}/jeu/:slug`, destination: `${cible}/:slug`, permanent: true },
    ]);
  });
}

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host' as const, value: ANCIENNE_ADRESSE }],
        destination: `${ADRESSE}/:path*`,
        permanent: true,
      },
      ...anciennesPages(),
    ];
  },
};

export default withNextIntl(nextConfig);
