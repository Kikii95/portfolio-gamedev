# Portfolio GameDev

Portfolio moderne pour développeur de jeux vidéo, construit avec Next.js 16 et React 19.

## 🎯 Stack Technique

| Catégorie | Technologies |
|-----------|--------------|
| **Framework** | Next.js 16 (App Router) |
| **Runtime** | React 19 |
| **Langage** | TypeScript |
| **Styling** | TailwindCSS 4 + Shadcn/UI |
| **Animations** | Framer Motion |
| **3D** | React Three Fiber + Drei |
| **Contenu** | MDX (gray-matter) |
| **i18n** | next-intl (FR/EN) |
| **Déploiement** | Vercel |

## 🚀 Démarrage Rapide

```bash
# Installation (pnpm obligatoire)
pnpm install

# Développement
pnpm dev

# Build production
pnpm build

# Démarrage production
pnpm start
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## 📁 Structure Projet

```
portfolio-gamedev/
├── app/[locale]/           # Pages Next.js (App Router + i18n)
├── components/             # Composants React
│   ├── ui/                 # Composants Shadcn/UI
│   ├── project-card.tsx    # Card projet
│   └── three/              # Composants 3D (R3F)
├── content/                # Contenu MDX
│   └── projects/           # Projets (15 MDX)
├── lib/                    # Utilitaires
│   └── mdx/                # Helpers MDX
├── messages/               # Traductions (fr.json, en.json)
└── public/                 # Assets statiques
```

## 📊 Projets (15 total)

| Catégorie | Nombre | Exemples |
|-----------|--------|----------|
| **Perso (Tools)** | 5 | DAW, System Monitor, Process Tracker... |
| **Perso (GameDev)** | 1 | Template ECS (SFML) |
| **École** | 7 | Game Engine, Physics, SIMD, Audio... |
| **Travail** | 2 | LLM Automation, Hype (privés) |

## ✨ Ajouter un Projet

Créer un fichier `.mdx` dans `content/projects/` :

```mdx
---
title: "Nom du Projet"
description: "Description courte"
date: "2025-11-27"
category: "école"
tags: ["C++", "OpenGL"]
featured: true
status: "terminé"
github: "https://github.com/user/repo"
thumbnail: "/images/projects/thumb.jpg"
gallery: []
---

# Contenu du projet

Markdown + composants React ici...
```

Le projet apparaîtra automatiquement sur la page `/projects`.

## 🎨 Features

- **Dark mode** par défaut
- **Filtres dynamiques** : année, catégorie, tags
- **Animations fluides** (Framer Motion)
- **i18n** : Français + Anglais
- **Responsive** : Mobile-first
- **SEO optimisé** : Métadonnées dynamiques

## 📝 Commandes Utiles

```bash
# Ajouter un composant Shadcn/UI
pnpm dlx shadcn@latest add [component-name]

# Linter
pnpm lint

# Typecheck
pnpm exec tsc --noEmit
```

## 🔗 Liens

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Shadcn/UI Components](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

## 📄 Licence

Privé - Tous droits réservés
