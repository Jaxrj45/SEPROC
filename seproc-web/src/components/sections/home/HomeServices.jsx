import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '../../ui/Container'
import SectionHeading from '../../ui/SectionHeading'
import Button from '../../ui/Button'
import Reveal from '../../ui/Reveal'
import { homeContent } from '../../../data/home'
import { services } from '../../../data/services'

export default function HomeServices() {
  const content = homeContent.services

  return (
    <section className="bg-carbon-900 bg-blueprint-dark py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            tone="light"
            index={content.index}
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </Reveal>

        <ul className="mt-16 grid gap-px bg-carbon-700 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Reveal as="li" key={service.id} delay={index * 100} className="flex bg-carbon-900">
                <Link
                  to="/servicios"
                  className="group flex w-full flex-col p-8 transition-colors duration-300 hover:bg-carbon-800 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-seproc"
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-carbon-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Icon
                    strokeWidth={1.25}
                    className="mt-10 size-9 text-paper transition-colors duration-300 group-hover:text-seproc"
                  />
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-paper">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-carbon-300">{service.summary}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-paper">
                    Ver más
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </ul>

        <div className="mt-12">
          <Button to="/servicios" variant="outlineLight">
            Ver todos los servicios
          </Button>
        </div>
      </Container>
    </section>
  )
}