import { TerminalCard } from '../components/TerminalCard'

export function HeroSection() {
  return (
    <section className="hero section-wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Olá, me chamo <em>Thiago.</em></h1>
        <p className="hero-intro">Sou engenheiro de software especializado em .NET e C#. Gosto de entender o problema por trás do código e construir soluções simples, confiáveis e preparadas para crescer.</p>
        <p className="hero-note">Entre APIs, arquitetura e aprendizado constante, estou sempre tentando deixar o próximo passo mais claro do que o anterior.</p>
      </div>
      <TerminalCard />
    </section>
  )
}
