import { Children, useEffect, useRef, useState } from 'react'

const carouselModeQuery = '(min-width: 1200px) and (min-height: 900px)'

export function PageCarousel({ children, content }) {
  const carouselRef = useRef(null)
  const wheelLock = useRef(false)
  const [activePanel, setActivePanel] = useState(0)
  const [isCarouselMode, setIsCarouselMode] = useState(false)
  const panels = content.panels

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

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      movePanel(-1)
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      movePanel(1)
    }
  }

  return (
    <section className={`page-carousel ${isCarouselMode ? 'carousel-mode' : 'stacked-mode'}`} aria-label={content.ariaLabel}>
      <div className="carousel-track" ref={carouselRef} tabIndex={isCarouselMode ? 0 : undefined} onKeyDown={handleKeyDown} aria-label={isCarouselMode ? content.instruction : undefined}>
        {Children.toArray(children).map((child, index) => (
          <div className="page-panel" aria-label={panels[index]} key={panels[index]}>
            {child}
          </div>
        ))}
      </div>
      <div className="carousel-toolbar section-wrap">
        <div className="carousel-controls" aria-label={content.navigation}>
          <button type="button" onClick={() => movePanel(-1)} aria-label={content.previous}>←</button>
          <span aria-live="polite">0{activePanel + 1} / 0{panels.length}</span>
          <button type="button" onClick={() => movePanel(1)} aria-label={content.next}>→</button>
        </div>
      </div>
    </section>
  )
}
