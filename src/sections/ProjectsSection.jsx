import { Arrow } from '../components/Arrow'
import { featuredProjects } from '../data/portfolio'

export function ProjectsSection() {
  return (
    <section className="projects-section section-wrap" id="projetos" aria-labelledby="projects-title">
      <div className="projects-heading">
        <h2 id="projects-title">Alguns dos meus <em> projetos</em>.</h2>
      </div>
      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <article className={`project-card ${project.accent}`} key={project.name}>
            <div className="project-visual">
              <span className="project-shape" aria-hidden="true">{project.shape}</span>
              <span className="project-type">{project.type}</span>
            </div>
            <div className="project-info">
              <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-role">{project.role}</span>
            </div>
            <footer className="project-footer">
              <div className="project-stack" aria-label={`Tecnologias: ${project.stack}`}>
                <span>{project.stack}</span>
                <span aria-hidden="true">{project.stack}</span>
              </div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a className="project-link" href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    {link.label} <Arrow />
                  </a>
                ))}
              </div>
            </footer>
          </article>
        ))}
      </div>
      <a className="repositories-link" href="https://github.com/ThiagoArcoverde?tab=repositories" target="_blank" rel="noreferrer">Ver todos no GitHub <Arrow /></a>
    </section>
  )
}
