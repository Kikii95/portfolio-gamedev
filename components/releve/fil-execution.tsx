import type { Etape } from '@/lib/releve/types';

const CLASSE: Record<Etape['type'], string> = {
  declencheur: 'pas declencheur',
  auto: 'pas',
  attente: 'pas attend',
  livre: 'pas livre',
  reprise: 'pas reprise',
};

interface FilExecutionProps {
  etapes: Etape[];
  enCours?: number;
}

export function FilExecution({ etapes, enCours }: FilExecutionProps) {
  return (
    <ol className="trace" style={{ ['--n' as string]: etapes.length }}>
      {etapes.map((etape, i) => (
        <li key={`${etape.heure}-${i}`} className={i === enCours ? `${CLASSE[etape.type]} en-cours` : CLASSE[etape.type]}>
          <span className="h">{etape.heure}</span>
          <span className="lib">
            <span className="verbe">{etape.verbe}</span>
            {(etape.etiquette || etape.detail) && (
              <small>
                {etape.etiquette && <span className="marque-etape">{etape.etiquette}</span>}
                {etape.detail}
              </small>
            )}
          </span>
          <span className="piste" aria-hidden="true">
            <i className="seg" style={{ ['--i' as string]: i }} />
          </span>
        </li>
      ))}
    </ol>
  );
}
