import { Arrow } from './Arrow'
import { Moon, Sun } from 'lucide-react'

export function SiteHeader({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Thiago Arcoverde, início">
        <span className="brand-mark">TA</span>
        <span>thiago<span className="brand-dot">.</span>dev</span>
      </a>
      <div className="header-actions">
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'} title={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}>
          {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </button>
        <a className="header-link" href="mailto:thiagoarcoverdecontato@gmail.com">Vamos conversar <Arrow /></a>
      </div>
    </header>
  )
}
