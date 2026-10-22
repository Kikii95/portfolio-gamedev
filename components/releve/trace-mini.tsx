import type { Etape } from '@/lib/releve/types';

export function TraceMini({ etapes }: { etapes: Etape[] }) {
  return (
    <span className="trace-mini" aria-hidden="true">
      {etapes.map((e, i) => (
        <i key={`${e.heure}-${i}`} className={`m ${e.type}`} style={{ ['--i' as string]: i }} />
      ))}
    </span>
  );
}
