import { Arrow } from './Arrow'

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Thiago Arcoverde, início">
        <span className="brand-mark">TA</span>
        <span>thiago<span className="brand-dot">.</span>dev</span>
      </a>
      <a className="header-link" href="mailto:thiagoarcoverdecontato@gmail.com">Vamos conversar <Arrow /></a>
    </header>
  )
}
