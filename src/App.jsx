import { useEffect, useRef, useState } from 'react'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { PageCarousel } from './components/PageCarousel'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { ExpertiseSection } from './sections/ExpertiseSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { getInitialLanguage, locales } from './data/locales'

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem('portfolio-theme')
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [language, setLanguage] = useState(getInitialLanguage)
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false)
  const transitionTimeout = useRef(null)
  const content = locales[language]

  useEffect(() => () => window.clearTimeout(transitionTimeout.current), [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  function toggleTheme() {
    window.clearTimeout(transitionTimeout.current)
    setIsThemeTransitioning(true)
    transitionTimeout.current = window.setTimeout(() => setIsThemeTransitioning(false), 420)

    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem('portfolio-theme', nextTheme)
      return nextTheme
    })
  }

  function changeLanguage(nextLanguage) {
    if (!locales[nextLanguage]) return
    setLanguage(nextLanguage)
    window.localStorage.setItem('portfolio-language', nextLanguage)
  }

  return (
    <div className={`site-shell${isThemeTransitioning ? ' theme-transition' : ''}`} data-theme={theme}>
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} language={language} onChangeLanguage={changeLanguage} content={content.header} />
      <main id="top">
        <PageCarousel content={content.carousel}>
          <HeroSection content={content.hero} terminal={content.terminal} />
          <ExperienceSection content={content.experience} experiences={content.experiences} />
          <ExpertiseSection content={content.expertise} technologies={content.technologies} />
          <ProjectsSection content={content.projects} projects={content.featuredProjects} />
          <ContactSection content={content.contact} />
        </PageCarousel>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
