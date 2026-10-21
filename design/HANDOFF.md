# Handoff — Portfolio « Automatisation & IA »

Source : `docs/direction-artistique.md`. Maquette : canevas, variante A + greffes (voir § Liens de la DA).
Fidélité visée : haute sur tokens, polices et composants signature ; la mise en page s'adapte de 390 px à la 4K.

## Routes
| Route | Contenu |
|---|---|
| `/` (`/en`) | relevé : hero + journal, chiffres-preuves, réalisations, méthode, aussi construit, parcours, contact |
| `/realisations/<slug>` | fiche d'intervention : tête + reçu, Demande / Intervention / Résultat, schéma de flux, fil complet, pièces, texte |
| `/jeu`, `/jeu/projects/…` | atelier jeu vidéo d'origine (noir et rouge), inchangé ; anciennes URL redirigées |

## Tokens
Couleurs : `app/[locale]/(releve)/styles/tokens.css` (copie exacte du Design System, `encre-pale` foncé à #646B66).
Racine fluide : `html { font-size: clamp(1rem, 0.35vw + 0.85rem, 1.6rem) }` sur les pages du relevé seulement.
Gouttière `clamp(1rem, 4vw, 3rem)`, largeur `min(100% - 2 × gouttière, 78rem)`. Rayons : pièce 0,375rem, bouton 0,5rem.
Polices : Schibsted Grotesk 400-800 (`--font-grotesk`), IBM Plex Mono 400-600 (`--font-releve-mono`), via next/font.

## Typographie par rôle
h1 `clamp(2.1rem, 4.2vw + .6rem, 4.1rem)` 800 · h2 `clamp(1.6rem, 2.2vw + .7rem, 2.6rem)` 750 · h3 `clamp(1.2rem, .8vw + .9rem, 1.55rem)` 700 ·
chapô `clamp(1.05rem, .4vw + .95rem, 1.25rem)` encre-douce · heures, journal, chiffres : mono tabulaire.

## Écran d'accueil (de haut en bas)
1. En-tête collant : signature, ancres, atelier jeu vidéo, langue, CV (menu replié sous 60em).
2. Hero 2 colonnes ≥ 60em : statut vert, titre, ligne de poste (poste · dispo · lieu · contrat), chapô, 2 boutons | journal du matin.
3. Chiffres-preuves : une rangée, filets pointillés, pas de cartes.
4. Réalisations : une entrée par cas, alternée gauche/droite ≥ 60em : méta, titre, accroche, fil (5 étapes), lien | pièce + reçu.
5. Méthode (sur carte) : titre-formule, chapô, carte feu vert interactive | fil générique.
6. Aussi construit : pièces agrafées + titre + phrase (n'apparaît que si des médias existent).
7. Parcours : liste datée, outils en ligne.
8. Pied encre : contact, liens, aiguillage vers l'atelier.

## Animations
| Effet | Durée / courbe | Propriété |
|---|---|---|
| Fil qui se trace | lié au défilement (`view()`), sinon 1,6 s `cubic-bezier(.2,.7,.2,1)` | `transform: scaleY` |
| Étape en attente qui pulse | 1,6 s ease-in-out, ∞, halo ≤ 0,28 | `opacity` |
| Journal ligne à ligne | 280 ms ease-out, +160 ms par ligne | `opacity`, `transform` |
| Tampon « validé » | 320 ms courbe maison | `opacity`, `transform: scale` |
| Reçu qui tombe | 560 ms courbe maison | `clip-path`, `transform` |
| Pièce agrafée | au défilement ; survol 260 ms se redresse | `transform` |
| Paquets sur le schéma | 4,2 s, 3 paquets décalés | `animateMotion` |
| Voyant « en service » | 2,4 s ease-out ∞ | `box-shadow` |
Tout est coupé sous `prefers-reduced-motion` ; la page est complète au repos.

## Placeholders
Aucun. Une réalisation sans média n'affiche pas de pièce (le reçu et le fil portent la preuve).
