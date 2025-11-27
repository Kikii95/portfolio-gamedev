# Portfolio GameDev

Portfolio moderne pour développeur de jeux vidéo, construit avec Next.js 14 et Shadcn/UI.

## 🎯 Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : TailwindCSS + Shadcn/UI
- **Contenu** : MDX (Markdown + JSX)
- **Déploiement** : Vercel

## 🚀 Démarrage Rapide

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build

# Démarrage production
npm start
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## 📁 Structure Projet

```
portfolio-gamedev/
├── app/                    # Pages Next.js (App Router)
├── components/             # Composants React réutilisables
│   ├── ui/                 # Composants Shadcn/UI
│   └── project-card.tsx    # Card projet personnalisée
├── content/                # Contenu MDX
│   └── projects/           # Projets (1 fichier .mdx = 1 projet)
├── lib/                    # Utilitaires
│   └── mdx/                # Helpers MDX
└── public/                 # Assets statiques
```

## ✨ Ajouter un Projet

Créer un fichier `.mdx` dans `content/projects/` :

```mdx
---
title: "Nom du Projet"
description: "Description courte"
date: "2025-11-27"
category: "école"
tags: ["C++", "Unity"]
featured: true
github: "https://github.com/user/repo"
thumbnail: "/images/projects/thumb.jpg"
---

# Contenu du projet

Markdown + composants React ici...
```

Le projet apparaîtra automatiquement sur la page d'accueil.

## 🎨 Design System

Utilise Shadcn/UI pour les composants :
- Dark mode par défaut
- Accessible (WCAG AA)
- Composants copiés dans le code → 100% customisables

## 📝 Commandes Utiles

```bash
# Ajouter un composant Shadcn/UI
npx shadcn@latest add [component-name]

# Linter
npm run lint

# Typecheck
npx tsc --noEmit
```

## 🔗 Liens

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn/UI Components](https://ui.shadcn.com)
- [TailwindCSS](https://tailwindcss.com)

## 📄 Licence

Privé - Tous droits réservés
