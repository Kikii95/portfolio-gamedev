import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const ATELIER_JEU = ['projects', 'about', 'contact'];

const nextConfig: NextConfig = {
  async redirects() {
    return ATELIER_JEU.flatMap((section) => [
      { source: `/${section}/:path*`, destination: `/jeu/${section}/:path*`, permanent: true },
      { source: `/:locale(fr|en)/${section}/:path*`, destination: `/:locale/jeu/${section}/:path*`, permanent: true },
    ]);
  },
};

export default withNextIntl(nextConfig);
