# Direction artistique — volet « Automatisation & IA »

> Établie le 22/10/2026 (refonte `/da`), à partir de trois analyses indépendantes (lecteur, recruteur, designer
> produit) et des captures de l'origine (`~/projects/perso/wt-da/_captures/portfolio-gamedev/origine/`, tag `da-origine`).
> Le volet « jeu vidéo & moteurs » garde son identité d'origine (noir, rouge) sous `/jeu` : les deux volets ne se
> mélangent pas.

## 0. Fiche cible

- **Ce qu'est le site** (convergence des 3 analyses) : une **preuve d'exploitation**. Pas une vitrine de projets :
  le relevé de systèmes qui tournent déjà seuls, chez des clients ou pour des proches, avec un humain qui garde la main.
- **Pour qui** : d'abord un recruteur ou un RH qui ouvre le lien depuis un mail de candidature, **sur téléphone, 30 à
  90 secondes** ; ensuite un manager ops / RevOps ou un dirigeant de PME, **sur PC, 3 à 5 minutes**, la veille d'un
  entretien. Lumière du jour, bureau ou transports.
- **Registre** : bureautique / métier → **fond clair**, net, lisible longtemps ; une énergie calme (« ça tourne, c'est
  sous contrôle »), jamais l'effet « waouh IA ».
- **Affordances de l'origine à garder** : bilingue FR/EN, fiches projet en MDX avec galerie image/vidéo, statut du
  projet (actif, pause…), lien vers la démo en ligne, photo portrait.

## 1. Le principe : un relevé d'exécution signé, pas une galerie de projets

Une automatisation qui tourne laisse une trace : un déclencheur horodaté, des étapes qui s'enchaînent, parfois un feu
vert humain, puis un résultat livré. C'est ce relevé que le site montre. Les captures et les vidéos sont les **pièces
justificatives** du relevé, pas des illustrations.

Trois choses le caractérisent, et le site doit les reprendre littéralement :
1. **Tout est horodaté et ordonné** — chaque réalisation se lit de haut en bas comme un fil d'exécution :
   déclencheur → étapes → feu vert → résultat. Les heures et les durées sont en chasse fixe.
2. **L'humain garde la main** — l'étape de validation (« Vas-y » / « Annuler » sur Telegram) est un objet visible et
   cliquable, pas une mention dans un paragraphe.
3. **Chaque affirmation a sa preuve** — un résultat est toujours accompagné de sa capture, de sa vidéo ou de son lien
   vivant. Une case sans preuve ne s'affiche pas (fini les vignettes vides `</>`).

La règle de contrôle : **si une page ressemble à un template de portfolio de développeur (grille de cartes avec
vignette + badges techno, type « Vercel portfolio starter ») ou à l'éditeur sombre de n8n, elle est ratée.**

## 2. Structure de page

| Élément | Traitement |
| --- | --- |
| Fond | Papier de relevé : blanc cassé froid, un filet vertical fin à gauche (la « marge de saisie ») où s'alignent les heures |
| Marges / grille | Colonne de lecture `min(68ch, 100%)` ; à droite (≥ 64em) une colonne « pièces » pour captures et vidéos |
| Titre | Grotesque éditoriale, sans couleur ni dégradé ; l'heure ou le statut à gauche dans la marge, jamais une étiquette mono au-dessus |
| Bloc | Une **étape** : ligne d'heure, verbe d'action, détail, pièce justificative ; séparées par le trait du fil, pas par des cartes |
| Séparateur | Le fil d'exécution lui-même (trait vertical continu avec pastilles) ; ailleurs un filet de 1 px |
| Navigation | Barre haute discrète : nom, « Réalisations », « À propos », « Contact », bascule FR/EN, et l'aiguillage « Atelier jeu vidéo → » |

**Voix** : française, directe, au passé composé ou au présent d'exploitation (« reçoit », « note », « prépare »,
« attend ton feu vert », « a livré »). Des verbes et des chiffres, pas d'adjectifs (« innovant », « passionné »,
« dynamique » interdits). Les noms d'outils (n8n, Claude, API France Travail) apparaissent **après** le bénéfice, jamais
en titre. Aucun nom ni chiffre de client réel DataDawn (mémoire « zéro donnée forensique ») : « un cabinet de gestion
locative », « une PME du BTP ».

