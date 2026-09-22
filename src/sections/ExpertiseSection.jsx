import { technologies } from '../data/portfolio'

export function ExpertiseSection() {
  return (
    <section className="section-wrap expertise-section" id="expertise" aria-labelledby="expertise-title">
      <div className="section-heading technology-heading">
        <div>
          <h2 id="expertise-title">Tecnologias que conheço<br /><em>e uso.</em></h2>
          <p className="technology-intro">Tecnologias que conheço e uso para construir produtos claros, confiáveis e prontos para crescer.</p>
        </div>
      </div>
      <div className="technology-grid">
        {technologies.map((technology) => (
          <article className="technology-item" key={technology.number}>
            <div className="technology-meta">
              <span className="item-number">{technology.number}</span>
              <span className="technology-category">{technology.category}</span>
            </div>
            <h3>{technology.title}</h3>
            <p>{technology.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
