import { experiences } from '../data/portfolio'

export function ExperienceSection() {
  return (
    <section className="experience-section section-wrap" id="experiencia" aria-labelledby="experience-title">
      <div className="experience-heading">
        <h2 id="experience-title">Experiência além<br />do <em>código.</em></h2>
      </div>
      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-item" key={experience.number}>
            <div className="experience-meta">
              <span className="item-number">{experience.number}</span>
              <span>{experience.period}</span>
            </div>
            <div className="experience-copy">
              <div className="experience-overview">
                <p className="experience-domain">{experience.domain}</p>
                <h3>{experience.role}</h3>
              </div>
              <p className="experience-description">{experience.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
