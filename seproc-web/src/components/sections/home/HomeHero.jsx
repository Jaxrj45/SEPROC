import { ArrowRight } from 'lucide-react'
import Container from '../../ui/Container'
import Photo from '../../ui/Photo'
import Button from '../../ui/Button'
import Reveal from '../../ui/Reveal'
import { homeContent } from '../../../data/home'

export default function HomeHero() {
  const { hero } = homeContent

  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden bg-carbon-950">
      <div className="absolute inset-0 -z-10">
        <Photo label="Foto principal de referencia" priority />
        <div className="absolute inset-0 bg-linear-to-t from-carbon-950 via-carbon-950/55 to-carbon-950/30" />
      </div>

      <Container className="pb-16 pt-40 sm:pb-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-seproc">
            {hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-paper sm:text-7xl lg:text-8xl">
            {hero.titleStart} <span className="text-seproc">{hero.titleAccent}</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-carbon-200">
            {hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={300} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button to="/proyectos" size="lg">
            Ver proyectos <ArrowRight className="size-4" />
          </Button>
          <Button to="/contacto" variant="outlineLight" size="lg">
            Solicitar cotización
          </Button>
        </Reveal>

        <Reveal delay={400}>
          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-2 border-t border-paper/20 pt-6 font-mono text-xs uppercase tracking-[0.2em] text-carbon-300">
            {hero.disciplines.map((discipline, index) => (
              <li key={discipline} className="flex items-center gap-3">
                <span className="text-seproc">{String(index + 1).padStart(2, '0')}</span>
                {discipline}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}