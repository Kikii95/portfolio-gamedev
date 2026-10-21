import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
  localeDetection: false
});

export const config = {
  matcher: ['/', '/(fr|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
