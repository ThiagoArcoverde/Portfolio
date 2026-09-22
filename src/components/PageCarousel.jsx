import { Children, useEffect, useRef, useState } from 'react'

const panels = ['Principal', 'Especialidades', 'Projetos', 'Contato']

export function PageCarousel({ children }) {
  const carouselRef = useRef(null)
  const wheelLock = useRef(false)
  const [activePanel, setActivePanel] = useState(0)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return undefined

    const updateActivePanel = () => {
      const panelWidth = carousel.clientWidth
      if (panelWidth > 0) {
        setActivePanel(Math.round(carousel.scrollLeft / panelWidth))
      }
    }

    carousel.addEventListener('scroll', updateActivePanel, { passive: true })
    return () => carousel.removeEventListener('scroll', updateActivePanel)
  }, [])

  function goToPanel(panelIndex) {
    carouselRef.current?.scrollTo({
      left: panelIndex * carouselRef.current.clientWidth,
      behavior: 'smooth',
    })
  }

  function movePanel(direction) {
    const nextPanel = (activePanel + direction + panels.length) % panels.length
    goToPanel(nextPanel)
  }

  function handleWheel(event) {
    if (Math.abs(event.deltaY) < Math.abs(event.deltaX) || Math.abs(event.deltaY) < 8 || wheelLock.current) return

    event.preventDefault()
    wheelLock.current = true
    movePanel(event.deltaY > 0 ? 1 : -1)
    window.setTimeout(() => {
      wheelLock.current = false
    }, 650)
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') movePanel(-1)
    if (event.key === 'ArrowRight') movePanel(1)
  }

  return (
    <section className="page-carousel" aria-label="Conteúdo do portfólio">
      <div className="carousel-track" ref={carouselRef} tabIndex="0" onKeyDown={handleKeyDown} onWheel={handleWheel} aria-label="Use as setas ou a roda do mouse para navegar entre os painéis">
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
