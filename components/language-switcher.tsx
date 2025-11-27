"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    // Remove current locale from path and add new locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLocale}
      className="gap-1.5 border-primary/50 hover:bg-primary/10 px-3"
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase font-bold text-sm">
        {locale === 'fr' ? 'FR' : 'EN'}
      </span>
    </Button>
  );
}
