import { useTranslations } from 'next-intl';
import type { Etape, TypeEtape } from '@/lib/releve/types';
import { CarteFeuVert } from './carte-feu-vert';
import { FilExecution } from './fil-execution';
import { JournalMatin } from './journal-matin';

type LigneMethode = [type: TypeEtape, verbe: string, detail: string];

const HEURES = ['09:00', '09:00', '09:00', '09:01', '—'];

export function Methode() {
  const t = useTranslations('releve');
  const etapes: Etape[] = (t.raw('methode.etapes') as LigneMethode[]).map(([type, verbe, detail], i) => ({
    heure: HEURES[i] ?? '',
    type,
    verbe,
    detail,
  }));

  return (
    <section className="methode cadre" id="methode" aria-labelledby="titre-methode">
      <header className="section-tete">
        <h2 id="titre-methode">{t('nav.methode')}</h2>
        <p className="chapo">{t('methode.chapo')}</p>
      </header>
      <div className="methode-grille">
        <div className="methode-porte">
          <CarteFeuVert />
          <FilExecution etapes={etapes} enCours={2} />
        </div>
        <JournalMatin />
      </div>
    </section>
  );
}
