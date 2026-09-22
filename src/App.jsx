import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { PageCarousel } from './components/PageCarousel'
import { ContactSection } from './sections/ContactSection'
import { ExpertiseSection } from './sections/ExpertiseSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="top">
        <PageCarousel>
          <HeroSection />
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
