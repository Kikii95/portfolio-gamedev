"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Hero3DCube } from "@/components/hero-3d-cube";

export function HomeHero() {
  const t = useTranslations('home.hero');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
          >
            {t('greeting')} {t('name')} - {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-muted-foreground mb-8"
          >
            {t('description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex gap-4"
          >
            <Button asChild size="lg" className="group">
              <Link href="#projects">
                <span className="group-hover:scale-110 transition-transform inline-block">
                  {t('viewProjects')}
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link href={`/${locale}/about`}>
                <span className="group-hover:scale-110 transition-transform inline-block">
                  {tNav('about')}
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Right: 3D Cube */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden lg:block h-[400px] w-full"
        >
          <Hero3DCube />
        </motion.div>
      </div>
    </section>
  );
}
