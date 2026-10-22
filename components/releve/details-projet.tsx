import { useLocale, useTranslations } from 'next-intl';
import { getProjectBySlug, type Collection } from '@/lib/mdx/projects';
import { CorpsDetails } from './corps-details';
import { FenetreDetails } from './fenetre-details';

interface DetailsProjetProps {
  slug: string;
  collection: Collection;
  pageHref?: string;
}

export function DetailsProjet({ slug, collection, pageHref }: DetailsProjetProps) {
  const t = useTranslations('releve.projets');
  const locale = useLocale();
  const projet = getProjectBySlug(slug, locale, collection);
  if (!projet) return null;
  return (
    <FenetreDetails titre={projet.metadata.title} libelleOuvrir={t('details')} libelleFermer={t('fermer')}>
      <CorpsDetails projet={projet} pageHref={pageHref} libellePage={t('ouvrirPage')} />
    </FenetreDetails>
  );
}
