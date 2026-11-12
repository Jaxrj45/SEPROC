import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Reveal from './Reveal'
import { cn } from '../../utils/cn'

export default function PageHeader({
  index,
  eyebrow,
  title,
  description,
  trail = [],
  children,
  className,
}) {
  return (
    <section className={cn('border-b border-carbon-200 bg-blueprint py-20 sm:py-28', className)}>
      <Container>
        <Reveal>
          <nav
            aria-label="Ruta de navegación"
            className="font-mono text-xs uppercase tracking-[0.2em] text-carbon-500"
          >
            <Link to="/" className="transition-colors hover:text-carbon-900">
              Inicio
            </Link>
            {trail.map((item) => (
              <Fragment key={item.to}>
                <span className="mx-3" aria-hidden="true">
                  /
                </span>
                <Link to={item.to} className="transition-colors hover:text-carbon-900">
                  {item.label}
                </Link>
              </Fragment>
            ))}
            <span className="mx-3" aria-hidden="true">
              /
            </span>
            <span className="text-carbon-900" aria-current="page">
              {eyebrow}
            </span>
          </nav>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em]">
            <span className="text-carbon-700">{index}</span>
            <span aria-hidden="true" className="h-px w-12 bg-carbon-700" />
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-carbon-900 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-carbon-600">{description}</p>
          </Reveal>
        )}

        {children && (
          <Reveal delay={300} className="mt-8">
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  )
}