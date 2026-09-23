import { Children, useEffect, useRef, useState } from 'react'

const panels = ['Principal', 'Especialidades', 'Projetos', 'Contato']
const carouselModeQuery = '(min-width: 1200px) and (min-height: 900px)'

export function PageCarousel({ children }) {
  const carouselRef = useRef(null)
  const wheelLock = useRef(false)
  const [activePanel, setActivePanel] = useState(0)
  const [isCarouselMode, setIsCarouselMode] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(carouselModeQuery)
    const updateMode = () => setIsCarouselMode(mediaQuery.matches)

    updateMode()
    mediaQuery.addEventListener('change', updateMode)
    return () => mediaQuery.removeEventListener('change', updateMode)
  }, [])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel || !isCarouselMode) return undefined

    const updateActivePanel = () => {
      const panelWidth = carousel.clientWidth
      if (panelWidth > 0) {
        setActivePanel(Math.round(carousel.scrollLeft / panelWidth))
      }
    }

    carousel.addEventListener('scroll', updateActivePanel, { passive: true })
    return () => carousel.removeEventListener('scroll', updateActivePanel)
  }, [isCarouselMode])

  function goToPanel(panelIndex) {
    if (!isCarouselMode) return

    carouselRef.current?.scrollTo({
      left: panelIndex * carouselRef.current.clientWidth,
      behavior: 'smooth',
    })
  }

  function movePanel(direction) {
    const nextPanel = (activePanel + direction + panels.length) % panels.length
    goToPanel(nextPanel)
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel || !isCarouselMode) return undefined

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX) || Math.abs(event.deltaY) < 8 || wheelLock.current) return

      event.preventDefault()
      wheelLock.current = true
      movePanel(event.deltaY > 0 ? 1 : -1)
      window.setTimeout(() => {
        wheelLock.current = false
      }, 650)
    }

    carousel.addEventListener('wheel', handleWheel, { passive: false })
    return () => carousel.removeEventListener('wheel', handleWheel)
  }, [activePanel, isCarouselMode])

  function handleKeyDown(event) {
    if (!isCarouselMode) return

    if (event.key === 'ArrowLeft') movePanel(-1)
    if (event.key === 'ArrowRight') movePanel(1)
  }

  return (
    <section className="page-carousel" aria-label="Conteúdo do portfólio">
      <div className="carousel-track" ref={carouselRef} tabIndex={isCarouselMode ? 0 : undefined} onKeyDown={handleKeyDown} aria-label={isCarouselMode ? 'Use as setas ou a roda do mouse para navegar entre os painéis' : undefined}>
        {Children.toArray(children).map((child, index) => (
          <div className="page-panel" aria-label={panels[index]} key={panels[index]}>
            {child}
          </div>
        ))}
      </div>
      <div className="carousel-toolbar section-wrap">
        <div className="carousel-controls" aria-label="Navegação do carrossel">
          <button type="button" onClick={() => movePanel(-1)} aria-label="Página anterior">←</button>
          <span aria-live="polite">0{activePanel + 1} / 0{panels.length}</span>
          <button type="button" onClick={() => movePanel(1)} aria-label="Próxima página">→</button>
        </div>
      </div>
    </section>
  )
}
