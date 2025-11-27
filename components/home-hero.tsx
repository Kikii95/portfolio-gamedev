"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
        >
          Portfolio GameDev
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-muted-foreground mb-8"
        >
          Développeur de jeux vidéo passionné. 3ème année GTech Gaming Campus.
          Spécialisé en C++, Unity, et développement web.
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
                Voir mes projets
              </span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/about">
              <span className="group-hover:scale-110 transition-transform inline-block">
                À propos
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
