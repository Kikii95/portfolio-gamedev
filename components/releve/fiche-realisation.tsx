import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLocale, useTranslations } from 'next-intl';
import type { Realisation } from '@/lib/releve/types';
import { chemin } from '@/lib/releve/chemin';
import { FilExecution } from './fil-execution';
import { RecuLivraison } from './recu-livraison';
import { PieceJustificative } from './piece-justificative';

interface FicheProps {
  realisation: Realisation;
  suivante: Realisation;
}

export function FicheRealisation({ realisation: r, suivante }: FicheProps) {
  const t = useTranslations('releve');
  const locale = useLocale();
  const volets = [
    ['demande', r.demande],
    ['intervention', r.intervention],
    ['resultat', r.resultat],
  ] as const;

  return (
    <article className="fiche cadre">
      <Link className="retour" href={`${chemin(locale)}#realisations`}>
        ← {t('fiche.retour')}
      </Link>
      <header className="fiche-tete">
        <div>
          <p className="entree-meta">
            <span className="etat service">{r.statut}</span>
            <span>{r.periode}</span>
          </p>
          <h1>{r.titre}</h1>
          <p className="chapo">{r.accroche}</p>
          <dl className="fiche-infos">
            <dt>{t('fiche.role')}</dt>
            <dd>{r.role}</dd>
            <dt>{t('fiche.outils')}</dt>
            <dd>{r.outils.join(' · ')}</dd>
          </dl>
          {r.liens.length > 0 && (
            <p className="fiche-liens">
              {r.liens.map((l) => (
                <a key={l.href} className="bouton trait" href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label} ↗
                </a>
              ))}
            </p>
          )}
        </div>
        <RecuLivraison recu={r.recu} statut={r.statut} />
      </header>

      <section className="intervention" aria-label={t('fiche.intervention')}>
        {volets.map(([cle, texte]) => (
          <div key={cle} className={`volet ${cle}`}>
            <h2>{t(`fiche.${cle}`)}</h2>
            <p>{texte}</p>
          </div>
        ))}
      </section>

      <section className="fiche-deroule">
        <h2>{t('realisations.deroule')}</h2>
        <FilExecution etapes={r.etapes} enCours={r.etapes.findIndex((e) => e.type === 'attente')} />
      </section>

      {r.pieces.length > 0 && (
        <section className="fiche-pieces">
          <h2>{t('realisations.pieces')}</h2>
          <div className="pieces-grille">
            {r.pieces.map((p, i) => (
              <PieceJustificative key={p.src} piece={p} libelleLecture={t('piece.lire')} prioritaire={i === 0} />
            ))}
          </div>
        </section>
      )}

      <div className="fiche-corps">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{r.corps}</ReactMarkdown>
      </div>

      <Link className="suivante" href={chemin(locale, `/realisations/${suivante.slug}`)}>
        <span className="suivante-libelle">{t('fiche.suivante')}</span>
        <strong>{suivante.titre} →</strong>
      </Link>
    </article>
  );
}
