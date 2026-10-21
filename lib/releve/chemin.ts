const LANGUE_SANS_PREFIXE = 'fr';

export function chemin(locale: string, route = ''): string {
  const prefixe = locale === LANGUE_SANS_PREFIXE ? '' : `/${locale}`;
  return `${prefixe}${route}` || '/';
}

export const LIENS = {
  mail: 'mailto:killian.abboud@gmail.com',
  linkedin: 'https://www.linkedin.com/in/killian-abboud-a799962a0/',
  github: 'https://github.com/Kikii95',
  cv: '/cv/CV_FR.pdf',
};
