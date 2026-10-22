import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import type { Realisation } from '@/lib/releve/types';
import { chemin } from '@/lib/releve/chemin';
import { FilExecution } from './fil-execution';
import { RecuLivraison } from './recu-livraison';
import { PieceJustificative } from './piece-justificative';

export function EntreeRealisation({ realisation, rang }: { realisation: Realisation; rang: number }) {
  const t = useTranslations('releve');
  const locale = useLocale();
  const piece = realisation.pieces[0];
  const numero = String(rang + 1).padStart(2, '0');
  const enCours = realisation.etapes.findIndex((e) => e.type === 'attente');
  const fiche = chemin(locale, `/realisations/${realisation.slug}`);

  return (
    <article className={rang === 0 ? 'entree premiere' : 'entree'} aria-labelledby={`r-${realisation.slug}`}>
      <header className="entree-tete">
        <p className="entree-meta">
          <span className="numero">{numero}</span>
          <span className="etat service">{realisation.statut}</span>
          <span>{realisation.periode}</span>
        </p>
        <h3 id={`r-${realisation.slug}`}>
          <Link href={fiche}>{realisation.titre}</Link>
        </h3>
        <p className="chapo">{realisation.accroche}</p>
        <RecuLivraison recu={realisation.recu} statut={realisation.statut} compact />
      </header>
      <div className="entree-trace">
        {rang === 0 ? (
          <>
            <p className="sous-titre">{t('realisations.deroule')}</p>
            <FilExecution etapes={realisation.etapes} enCours={enCours} />
          </>
        ) : (
          <details className="deroule">
            <summary>
              <span>{t('realisations.voirDeroule')}</span>
              <span className="resume">{t('realisations.resume', { etapes: realisation.etapes.length, portes: realisation.etapes.filter((e) => e.type === 'attente').length, heure: realisation.etapes.findLast((e) => e.type === 'livre')?.heure ?? '' })}</span>
            </summary>
            <FilExecution etapes={realisation.etapes} enCours={enCours} />
          </details>
        )}
        <Link className="bouton trait" href={fiche}>
          {t('realisations.lire')} →
        </Link>
      </div>
      <div className="entree-preuves">
        {piece && <PieceJustificative piece={piece} libelleLecture={t('piece.lire')} />}
      </div>
    </article>
  );
}
