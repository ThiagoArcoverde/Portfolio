import { useEffect, useState } from 'react'
import { Arrow } from '../components/Arrow'
import { featuredRepositories, githubRepositoriesUrl } from '../data/portfolio'

function formatRepositoryName(name) {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function enrichRepository(repository, fallback) {
  return {
    ...fallback,
    title: formatRepositoryName(repository.name),
    description: repository.description || fallback.description,
    stack: [fallback.stack, repository.language && !fallback.stack.includes(repository.language) ? repository.language : null, repository.stargazers_count ? `${repository.stargazers_count} stars` : null, repository.forks_count ? `${repository.forks_count} forks` : null]
      .filter(Boolean)
      .join('  ·  ') || fallback.stack,
    url: repository.html_url,
    updatedAt: repository.pushed_at,
  }
}

export function ProjectsSection() {
  const [projects, setProjects] = useState(featuredRepositories)

  useEffect(() => {
    let isCurrent = true

    fetch(githubRepositoriesUrl)
      .then((response) => {
        if (!response.ok) throw new Error('GitHub request failed')
        return response.json()
      })
      .then((repositories) => {
        if (!isCurrent) return

        const repositoryByName = new Map(repositories.map((repository) => [repository.name.toLowerCase(), repository]))
        const currentProjects = featuredRepositories.map((fallback) => {
          const repository = repositoryByName.get(fallback.name.toLowerCase())
          return repository ? enrichRepository(repository, fallback) : fallback
        })

        setProjects(currentProjects)
      })
      .catch(() => {})

    return () => {
      isCurrent = false
    }
  }, [])

  return (
    <section className="projects-section section-wrap" id="projetos" aria-labelledby="projects-title">
      <div className="projects-heading">
        <h2 id="projects-title">Alguns dos meus <em> projetos</em>.</h2>
      </div>
      <div className="projects-grid" aria-live="polite">
        {projects.map((project, index) => (
          <article className={`project-card ${project.accent}`} key={project.name}>
            <div className="project-visual">
              <span className="project-shape" aria-hidden="true">{project.shape}</span>
              <span className="project-type">{project.type}</span>
            </div>
            <div className="project-info">
              <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <footer className="project-footer">
              <div className="project-stack" aria-label={`Tecnologias: ${project.stack}`}>
                <span>{project.stack}</span>
                <span aria-hidden="true">{project.stack}</span>
              </div>
            </footer>
          </article>
        ))}
      </div>
      <a className="repositories-link" href="https://github.com/ThiagoArcoverde?tab=repositories" target="_blank" rel="noreferrer">Ver todos no GitHub <Arrow /></a>
    </section>
  )
}
