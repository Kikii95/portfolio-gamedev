import { SiteHeader } from '@/components/releve/site-header';
import { SiteFooter } from '@/components/releve/site-footer';
import './styles/tokens.css';
import './styles/mise-en-page.css';
import './styles/composants.css';

export default function ReleveLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="releve-site">
      <SiteHeader />
      <main className="contenu">{children}</main>
      <SiteFooter />
    </div>
  );
}
