import { SiteHeader } from '@/components/releve/site-header';
import { SiteFooter } from '@/components/releve/site-footer';
import { SCRIPT_THEME } from '@/components/releve/bascule-theme';
import { RevelerTraces } from '@/components/releve/reveler-traces';
import './styles/tokens.css';
import './styles/base.css';
import './styles/composants.css';
import './styles/accueil.css';
import './styles/sections.css';

export default function ReleveLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="releve-site">
      <script dangerouslySetInnerHTML={{ __html: SCRIPT_THEME }} />
      <SiteHeader />
      <main className="contenu">{children}</main>
      <SiteFooter />
      <RevelerTraces />
    </div>
  );
}
