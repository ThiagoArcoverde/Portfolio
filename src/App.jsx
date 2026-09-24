import { useEffect, useRef, useState } from 'react'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { PageCarousel } from './components/PageCarousel'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { ExpertiseSection } from './sections/ExpertiseSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem('portfolio-theme')
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false)
  const transitionTimeout = useRef(null)

  useEffect(() => () => window.clearTimeout(transitionTimeout.current), [])

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

  return (
    <div className={`site-shell${isThemeTransitioning ? ' theme-transition' : ''}`} data-theme={theme}>
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
      <main id="top">
        <PageCarousel>
          <HeroSection />
          <ExperienceSection />
          <ExpertiseSection />
          <ProjectsSection />
          <ContactSection />
        </PageCarousel>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
