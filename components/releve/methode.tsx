import { useTranslations } from 'next-intl';
import type { Etape, TypeEtape } from '@/lib/releve/types';
import { CarteFeuVert } from './carte-feu-vert';
import { FilExecution } from './fil-execution';

type LigneMethode = [type: TypeEtape, verbe: string, detail: string];

const HEURES = ['09:00', '09:00', '09:00', '09:01', '—'];

export function Methode() {
  const t = useTranslations('releve.methode');
  const etapes: Etape[] = (t.raw('etapes') as LigneMethode[]).map(([type, verbe, detail], i) => ({
    heure: HEURES[i] ?? '',
    type,
    verbe,
    detail,
  }));

  return (
    <section className="methode cadre" id="methode" aria-labelledby="titre-methode">
      <div className="methode-texte">
        <h2 id="titre-methode">{t('titre')}</h2>
        <p className="chapo">{t('chapo')}</p>
        <CarteFeuVert />
      </div>
      <FilExecution etapes={etapes} enCours={2} />
    </section>
  );
}
