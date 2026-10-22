import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const ATELIER_JEU = ['projects', 'about', 'contact'];

const nextConfig: NextConfig = {
  async redirects() {
    const sections = ATELIER_JEU.flatMap((section) => [
      { source: `/${section}/:path*`, destination: `/ecole/${section}/:path*`, permanent: true },
      { source: `/:locale(fr|en)/${section}/:path*`, destination: `/:locale/ecole/${section}/:path*`, permanent: true },
    ]);
    return [
      {
        source: '/:path*',
        has: [{ type: 'host' as const, value: 'portfolio-gamedev.vercel.app' }],
        destination: 'https://killian-abboud.vercel.app/:path*',
        permanent: true,
      },
      ...sections,
      { source: '/jeu/:path*', destination: '/ecole/:path*', permanent: true },
      { source: '/:locale(fr|en)/jeu/:path*', destination: '/:locale/ecole/:path*', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
