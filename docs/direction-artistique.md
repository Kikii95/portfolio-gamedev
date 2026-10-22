# Direction artistique — « La trace de production »

> Établie le 22/10/2026, refonte `/da` **depuis zéro** (branche `design/da-zero`). Point de départ : trois analyses
> indépendantes (lecteur, ancien recruteur, directeur artistique) qui n'ont vu ni le site ni l'ancienne DA, puis la
> consigne de Killian : « sombre clean tech, mais adapté à la cible ; pas de néon ; ça reste mon portfolio ».
> L'ancienne DA (« relevé d'exécution », papier clair) est conservée dans [`direction-artistique-v1.md`](direction-artistique-v1.md) :
> elle sert de repère à dépasser, pas de base.
>
> Design System : https://claude.ai/artifact/6b5kmDyXJvsx4ti6wbiFiN
> Canevas des variantes (rangée « Depuis zéro ») : https://claude.ai/artifact/4zTi9rWmBasYi7z9M4hU4p
> Planche d'évolution : https://claude.ai/artifact/DCNU5T5ioLj9oF5ujiE5Nj

## 0. Fiche cible

- **Ce qu'est le site** (convergence des 3 analyses) : **la preuve que des systèmes tournent déjà en production et
  qu'un humain les valide.** Pas une vitrine de développeur : un dossier de preuves d'exploitation, signé par celui qui
  les fait tourner.
- **Pour qui, dans l'ordre** : (1) un recruteur (consultant n8n, AI product builder, RevOps junior) qui ouvre le lien
  depuis un CV ou LinkedIn, **sur téléphone, 30 à 90 s**, en journée, au bureau ou dans les transports : il vérifie le
  poste, la disponibilité, le lieu, le contrat, une preuve chiffrée, et veut le CV en un geste. (2) Le manager ops ou
  RevOps, sur PC, 3 à 5 min, sceptique : méthode, gestion d'erreur, garde-fous. (3) Le dirigeant de PME, souvent le
  soir, méfiant envers l'IA : « est-ce qu'on garde la main ? ».
