import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { ProjetPerso, StatutProjet } from '@/lib/releve/projets';
import { DetailsProjet } from './details-projet';
import { PieceJustificative } from './piece-justificative';

const ETAT: Record<StatutProjet, string> = { service: 'etat service', beta: 'etat section', dev: 'etat section', pause: 'etat' };

interface CarteProjetProps {
  projet: ProjetPerso;
  ficheHref?: string;
}

export function CarteProjet({ projet, ficheHref }: CarteProjetProps) {
  const t = useTranslations('releve');
  return (
    <article className={projet.piece ? 'projet avec-ecran' : 'projet'}>
      <div className="projet-info">
        <div className="projet-tete">
          <span className={ETAT[projet.statut]}>{t(`projets.statuts.${projet.statut}`)}</span>
          <h3>{projet.titre}</h3>
        </div>
        <p>{projet.texte}</p>
        <p className="projet-outils">{projet.outils.join(' · ')}</p>
        <div className="projet-liens">
          {ficheHref && <Link href={ficheHref}>{t('projets.voirFiche')} →</Link>}
          {projet.detail && <DetailsProjet slug={projet.detail} collection="perso" />}
          {projet.site && (
            <a href={projet.site} target="_blank" rel="noopener noreferrer">
              {t('projets.voirSite')} ↗
            </a>
          )}
        </div>
      </div>
      {projet.piece && <PieceJustificative piece={projet.piece} libelleLecture={t('piece.lire')} />}
    </article>
  );
}
