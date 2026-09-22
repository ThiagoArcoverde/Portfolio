import { Arrow } from '../components/Arrow'
import { Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="contact-section section-wrap" id="contato" aria-labelledby="contact-title">
      <h2 id="contact-title">Como me <em>encontrar</em>?</h2>
      < br/>
      <div className="contact-links">
        <a className="contact-card linkedin-card" href="https://www.linkedin.com/in/thiago-arcoverde/" target="_blank" rel="noreferrer">
          <span className="contact-card-icon social-icon social-icon-linkedin" aria-hidden="true">in</span>
          <span className="contact-card-copy"><small className="contact-card-kicker">REDE PROFISSIONAL</small><strong>LinkedIn</strong><small>Perfil profissional</small></span>
          <span className="contact-card-arrow"><Arrow /></span>
        </a>
        <a className="contact-card github-card" href="https://github.com/ThiagoArcoverde" target="_blank" rel="noreferrer">
          <span className="contact-card-icon social-icon social-icon-github" aria-hidden="true">GH</span>
          <span className="contact-card-copy"><small className="contact-card-kicker">CÓDIGO ABERTO</small><strong>GitHub</strong><small>Código e projetos</small></span>
          <span className="contact-card-arrow"><Arrow /></span>
        </a>
        <a className="contact-card email-card" href="mailto:thiagoarcoverdecontato@gmail.com">
          <Mail className="contact-card-icon" aria-hidden="true" />
          <span className="contact-card-copy"><small className="contact-card-kicker">CONTATO DIRETO</small><strong>E-mail</strong><small>thiagoarcoverdecontato@gmail.com</small></span>
          <span className="contact-card-arrow"><Arrow /></span>
        </a>
      </div>
    </section>
  )
}
