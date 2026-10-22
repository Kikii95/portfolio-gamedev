import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { ProjetPerso, StatutProjet } from '@/lib/releve/projets';
import { Cartouche } from './cartouche';
import { DetailsProjet } from './details-projet';
import { PieceJustificative } from './piece-justificative';

const ETIQUETTE: Record<StatutProjet, string> = { service: 'livre', beta: 'attente', dev: 'attente', pause: 'neutre' };

interface CarteProjetProps {
  projet: ProjetPerso;
  ficheHref?: string;
  rang: number;
}

export function CarteProjet({ projet, ficheHref, rang }: CarteProjetProps) {
  const t = useTranslations('releve');
  return (
    <article className="projet">
      {projet.piece ? (
        <PieceJustificative piece={projet.piece} libelleLecture={t('piece.lire')} penche={rang % 2 ? 0.8 : -0.8} />
      ) : (
        <Cartouche href={ficheHref ?? projet.site} techno={projet.cartouche ?? projet.outils[0]} pile={projet.outils} />
      )}
      <div className="projet-tete">
        <h3>{projet.titre}</h3>
        <span className={`etiquette ${ETIQUETTE[projet.statut]}`}>{t(`projets.statuts.${projet.statut}`)}</span>
      </div>
      <p>{projet.texte}</p>
      <p className="projet-outils mono">{projet.outils.join(' · ')}</p>
      <div className="projet-liens">
        {ficheHref && <Link href={ficheHref}>{t('projets.voirFiche')} →</Link>}
        {projet.detail && <DetailsProjet slug={projet.detail} collection="perso" />}
        {projet.site && (
          <a href={projet.site} target="_blank" rel="noopener noreferrer">
            {t('projets.voirSite')} ↗
          </a>
        )}
      </div>
    </article>
  );
}
