import { TerminalCard } from '../components/TerminalCard'

export function HeroSection({ content, terminal }) {
  return (
    <section className="hero section-wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">{content.greeting}<br /><em>{content.name}</em>.</h1>
        <p className="hero-intro">{content.intro}</p>
        <p className="hero-note">{content.note}</p>
      </div>
      <TerminalCard content={terminal} />
    </section>
  )
}
