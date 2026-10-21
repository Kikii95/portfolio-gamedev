import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import type { Realisation } from '@/lib/releve/types';
import { chemin } from '@/lib/releve/chemin';
import { FilExecution } from './fil-execution';
import { RecuLivraison } from './recu-livraison';
import { PieceJustificative } from './piece-justificative';

const ETAPES_APERCU = 4;

export function EntreeRealisation({ realisation, rang }: { realisation: Realisation; rang: number }) {
  const t = useTranslations('releve');
  const locale = useLocale();
  const piece = realisation.pieces[0];
  const numero = String(rang + 1).padStart(2, '0');
  const enCours = realisation.etapes.findIndex((e) => e.type === 'attente');

  return (
    <article className={rang % 2 ? 'entree inverse' : 'entree'} aria-labelledby={`r-${realisation.slug}`}>
      <div className="entree-texte">
        <p className="entree-meta mono">
          <span>{numero}</span>
          <span className="etiquette livre">{realisation.statut}</span>
          <span>{realisation.periode}</span>
        </p>
        <h3 id={`r-${realisation.slug}`}>
          <Link href={chemin(locale, `/realisations/${realisation.slug}`)}>{realisation.titre}</Link>
        </h3>
        <p className="chapo">{realisation.accroche}</p>
        <p className="sous-titre mono">{t('realisations.deroule')}</p>
        <FilExecution etapes={realisation.etapes.slice(0, ETAPES_APERCU + 1)} enCours={enCours} />
        <Link className="bouton trait" href={chemin(locale, `/realisations/${realisation.slug}`)}>
          {t('realisations.lire')} →
        </Link>
      </div>
      <div className="entree-preuves">
        {piece && <PieceJustificative piece={piece} libelleLecture={t('piece.lire')} penche={rang % 2 ? 1.2 : -1.2} />}
        <RecuLivraison recu={realisation.recu} statut={realisation.statut} />
      </div>
    </article>
  );
}
