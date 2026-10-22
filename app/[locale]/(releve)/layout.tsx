import { SiteHeader } from '@/components/releve/site-header';
import { SiteFooter } from '@/components/releve/site-footer';
import { SCRIPT_THEME } from '@/components/releve/bascule-theme';
import './styles/tokens.css';
import './styles/mise-en-page.css';
import './styles/composants.css';
import './styles/projets.css';

export default function ReleveLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="releve-site">
      <script dangerouslySetInnerHTML={{ __html: SCRIPT_THEME }} />
      <SiteHeader />
      <main className="contenu">{children}</main>
      <SiteFooter />
    </div>
  );
}
