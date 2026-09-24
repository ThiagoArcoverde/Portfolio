import { Arrow } from './Arrow'
import { Globe2, Moon, Sun } from 'lucide-react'

export function SiteHeader({ theme, onToggleTheme, language, onChangeLanguage, content }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={content.brandLabel}>
        <span className="brand-mark">TA</span>
        <span>thiago<span className="brand-dot">.</span>dev</span>
      </a>
      <div className="header-actions">
        <div className="language-control" role="group" aria-label={content.languageLabel}>
          <Globe2 className="language-icon" aria-hidden="true" />
          <div className={`language-switcher language-${language}`}>
          <button type="button" className={language === 'pt-BR' ? 'is-active' : ''} aria-pressed={language === 'pt-BR'} onClick={() => onChangeLanguage('pt-BR')}>PT</button>
          <button type="button" className={language === 'en' ? 'is-active' : ''} aria-pressed={language === 'en'} onClick={() => onChangeLanguage('en')}>EN</button>
          <button type="button" className={language === 'es' ? 'is-active' : ''} aria-pressed={language === 'es'} onClick={() => onChangeLanguage('es')}>ES</button>
          </div>
        </div>
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={theme === 'dark' ? content.themeLight : content.themeDark} title={theme === 'dark' ? content.themeLight : content.themeDark}>
          {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </button>
        <a className="header-link" href="mailto:thiagoarcoverdecontato@gmail.com">{content.talk} <Arrow /></a>
      </div>
    </header>
  )
}
