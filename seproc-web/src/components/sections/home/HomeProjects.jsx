import { ArrowRight } from 'lucide-react'
import Container from '../../ui/Container'
import SectionHeading from '../../ui/SectionHeading'
import Button from '../../ui/Button'
import Reveal from '../../ui/Reveal'
import ProjectCard from '../../ui/ProjectCard'
import { homeContent } from '../../../data/home'
import { featuredProjects } from '../../../data/projects'

export default function HomeProjects() {
  const content = homeContent.projects

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              index={content.index}
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
            />
          </Reveal>
          <Button to="/proyectos" variant="outline" className="self-start sm:self-auto">
            Ver todos los proyectos <ArrowRight className="size-4" />
          </Button>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={index * 120}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}