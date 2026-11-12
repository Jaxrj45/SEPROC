import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import ProvisionalTag from '../components/ui/ProvisionalTag'
import Container from '../components/ui/Container'
import Photo from '../components/ui/Photo'
import Reveal from '../components/ui/Reveal'
import ProjectOverview from '../components/sections/projects/ProjectOverview'
import ProjectGallery from '../components/sections/projects/ProjectGallery'
import ProjectPagination from '../components/sections/projects/ProjectPagination'
import CtaSection from '../components/sections/CtaSection'
import NotFound from './NotFound'
import { getProjectBySlug, projectsContent } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <NotFound />

  return (
    <Fragment key={project.slug}>
      <PageHeader
        index="03.1"
        eyebrow={project.title}
        title={project.title}
        trail={[{ label: 'Proyectos', to: '/proyectos' }]}
      >
        {projectsContent.provisional && <ProvisionalTag />}
      </PageHeader>

      <Container className="pt-12 sm:pt-16">
        <Reveal>
          <div className="aspect-[16/9] overflow-hidden bg-carbon-200">
            <Photo
              src={project.image}
              alt={project.title}
              label="Imagen principal de referencia"
              variant="hero"
              priority
            />
          </div>
        </Reveal>
      </Container>

      <ProjectOverview project={project} />
      <ProjectGallery images={project.gallery} />
      <ProjectPagination project={project} />
      <CtaSection title={projectsContent.cta.title} text={projectsContent.cta.text} />
    </Fragment>
  )
}