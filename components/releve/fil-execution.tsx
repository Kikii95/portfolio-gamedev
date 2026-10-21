import type { Etape } from '@/lib/releve/types';

const PASTILLE: Record<Etape['type'], string> = {
  declencheur: 'pastille declencheur',
  auto: 'pastille',
  attente: 'pastille attente',
  livre: 'pastille livre',
  reprise: 'pastille reprise',
};

interface FilExecutionProps {
  etapes: Etape[];
  enCours?: number;
}

export function FilExecution({ etapes, enCours }: FilExecutionProps) {
  return (
    <ol className="fil">
      <span className="trace" aria-hidden="true" />
      {etapes.map((etape, i) => (
        <li key={`${etape.heure}-${i}`} className={i === enCours ? 'etape en-cours' : 'etape'}>
          <span className="heure">{etape.heure}</span>
          <span className={PASTILLE[etape.type]} aria-hidden="true" />
          <div>
            <div className="verbe">{etape.verbe}</div>
            {(etape.etiquette || etape.detail) && (
              <div className="detail">
                {etape.etiquette && <span className={`etiquette ${etape.type}`}>{etape.etiquette}</span>}
                {etape.detail}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
