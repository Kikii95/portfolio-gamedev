import type { Etape } from '@/lib/releve/types';

const LARGEUR_NOEUD = 168;
const HAUTEUR_NOEUD = 64;
const ECART = 40;
const MARGE = 12;
const LIGNE_MAX = 22;
const DUREE_PAQUET = 4.2;

function couper(texte: string): string[] {
  const lignes: string[] = [];
  let courante = '';
  for (const mot of texte.split(' ')) {
    const essai = courante ? `${courante} ${mot}` : mot;
    if (essai.length > LIGNE_MAX && courante) {
      lignes.push(courante);
      courante = mot;
    } else {
      courante = essai;
    }
  }
  lignes.push(courante);
  return lignes.slice(0, 2).map((l, i, tab) => (i === 1 && tab.length < lignes.length ? `${l}…` : l));
}

export function SchemaFlux({ etapes, titre }: { etapes: Etape[]; titre: string }) {
  const principales = etapes.filter((e) => e.type !== 'reprise');
  const largeur = MARGE * 2 + principales.length * LARGEUR_NOEUD + (principales.length - 1) * ECART;
  const hauteur = HAUTEUR_NOEUD + MARGE * 2;
  const milieu = MARGE + HAUTEUR_NOEUD / 2;
  const chemin = `M ${MARGE + LARGEUR_NOEUD / 2} ${milieu} H ${largeur - MARGE - LARGEUR_NOEUD / 2}`;

  return (
    <svg className="schema" viewBox={`0 0 ${largeur} ${hauteur}`} role="img" aria-label={titre}>
      <path className="lien" d={chemin} />
      {principales.map((etape, i) => {
        const x = MARGE + i * (LARGEUR_NOEUD + ECART);
        return (
          <g key={`${etape.heure}-${i}`} className={`noeud ${etape.type}`} transform={`translate(${x} ${MARGE})`}>
            <rect width={LARGEUR_NOEUD} height={HAUTEUR_NOEUD} rx="6" />
            <text className="h" x="12" y="20" fontSize="11">{etape.heure}</text>
            {couper(etape.verbe).map((ligne, j) => (
              <text key={j} x="12" y={38 + j * 16} fontSize="13">{ligne}</text>
            ))}
          </g>
        );
      })}
      <g className="paquets" aria-hidden="true">
        {[0, 1, 2].map((n) => (
          <circle key={n} className="paquet" r="4">
            <animateMotion dur={`${DUREE_PAQUET}s`} begin={`-${(n * DUREE_PAQUET) / 3}s`} repeatCount="indefinite" path={chemin} />
          </circle>
        ))}
      </g>
    </svg>
  );
}
