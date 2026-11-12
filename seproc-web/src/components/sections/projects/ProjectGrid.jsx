import { useSearchParams } from 'react-router-dom'
import Container from '../../ui/Container'
import Reveal from '../../ui/Reveal'
import ProjectCard from '../../ui/ProjectCard'
import ProjectFilters from './ProjectFilters'
import { projectCategories, projects } from '../../../data/projects'

export default function ProjectGrid() {
  const [searchParams, setSearchParams] = useSearchParams()

  const requested = searchParams.get('categoria')
  const active = projectCategories.some((category) => category.id === requested)
    ? requested
    : 'todos'

  const visibleProjects =
    active === 'todos' ? projects : projects.filter((project) => project.category === active)

  const handleChange = (id) => {
    setSearchParams(id === 'todos' ? {} : { categoria: id }, { replace: true })
  }

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <ProjectFilters categories={projectCategories} active={active} onChange={handleChange} />
          <p
            aria-live="polite"
            className="font-mono text-xs uppercase tracking-[0.2em] text-carbon-500"
          >
            {visibleProjects.length} {visibleProjects.length === 1 ? 'proyecto' : 'proyectos'}
          </p>
        </div>

        {visibleProjects.length > 0 ? (
          <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <Reveal as="li" key={project.slug} delay={(index % 3) * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <p className="mt-16 text-lg text-carbon-600">
            Aún no hay proyectos en esta categoría.
          </p>
        )}
      </Container>
    </section>
  )
}