- **Registre** : outil professionnel tech, **sombre, clean, récent** (choix de Killian, la cible tolère et l'image
  l'exige), **sans néon ni gaming** (les 3 analyses). Le sombre est **ardoise neutre, pas noir pur, pas bleuté** ; le texte
  est calibré pour le plein jour sur téléphone (corps ≥ 1,0625 rem, contraste ≥ 7:1 pour le corps, ≥ 4,5:1 pour les
  métadonnées). Énergie basse à moyenne, tenue : **ce qui bouge, c'est l'état des systèmes, jamais la décoration.**
  Un thème clair issu de la même DA reste au choix (bascule), pour la lecture en plein soleil.
- **Divergence relevée** : deux analyses sur trois recommandaient un fond clair par défaut (lecture de jour, monde des
  documents). Tranché pour le sombre par la consigne de Killian, avec trois compensations : contraste renforcé, aucune
  couleur fluo, thème clair impeccable à un clic.
- **Ce qui doit rester à l'image de Killian** : un dev nocturne, à jour, qui construit des systèmes qui tournent pour de
  vrai ; un « je » direct, des chiffres vrais et modestes, des vidéos courtes de vrais écrans, le principe « l'IA
  prépare, une personne valide, c'est tracé ».
- **Premier écran mobile, dans l'ordre** (3/3 analyses) : nom + poste, la promesse, disponibilité · lieu · contrat,
  CV + contact, puis les preuves chiffrées. Le journal vient après, comme preuve, pas comme accroche.
- **Affordances à garder** : trois portes (`/`, `/projets`, `/ecole`) avec un accent par section ; indicateur de
  section sous la nav ; fenêtre « Tout le détail » ; CV PDF ; FR/EN ; bascule de thème ; vidéos sans lecture
  automatique, avec poster ; statut de chaque projet ; carte « Vas-y / Annuler » interactive.

## 1. Le principe : une trace de production, pas une vitrine

Quand un système tourne en production, l'équipe qui l'exploite ne regarde pas une galerie : elle regarde une
**trace** (chaque passage, horodaté, découpé en étapes, avec ce qui a attendu et ce qui a été livré) et une **porte de
validation** (le « Review required → Approve » d'un déploiement). C'est ce que le site montre de Killian : ses
systèmes, en train de passer, et la main humaine à l'endroit où elle compte. Les vidéos sont des **écrans de
contrôle** : on regarde la chose tourner.

Trois choses le caractérisent, et le site les reprend littéralement :
1. **Le temps est l'axe** — chaque réalisation se lit comme une trace horizontale : déclencheur → ce que l'IA fait →
   la porte humaine (un segment qui *attend*) → livré. Heures en chasse fixe, segments alignés sur une graduation.
2. **La porte de validation est un objet** — l'endroit où l'humain valide est un composant à part, cliquable, avec son
   état (en attente → validé à 09:01) ; jamais une phrase dans un paragraphe.
3. **L'état fait la couleur** — rien n'est coloré pour décorer : une teinte dit « en service », « attend une
   personne », « reprise après erreur », ou la section où l'on se trouve. Le reste est en niveaux d'ardoise.

La règle de contrôle : **si une page ressemble à un template de portfolio de développeur (grille de cartes vignette +
badges techno), à l'éditeur sombre de n8n, à un dashboard Grafana néon ou à une page « IA » à dégradé violet — ou si
elle rappelle encore le relevé papier — elle est ratée.**

## 2. Structure de page

| Élément | Traitement |
| --- | --- |
| Fond | Ardoise `--fond` uni ; une **graduation** discrète (filets verticaux tous les `8rem`, alpha 4 %) dans le hero et les traces seulement, comme l'axe du temps d'une trace |
| Marges / grille | Conteneur `min(100% - 2 × gouttière, 88rem)` ; grilles en `fr`/`minmax()` ; colonne de lecture `min(64ch, 100%)` |
| Titre | Instrument Sans condensée (`wdth` 82), graisse 600, blanc cassé ; jamais de mot coloré, jamais d'étiquette mono en capitales au-dessus |
| Bloc | Le **plan** : surface `--plan` à peine plus claire, filet 1 px `--filet`, rayon `0.875rem` ; une réalisation = un plan large, pas une carte de grille |
| Séparateur | Filet 1 px pleine largeur ; la trace elle-même entre les blocs d'une fiche |
| Navigation | Barre haute translucide (fond 82 %, flou 0,75 rem), nom à gauche, liens, langue, thème, **CV toujours visible** (même sur mobile) ; indicateur de section = trait de 2 px à l'accent de la section |

**Voix** : française, directe, au présent d'exploitation (« reçoit », « prépare », « attend ton feu vert », « a
livré »). Des verbes et des chiffres, pas d'adjectifs (« innovant », « passionné » interdits). Les noms d'outils
viennent après le bénéfice. Zéro nom ni chiffre réel de client DataDawn (« un cabinet de gestion locative », « une PME
du BTP »). Rien d'exploitable sur Home Gateway (ni URL, ni fournisseur). Aucun numéro de téléphone. Aucun lien vers un
dépôt privé.

### 2.1 Responsive : la même DA de 390 px à la 4K

Aucune valeur absolue de mise en page : `rem`/`em`/`ch`/`%`/`vw`/`dvh`, bornés par `clamp()`/`min()` ; grilles `fr`,
`minmax()`, `auto-fit` ; ruptures en `em`. Seuls filets, bordures et ombres en px (1-2 px).

| Largeur | Ce que fait la page |
| --- | --- |
| Mobile 390-430 | Une colonne. Hero : nom + poste, promesse, ligne de disponibilité, CV plein + contact, puis les 3 preuves en ligne de compteurs. Trace verticale (segments empilés, la porte humaine en surbrillance). Nav : nom, CV, menu |
| PC HD 1366 | Hero en deux colonnes (texte 1,15 fr / journal 0,85 fr). Traces horizontales. Réalisation : texte + trace à gauche, écran de contrôle à droite |
| PC Full HD 1920 | Idem, écrans plus grands ; la graduation du hero s'étend sur toute la largeur |
| PC 2K 2560 | Échelle fluide (la racine grandit) ; conteneur 88 rem à l'échelle, couvre ≥ 60 % de la largeur |
| PC 4K 3840 | Même composition qu'en 2K, à l'échelle ; aucun îlot |

- **Échelle fluide** : `html { font-size: clamp(1rem, 0.42vw + 0.8rem, 1.75rem) }`.
- **Réglages utilisateur** : thème sombre (défaut) / clair, FR/EN (libellés plus longs), `prefers-reduced-motion`.
- Barre haute : tous les liens sur une ligne ≥ 64 em ; en dessous, nom + CV + menu.

## 3. Couleurs

### 3.1 Sémantique verrouillée

| Couleur | Sens | Origine dans le sujet |
| --- | --- | --- |
| Vert sauge `--en-service` | **en service / validé / livré** | l'état « healthy » d'un service, la coche d'approbation |
| Ambre `--attente` | **attend une personne** | la porte de validation « Review required » |
| Corail `--reprise` | **erreur gérée, reprise** | le span en erreur d'une trace, rattrapé |
| Blanc cassé `--texte` | déclencheur et étapes automatiques | la trace neutre : ce qui passe seul n'a pas besoin de couleur |

Accents de **structure** (jamais un état) : ils colorent l'indicateur de section, les liens, la graduation et le
filet haut des plans de leur section.

| Section | Accent | Pourquoi |
| --- | --- | --- |
| `/` Automatisation & IA | **Glacier** `--acc-ops` | la lumière froide et précise d'un écran de supervision : le registre « production » |
| `/projets` Projets perso | **Cuivre** `--acc-atelier` | l'atelier, le fait main, la chaleur des projets du soir |
| `/ecole` École & gamedev | **Lilas** `--acc-ecole` | l'archive de formation, en retrait, datée |

### 3.2 Tokens

```css
:root, [data-theme="nuit"] {          /* référence : sombre */
  --fond: #111214;  --plan: #17181B;  --plan-haut: #1E2024;
  --filet: #2A2C31; --filet-fort: #3B3E45;
  --texte: #EEEDE9; --texte-doux: #BBB9B3; --texte-pale: #8F8D88;
  --en-service: #74C99A; --attente: #E8C063; --reprise: #EE8C74;
  --acc-ops: #A9C6F5;   --acc-atelier: #E89A6E;  --acc-ecole: #B9A9EE;
  --sur-accent: #111214;
}
[data-theme="jour"] {                  /* thème clair, même sémantique */
  --fond: #F3F3F0;  --plan: #FFFFFF;  --plan-haut: #F8F8F6;
  --filet: #DEDDD8; --filet-fort: #C9C8C2;
  --texte: #141518; --texte-doux: #44464B; --texte-pale: #62646A;
  --en-service: #1B7F4E; --attente: #8E6200; --reprise: #B5432C;
  --acc-ops: #2C5DB3;   --acc-atelier: #A9502A;  --acc-ecole: #5E4BB8;
  --sur-accent: #FFFFFF;
}
```

Plafonds : **aucun halo de plus de 0,18 d'alpha**, aucun `text-shadow` lumineux, aucune bordure colorée de plus de
2 px ; la lueur d'un écran de contrôle (≤ 0,18) est la seule lumière portée du site. Contraste corps ≥ 7:1, métadonnées
≥ 4,5:1, accents sur fond ≥ 4,5:1 dans les deux thèmes.

## 4. Typographie

| Rôle | Police | Pourquoi celle-ci pour ce sujet |
| --- | --- | --- |
| Titres | **Instrument Sans**, `wdth` 82, graisse 600 | une grotesque d'interface récente, nette, un peu étroite : le ton d'un produit logiciel, pas d'un magazine |
| Corps et interface | **Instrument Sans**, `wdth` 100, 400/500 | lisible sur téléphone en plein jour ; même famille que les titres, une seule voix |
| Heures, chiffres, états | **Martian Mono**, `wdth` 87, 400/500 | la chasse fixe des traces et des compteurs ; large et technique sans faire terminal ; réservée aux données, jamais au texte courant |

Chargement par `next/font/google` (auto-hébergé au build). Chiffres en `tabular-nums`.

## 5. Composants signature

| Composant | Ce qu'il reproduit | Piste technique |
| --- | --- | --- |
| **Ligne de disponibilité** | la ligne d'état d'un service (« ● opérationnel ») appliquée à Killian : « ● Disponible en novembre 2026 · Île-de-France · CDI ou CDD » + CV | `p.dispo` flex-wrap, point `--en-service` qui pulse une fois au chargement |
| **Trace de passage** | le waterfall d'une trace d'observabilité : une rangée par étape, un segment par étape sur l'axe, la porte humaine en segment ambré hachuré | `ol.trace` en grille `heure / libellé / piste` ; segments décalés par `--i` ; vertical sur mobile |
| **Porte de validation** | le « Review required → Approve / Reject » d'un déploiement | `CarteFeuVert` restylée : bandeau ambre « validation requise », boutons Vas-y / Annuler, état validé « ✓ validé · 09:01 » |
| **Journal de la nuit** | le flux d'événements d'une console (pas un terminal) : heure, système, état | tableau 3 colonnes, pastille d'état, lignes qui arrivent en cascade |
| **Compteurs de preuve** | les métriques d'en-tête d'un service | 3 compteurs Martian Mono, libellé dessous, filets verticaux entre eux |
| **Écran de contrôle** | la vidéo ou capture comme un écran allumé dans une pièce sombre | `figure.ecran-controle` : cadre fin, barre de titre sobre (légende · durée), lueur portée ≤ 0,18 sous l'écran |
| **Rapport de passage** | le résumé chiffré d'un run (« livré : 6 offres notées ») | `RecuLivraison` en plan haut : chiffre Martian Mono, lignes clé/valeur, statut |
| **Registre d'atelier** | la liste des services d'un tableau d'exploitation | `/projets` : rangées (statut, nom, phrase, outils, actions), écran de contrôle à côté quand il y a une vidéo ; pas de grille de cartes |
| **Frise de cursus** | une archive datée | `/ecole` : projets groupés par famille, l'année en colonne, accent lilas en retrait |
| **Inspecteur** | le panneau latéral d'un outil de dev | fenêtre « Tout le détail » en tiroir à droite (plein écran sur mobile) |

## 6. Effets et mouvement (au maximum, dans la matière du sujet)

| Effet | Lien avec l'objet réel | Recette | Où |
| --- | --- | --- | --- |
| Les segments de la trace se remplissent | un span qui s'exécute | `transform: scaleX(0→1)`, 520 ms, `cubic-bezier(.2,.7,.2,1)`, décalage 90 ms par étape, au défilement (`animation-timeline: view()`) | traces |
| La porte attend | « Review required » | contour ambre qui respire (opacité 0,35→0,8, 2,4 s, `ease-in-out`, infini) tant que rien n'est validé | porte humaine |
| Approbation | le déploiement part | au clic : la coche se trace (`stroke-dashoffset`, 360 ms), le bandeau passe de l'ambre au vert, l'heure +1 min s'inscrit | porte de validation |
| Le journal arrive | le flux d'événements | lignes `opacity/translateY`, 260 ms, cascade 110 ms | hero |
| Lumière d'écran | un écran allumé dans le noir | lueur portée (radial, alpha 0,10 → 0,18 au survol, 300 ms) | écrans de contrôle |
| Point de service | le voyant « opérationnel » | une seule onde au chargement (1,8 s), puis fixe | ligne de disponibilité |
| Indicateur de section | l'onglet actif d'une console | `transform` + largeur, 380 ms | nav |
| Inspecteur | un panneau latéral | `translateX(100%→0)`, 380 ms ; voile 300 ms | fenêtre de détail |

Coupés sous `prefers-reduced-motion` ; la page est complète au repos (segments pleins, journal entier) ;
seulement `opacity`, `transform`, `stroke-dashoffset`.

## 7. Illustrations et icônes

Pas de set d'icônes générique. Trois pictogrammes d'état dessinés en CSS : **rond** (automatique / en service),
**losange** (attend une personne), **triangle** (reprise). Flèches typographiques (→ ↗). Emblème : voir
`design/embleme/`.

## 8. Ce qu'il ne faut pas faire

- Néon, lueur colorée sur du texte, halo > 0,18, dégradé violet → bleu, orbes, particules, réseau de neurones.
- Faux terminal (vert sur noir, curseur clignotant partout, machine à écrire), scanlines, glitch.
- Codes de jeu vidéo : HUD, barres de vie, pixel, polices futuristes ; le gamedev en premier sur `/`.
- Grille de cartes vignette + badges techno, barres de compétences, mur de logos.
- L'éditeur n8n (nœuds connectés sur fond quadrillé) comme décor.
- Le papier, le tampon encré, la pièce agrafée de travers, tout objet littéral de bureau (c'était la v1).
- Une vidéo en lecture automatique, ou sans poster.
- Un nom ou chiffre réel de client DataDawn ; pour Home Gateway, une URL, un fournisseur ou un détail exploitable ;
  un numéro de téléphone ; un lien vers un dépôt privé.
- Les moules de Killian : kit shadcn (blanc + slate + Geist + lucide), dashboard dev sombre (quasi-noir + violet ou
  vert néon + JetBrains Mono partout), moule maison (noir bleuté `#0B0E14` + cyan ou indigo) ; esthétiques IA (étiquette
  mono en capitales au-dessus du titre, un mot coloré dans le H1, glassmorphism, carte à liseré gauche coloré).

## 9. Passes de code (branche design/da-zero)

Chaque passe est jugée à l'aveugle sur captures réelles (6 vues, de 390 px à la 4K, sur `/`, `/projets` et `/ecole`, plus la fenêtre « Tout le détail »), face au site en ligne. Notes sur 60, sans pénalité pour aucune passe.

| Passe | Tag | Note | Ce qui a changé |
|---|---|---|---|
| En ligne (v1) | main | 26-28 | Papier clair, pas de CV au premier écran mobile, grille de cartes sur /projets |
| 1 | da-zero-passe-1 | 41 | Sombre par défaut, tableau de service, trace, porte, journal, registre, frise, inspecteur |
| 2 | da-zero-passe-2 | 46,5 | Trace à rail et glyphes (mobile) et waterfall (bureau), compteurs 2×2 sur mobile, déroulés repliés, registre aligné en haut, « Aussi construit » en rangées |
| 3 | da-zero-passe-3 | 48 | Nom au-dessus du titre, tableau sans barres, rapport réduit à ses lignes, mono ramenée aux données, puces dans l'inspecteur |
| 4 (retenue) | da-zero-passe-4 | 48 | Jalons horodatés dans le tableau (déclenché, porte humaine, livré), déroulé 01 en pleine largeur, finitions |

Verdict du juge : « En 30 secondes sur mon téléphone, je vois quand il est dispo, où, en quel contrat, que quatre systèmes tournent vraiment avec une validation humaine, et j'ai le CV en un geste ; il me manque juste l'intitulé exact du poste. »

## Liens

- Origine de cette refonte : `main` @ `36fed22`, tag `da-zero-origine` ; en ligne : https://killian-abboud.vercel.app
- Branche : `design/da-zero` (worktree `~/projects/perso/wt-da/portfolio-zero`), tags `da-zero-passe-N`
- Captures : `~/projects/perso/wt-da/_captures/portfolio-zero/`
