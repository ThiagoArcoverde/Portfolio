export function ExpertiseSection({ content, technologies }) {
  return (
    <section className="section-wrap expertise-section" id="expertise" aria-labelledby="expertise-title">
      <div className="section-heading technology-heading">
        <div>
          <h2 id="expertise-title">{content.heading}<br /><em>{content.accent}</em></h2>
          <p className="technology-intro">{content.intro}</p>
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
