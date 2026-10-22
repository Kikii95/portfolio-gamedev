# Handoff — « La trace de production » (refonte depuis zéro, 22/10/2026)

DA : `docs/direction-artistique.md`. Tokens, composants et livre de marque : Design System
https://claude.ai/artifact/6b5kmDyXJvsx4ti6wbiFiN (version 1792651785-793b). Variantes : canevas
https://claude.ai/artifact/4zTi9rWmBasYi7z9M4hU4p, rangée « Depuis zéro ».

## Variante retenue

**B — Le tableau de service** (juge : B 49/60, A 47, C 47, version en ligne 26), avec trois emprunts :
la phrase de C « L'IA prépare. Vous validez. Ça part. » en promesse sous le poste ; la porte de validation de C plus
bas (section Méthode), boutons qui ne concurrencent pas le CV ; la trace de A (segment ambré hachuré = une personne
valide) en miniature dans chaque ligne du tableau. Légendes ≥ 0,8 rem, métadonnées ≥ 4,5:1.

## Fidélité visée

Haute pour les tokens, polices et composants signature (copie exacte du DS) ; la mise en page s'adapte de 390 px à la 4K.

## Écrans

| Écran | But | De haut en bas |
| --- | --- | --- |
| `/` | le recruteur trouve tout en 5 s | nav (nom, liens, FR/EN, thème, CV) → hero : H1 poste, promesse, ligne de disponibilité, CV + contact ; à droite (mobile : dessous) le **tableau de service** (4 systèmes : nom, chiffre, légende, trace miniature, lien vers la fiche) → Réalisations (rapports : état, période, titre, accroche, trace de passage, écran de contrôle, rapport chiffré) → Méthode (porte de validation, trace type, journal de la nuit) → Aussi construit → Parcours → Contact |
| `/realisations/[slug]` | la preuve détaillée | retour → en-tête (état, période, titre, accroche, rôle, outils) + rapport → Demande / Intervention / Résultat → trace complète → écrans de contrôle → corps → suivante |
| `/projets` | l'étendue (atelier, cuivre) | en-tête → familles : rangées du **registre d'atelier** (état, titre, phrase, outils, liens, « Tout le détail ») ; écran de contrôle à droite quand il y a une vidéo → Laboratoire |
| `/ecole` | l'archive (lilas, en retrait) | en-tête → **frise de cursus** : rangées année · titre · description · outils · état · « Tout le détail » |
| Fenêtre « Tout le détail » | lire sans quitter la page | **inspecteur** : tiroir à droite (≥ 48 em, `min(100%, 46rem)`), plein écran sur mobile |

## Animations

| Élément | Propriété | Durée | Courbe |
| --- | --- | --- | --- |
| Segments de trace | `transform: scaleX` | 520 ms, +90 ms/étape | `cubic-bezier(.2,.7,.2,1)`, au défilement |
| Segment / porte en attente | `outline-color`, `border-color` | 2,4 s, infini | `ease-in-out` |
| Validation (Vas-y) | coche `stroke-dashoffset`, bandeau ambre → vert | 360 ms | `ease-out` |
| Journal | `opacity`, `translateY` | 260 ms, +110 ms/ligne | `ease-out` |
| Lueur d'écran | `opacity` 0,8 → 1 | 300 ms | `ease` |
| Point de disponibilité | `box-shadow` (une onde) | 1,8 s, une fois | `ease-out` |
| Inspecteur | `translateX(100% → 0)` | 380 ms | `cubic-bezier(.2,.7,.2,1)` |
| Indicateur de nav | `transform`, largeur | 380 ms | idem |

## Plafonds

Halo ≤ 0,18 ; aucune lueur sur du texte ; bordures colorées ≤ 2 px ; corps ≥ 7:1, métadonnées ≥ 4,5:1.

## Emblème

`design/embleme/zero-c.svg` (« Le K d'exploitation », juge 41/60) : fût clair, bras ambre (l'IA prépare), bras vert
(une personne valide). Décliné dans `public/` (favicon, apple-touch, 192/512, maskable).

## Placeholders

Aucun : tout le contenu vient de `lib/releve/*`, `content/`, `messages/`, `public/medias`.
