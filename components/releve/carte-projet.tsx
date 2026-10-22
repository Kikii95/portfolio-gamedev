import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { ProjetPerso, StatutProjet } from '@/lib/releve/projets';
import { DetailsProjet } from './details-projet';
import { PieceJustificative } from './piece-justificative';
import { LigneRegistre } from './registre';

const ETIQUETTE: Record<StatutProjet, string> = { service: 'livre', beta: 'section', dev: 'section', pause: 'neutre' };

interface CarteProjetProps {
  projet: ProjetPerso;
  ficheHref?: string;
  rang: number;
}

export function CarteProjet({ projet, ficheHref, rang }: CarteProjetProps) {
  const t = useTranslations('releve');
  return (
    <article className="projet">
      {projet.piece && (
        <PieceJustificative piece={projet.piece} libelleLecture={t('piece.lire')} penche={rang % 2 ? 0.8 : -0.8} />
      )}
      <div className="projet-tete">
        <h3>{ficheHref ? <Link href={ficheHref}>{projet.titre}</Link> : projet.titre}</h3>
        <span className={`etiquette ${ETIQUETTE[projet.statut]}`}>{t(`projets.statuts.${projet.statut}`)}</span>
      </div>
      <p>{projet.texte}</p>
      <p className="projet-outils mono">{projet.outils.join(' · ')}</p>
      <div className="projet-liens">
        <LiensProjet projet={projet} ficheHref={ficheHref} />
      </div>
    </article>
  );
}

function LiensProjet({ projet, ficheHref }: Omit<CarteProjetProps, 'rang'>) {
  const t = useTranslations('releve');
  return (
    <>
        {ficheHref && <Link href={ficheHref}>{t('projets.voirFiche')} →</Link>}
        {projet.detail && <DetailsProjet slug={projet.detail} collection="perso" />}
        {projet.site && (
          <a href={projet.site} target="_blank" rel="noopener noreferrer">
            {t('projets.voirSite')} ↗
          </a>
        )}
    </>
  );
}

export function LigneProjet({ projet, ficheHref }: Omit<CarteProjetProps, 'rang'>) {
  const t = useTranslations('releve');
  return (
    <LigneRegistre
      titre={projet.titre}
      href={ficheHref}
      texte={projet.texte}
      outils={projet.outils}
      etiquette={{ classe: ETIQUETTE[projet.statut], libelle: t(`projets.statuts.${projet.statut}`) }}
      liens={<LiensProjet projet={projet} ficheHref={ficheHref} />}
    />
  );
}
