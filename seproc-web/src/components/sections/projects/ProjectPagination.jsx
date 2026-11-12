import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Container from '../../ui/Container'
import { projects } from '../../../data/projects'

export default function ProjectPagination({ project }) {
  const position = projects.findIndex((item) => item.slug === project.slug)
  const previous = projects[(position - 1 + projects.length) % projects.length]
  const next = projects[(position + 1) % projects.length]

  return (
    <nav aria-label="Más proyectos" className="border-y border-carbon-300">
      <Container className="grid sm:grid-cols-2">
        <Link
          to={`/proyectos/${previous.slug}`}
          className="group flex items-center gap-5 py-10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-carbon-700 sm:border-r sm:border-carbon-300"
        >
          <ArrowLeft className="size-5 shrink-0 text-carbon-500 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>
            <span className="block font-mono text-xs uppercase tracking-[0.2em] text-carbon-500">
              Anterior
            </span>
            <span className="mt-1 block font-display text-xl font-semibold tracking-tight text-carbon-900">
              {previous.title}
            </span>
          </span>
        </Link>

        <Link
          to={`/proyectos/${next.slug}`}
          className="group flex items-center justify-end gap-5 border-t border-carbon-300 py-10 text-right focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-carbon-700 sm:border-t-0 sm:pl-8"
        >
          <span>
            <span className="block font-mono text-xs uppercase tracking-[0.2em] text-carbon-500">
              Siguiente
            </span>
            <span className="mt-1 block font-display text-xl font-semibold tracking-tight text-carbon-900">
              {next.title}
            </span>
          </span>
          <ArrowRight className="size-5 shrink-0 text-carbon-500 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Container>
    </nav>
  )
}