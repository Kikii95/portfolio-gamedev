import { useTranslations } from 'next-intl';

interface Chiffre {
  chiffre: string;
  texte: string;
}

export function Chiffres() {
  const t = useTranslations('releve');
  const chiffres = t.raw('chiffres') as Chiffre[];

  return (
    <section className="chiffres cadre" aria-label={t('realisations.titre')}>
      {chiffres.map((c) => (
        <div className="chiffre-ligne" key={c.texte}>
          <span className="valeur mono">{c.chiffre}</span>
          <span className="texte">{c.texte}</span>
        </div>
      ))}
    </section>
  );
}
