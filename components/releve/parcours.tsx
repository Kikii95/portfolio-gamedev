import { useTranslations } from 'next-intl';

type LigneParcours = [periode: string, poste: string, detail: string];

const OUTILS = ['n8n', 'API REST', 'Webhooks', 'Claude', 'Mistral', 'ChatGPT', 'Google Workspace', 'Pack Office', 'Stripe', 'Salesforce', 'PostgreSQL', 'Python', 'TypeScript', 'Next.js', 'Claude Code', 'MCP', 'Git', 'Docker'];

export function Parcours() {
  const t = useTranslations('releve.parcours');
  const lignes = t.raw('lignes') as LigneParcours[];

  return (
    <section className="parcours cadre" id="parcours" aria-labelledby="titre-parcours">
      <h2 id="titre-parcours">{t('titre')}</h2>
      <ol className="parcours-liste">
        {lignes.map(([periode, poste, detail]) => (
          <li key={poste}>
            <span className="mono periode">{periode}</span>
            <div>
              <h3>{poste}</h3>
              <p>{detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="outils">
        <span className="mono">{t('outils')}</span> {OUTILS.join(' · ')}
      </p>
    </section>
  );
}
