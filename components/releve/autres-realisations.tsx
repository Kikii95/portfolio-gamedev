import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { chemin } from '@/lib/releve/chemin';
import type { Piece } from '@/lib/releve/types';
import { PieceJustificative } from './piece-justificative';

export interface AutreRealisation {
  titre: string;
  texte: string;
  lien?: string;
  piece: Piece;
}

export function AutresRealisations({ autres }: { autres: AutreRealisation[] }) {
  const t = useTranslations('releve');
  const locale = useLocale();
  if (autres.length === 0) return null;

  return (
    <section className="autres cadre" aria-labelledby="titre-autres">
      <h2 id="titre-autres">{t('realisations.autres')}</h2>
      <p className="chapo">{t('realisations.autresChapo')}</p>
      <div className="autres-grille">
        {autres.map((a, i) => (
          <div className="autre" key={a.titre}>
            <PieceJustificative piece={a.piece} libelleLecture={t('piece.lire')} penche={i % 2 ? 0.8 : -0.8} />
            <h3>{a.lien ? <a href={a.lien} target="_blank" rel="noopener noreferrer">{a.titre} ↗</a> : a.titre}</h3>
            <p>{a.texte}</p>
          </div>
        ))}
      </div>
      <Link href={chemin(locale, '/projets')} className="bouton trait vers-projets">
        {t('projets.tous')} →
      </Link>
    </section>
  );
}
