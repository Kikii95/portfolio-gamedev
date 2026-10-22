import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import type { Etape, Realisation } from '@/lib/releve/types';
import { chemin } from '@/lib/releve/chemin';
import { PROJETS } from '@/lib/releve/projets';

const JALONS: Etape['type'][] = ['declencheur', 'attente', 'livre'];

function Jalons({ etapes }: { etapes: Etape[] }) {
  const reperes = JALONS.map((type) => etapes.find((e) => e.type === type)).filter((e): e is Etape => Boolean(e));
  return (
    <span className="jalons" aria-hidden="true">
      {reperes.map((e) => (
        <span key={e.type} className={`j ${e.type}`}>
          {e.heure}
        </span>
      ))}
    </span>
  );
}

function nomCourt(r: Realisation): string {
  return PROJETS.find((p) => p.fiche === r.slug)?.titre ?? r.titre;
}

export function TableauService({ realisations }: { realisations: Realisation[] }) {
  const t = useTranslations('releve.tableau');
  const locale = useLocale();
  const n = realisations.length;

  return (
    <section className="tableau" aria-labelledby="titre-tableau">
      <div className="tableau-tete">
        <h2 id="titre-tableau">{t('titre')}</h2>
        <span className="etat service">{`${n}/${n}`}</span>
      </div>
      <ul className="tableau-liste">
        {realisations.map((r, i) => (
          <li key={r.slug} style={{ ['--i' as string]: i }}>
            <Link className="systeme" href={chemin(locale, `/realisations/${r.slug}`)}>
              <span className="nom">{nomCourt(r)}</span>
              <span className="chiffre">{r.recu.chiffre}</span>
              <span className="legende">{r.recu.legende}</span>
              <span className="heure">{t('passage', { heure: r.etapes[0]?.heure ?? '' })}</span>
              <Jalons etapes={r.etapes} />
              {r.etapes.some((e) => e.type === 'attente') && <span className="humain">◆ {t('attente')}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