### 2.1 Responsive : la même DA de 390 px à la 4K

Aucune valeur absolue de mise en page : `rem`/`ch`/`%`/`cqi`, `clamp()`, grilles `minmax()`/`auto-fit`, ruptures en
`em`. Seuls filets et ombres en px (1-2 px).

| Largeur | Ce que fait la page |
| --- | --- |
| Mobile 390-430 | Une colonne : heure au-dessus de l'étape (la marge se replie en ligne), pièces sous leur étape, pleine largeur ; carte « feu vert » collante en bas d'une fiche le temps d'une démo |
| PC HD 1366 | Marge d'heures à gauche (`8ch`), texte `min(60ch)`, pièces à droite en colonne `minmax(22rem, 1fr)` |
| PC Full HD 1920 | Idem, pièces plus grandes ; le hero montre le relevé « ce matin » à côté du titre |
| PC 2K 2560 | Échelle fluide : la racine grandit (`clamp`), aucune colonne n'est figée ; la pièce principale d'une fiche passe à 2/5 de la largeur |
| PC 4K 3840 | Même composition qu'en 2K à l'échelle ; contenu ≥ 60 % de la largeur (pas d'îlot) |

- **Échelle fluide** : `html { font-size: clamp(1rem, 0.35vw + 0.85rem, 1.6rem) }`.
- **Réglages utilisateur** : bascule FR/EN (longueurs de libellés), `prefers-reduced-motion`.
- Barre haute : sur une ligne ≥ 48em ; en dessous, nom + menu, l'aiguillage jeu vidéo passe dans le menu.

## 3. Couleurs

### 3.1 Sémantique verrouillée

| Couleur | Sens | Origine dans le sujet |
| --- | --- | --- |
| Vert feu vert `--feu-vert` | **validé / livré / en service** | le bouton « Vas-y », la ligne de statut « en service » |
| Ambre `--attente` | **en attente d'une décision humaine** | la notification qui attend ton feu vert |
| Bleu signal `--declencheur` | **déclencheur** (événement entrant : mail, offre, horaire) | le webhook, le cron, le message qui arrive |
| Brique `--reprise` | **erreur gérée / reprise** (« ce qui casse et comment c'est géré ») | la branche d'erreur d'un workflow |
| Graphite `--encre` | texte, étapes automatiques | l'encre du relevé |

Dans tout contexte d'état, ces teintes ne veulent dire que ça. Aucune autre couleur vive. Le rouge `#E10600` de
l'origine n'existe plus sur ce volet (il appartient à l'atelier jeu vidéo).

### 3.2 Tokens

```css
:root {
  /* papier du relevé */
  --papier: #F5F6F3;
  --papier-pli: #ECEEE9;
  --carte: #FFFFFF;
  --filet: #D6D9D2;
  --marge: #C9CEC4;
  /* encre */
  --encre: #1C211F;
  --encre-douce: #4B524E;
  --encre-pale: #646B66;   /* #6F7671 à l'origine : foncé pour tenir 4,5:1 sur papier */
  /* sémantique (§3.1) */
  --feu-vert: #12804F;
  --feu-vert-fond: #E3F2EA;
  --attente: #A86400;
  --attente-fond: #FBF0DC;
  --declencheur: #1E5FB4;
  --declencheur-fond: #E4EDF8;
  --reprise: #B23A26;
  --reprise-fond: #F8E6E2;
}
```
Clair = référence. Un thème sombre existe depuis le 22/10/2026 (demande de Killian) : § 3.3.

### 3.3 Relevé de nuit (thème sombre)

Le même relevé, lu de nuit : papier graphite, encres éclaircies, **même sémantique** (§ 3.1). Ce n'est ni l'éditeur
sombre de n8n ni le noir et rouge de l'atelier jeu : pas de noir pur, pas de néon, pas de lueur.
Suit `prefers-color-scheme` ; le bouton de l'en-tête force clair ou sombre (`html[data-releve]`, retenu dans
`localStorage`, posé avant le premier rendu).

| Token | Sombre |
| --- | --- |
| `--papier` / `--papier-pli` / `--carte` | #121614 / #181D1B / #1B201E |
| `--filet` / `--marge` | #2C3430 / #3A433E |
| `--encre` / `--encre-douce` / `--encre-pale` | #E6EAE7 / #B4BCB7 / #8C9690 |
| `--feu-vert` / `--attente` / `--declencheur` / `--reprise` | #45C487 / #E3A443 / #74A8F2 / #F0806A |
| fonds sémantiques | #173324 / #36290F / #182B47 / #3B1F19 |
| `--sur-accent` (texte sur bouton vert) | #0C1410 |
| pied de page | #0B0E0D, filet en tête |

Contraste ≥ 4,5:1 sur `--papier` sombre pour toutes les encres et sémantiques. Les pièces justificatives (captures)
restent telles quelles : ce sont des documents agrafés, pas de l'interface.
Contraste texte ≥ 4,5:1 sur `--papier` pour `--encre`, `--encre-douce`, `--encre-pale` et chaque sémantique.
Pulsation de l'étape en cours : halo `--feu-vert` alpha 0 → 0,28, rayon ≤ 0,6rem.

### 3.4 Trois portes, trois accents (22/10/2026)

Un seul site, une seule DA ; chaque section a son **accent de structure** (`--section`, `styles/sections.css`). Il teint
surtitres, filets tracés, numéros de famille, liens, rubrique active de l'en-tête et sélection. **Jamais un état** :
« en service » reste vert partout, l'erreur reprise reste brique.

| Section | Rôle | Clair | Sombre |
|---|---|---|---|
| `/` Automatisation & IA | la page des candidatures | `#12804F` (feu vert) | `#45C487` |
| `/projets` Projets perso | ce que j'ai construit hors école | `#5B3FB8` violet encre | `#A894F5` |
| `/ecole` École & gamedev | Bachelor, moteurs, Unity | `#C8143C` carmin (rappel de l'atelier d'origine, plus rosé que la brique) | `#FF5C7A` |

Activation : `data-section="perso|ecole"` sur le conteneur de la page, lu par `.releve-site:has(...)`.
Un projet sans média reçoit un **cartouche** : bloc typographique (techno principale en gros, année, pile d'outils)
hachuré à l'accent de la section, à la place d'une vignette vide.

## 4. Typographie

| Rôle | Police | Pourquoi celle-ci pour ce sujet |
| --- | --- | --- |
| Titres et corps | **Schibsted Grotesk** (400-800) | grotesque de presse : se lit comme un compte rendu factuel, sérieuse sans être corporate |
| Heures, durées, noms d'étape, chiffres | **IBM Plex Mono** (400-600) | la police des journaux d'exécution ; chiffres tabulaires pour aligner heures et durées |

Chargées via `next/font/google` (fichiers servis par le site). Jamais Inter, Geist ni Space Grotesk sur ce volet.

## 5. Composants signature

| Composant | Ce qu'il reproduit | Piste technique |
| --- | --- | --- |
| **Fil d'exécution** | le relevé d'une exécution : pastille + heure + verbe + détail, trait vertical continu | `<ol>` sémantique, trait en `::before`, pastille colorée selon l'étape (§3.1) ; une étape s'ouvre sur sa pièce |
| **Carte feu vert** | la notification Telegram « Vas-y / Annuler » | bouton réel ; « Vas-y » lance la vidéo de démo de la fiche et tamponne « validé 08:02 » |
| **Reçu de livraison** | la preuve de livraison : ce qui a été livré, pour qui (anonymisé), depuis quand, chiffre | bloc à bord perforé (masque CSS en dents), tampon « en service » |
| **Pièce justificative** | une capture ou une vidéo agrafée au relevé, légendée avec l'heure et la source | `<figure>` + cadre d'écran, vidéo sans lecture auto (poster + bouton), plein écran au clic |
| **Relevé du matin** (hero) | le journal des routines qui ont tourné : « 08:00 JobHunter · offres collectées » | lignes réelles, issues des vrais logs (sans donnée perso), qui s'écrivent une à une |
| **Schéma de flux** | le workflow réel (nœuds n8n / étapes) | SVG généré depuis le JSON du workflow, paquets qui circulent sur les arêtes |
| **Fiche d'intervention** (en-tête de cas) | « Demande · Intervention · Résultat » | trois colonnes en grille, repliées en pile sur mobile |
| **Aiguillage** | le passage vers l'atelier jeu vidéo | lien-bascule dans la barre ; la page d'arrivée reprend le noir et rouge d'origine |

## 6. Effets et mouvement (au maximum, dans la matière du sujet)

| Effet | Lien avec l'objet réel | Recette | Où |
| --- | --- | --- | --- |
| Le fil se trace | une exécution qui progresse | `stroke-dashoffset`/`scaleY` du trait lié au défilement, 900 ms `cubic-bezier(.2,.7,.2,1)` par étape | fil d'exécution |
| L'étape en cours pulse | le nœud actif d'un workflow | halo `box-shadow` → `opacity` d'un pseudo-élément, 1,6 s, boucle `ease-in-out` | étape active, hero |
| Le relevé s'écrit | les lignes de log qui arrivent | chaque ligne `opacity` + `translateY(0.4em)` en 260 ms, décalage 140 ms, heure qui défile en chiffres | hero |
| Le feu vert est donné | appuyer sur « Vas-y » | bouton `scale(.96)` 90 ms, puis tampon `scale(1.4→1) rotate(-8deg)` 320 ms, puis la vidéo s'ouvre | carte feu vert |
| Le reçu tombe | la preuve de livraison imprimée | `translateY(-1.5em)` + `clip-path` de haut en bas, 520 ms, à l'entrée dans l'écran | reçu |
| Les paquets circulent | les données qui transitent | petits points sur `offset-path` des arêtes, 2,4 s en boucle, décalés | schéma de flux |
| La pièce s'agrafe | la capture jointe au dossier | `rotate(-1.2deg → 0)` + ombre qui se pose, 300 ms | pièces justificatives |
| Le compteur de service | depuis combien de temps ça tourne | chiffres qui roulent (`translateY` par chiffre), 700 ms | reçus, hero |

Tout est coupé sous `prefers-reduced-motion` : le relevé apparaît complet, fil tracé, aucune boucle. Page complète au
repos ; seuls `opacity`, `transform`, `clip-path`, `stroke-dashoffset` sont animés.

## 7. Illustrations et icônes

Pas de set d'icônes générique. Les seuls pictogrammes sont les **pastilles d'étape** (cercle plein = automatique,
cercle bleu = déclencheur, losange ambre = attente humaine, coche verte = livré, triangle brique = reprise), dessinés
en SVG maison. Le reste, ce sont les vraies captures. État vide : une étape « pièce en cours de tournage » plutôt qu'une
vignette factice — et jamais affichée en production.

## 8. Ce qu'il ne faut pas faire

- Une vignette vide ou un placeholder `</>` : une réalisation sans preuve ne se publie pas.
- Une vidéo qui démarre seule avec le son, ou sans poster.
- Le jeu vidéo ou le C++ en premier sur ce volet ; le rouge `#E10600` ou le noir d'origine ici.
- Un jargon d'outil en titre (« Workflow n8n + Claude API ») au lieu du bénéfice.
- Un nom, un chiffre ou un document d'un client DataDawn réel ; une donnée personnelle (mail, téléphone d'un proche,
  offres nominatives) dans une capture.
- Les moules de Killian : kit shadcn d'origine (blanc pur + slate + Geist + lucide), dashboard dev sombre néon, moule
  maison noir bleuté + cyan ; et les esthétiques IA : crème + serif + terracotta, dégradé violet, étiquette mono en
  capitales au-dessus des titres, un seul mot coloré dans le H1, glassmorphism, carte à liseré gauche coloré.
- Des badges techno en grappe sur chaque carte (le moule « portfolio dev »).

## Liens

- Origine : tag `da-origine`, captures `~/projects/perso/wt-da/_captures/portfolio-gamedev/origine/`
- Design System : https://claude.ai/artifact/6b5kmDyXJvsx4ti6wbiFiN
- Canevas : https://claude.ai/artifact/4zTi9rWmBasYi7z9M4hU4p (variante retenue par le juge : A « le relevé du matin », 43/50, avec la ligne de poste et les chiffres-preuves de B, la formule « L'IA prépare. Vous validez. Ça part. » de C en titre de la section méthode)
- Planche d'évolution : https://claude.ai/artifact/DCNU5T5ioLj9oF5ujiE5Nj
