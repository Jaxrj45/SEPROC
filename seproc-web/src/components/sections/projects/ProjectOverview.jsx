import Container from '../../ui/Container'
import Reveal from '../../ui/Reveal'
import { getCategoryLabel } from '../../../data/projects'

export default function ProjectOverview({ project }) {
  const facts = [{ label: 'Categoría', value: getCategoryLabel(project.category) }, ...project.facts]

  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-carbon-500">
            Ficha del proyecto
          </h2>
          <dl className="mt-6 border-b border-carbon-300">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex justify-between gap-6 border-t border-carbon-300 py-4"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-carbon-500">
                  {fact.label}
                </dt>
                <dd className="text-right text-carbon-900">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-7 lg:col-start-6">
          <p className="font-display text-2xl font-medium leading-snug tracking-tight text-carbon-900 sm:text-3xl">
            {project.summary}
          </p>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-carbon-600">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}