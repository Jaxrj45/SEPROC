import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import ProvisionalTag from '../components/ui/ProvisionalTag'
import ProjectGrid from '../components/sections/projects/ProjectGrid'
import CtaSection from '../components/sections/CtaSection'
import { projectsContent } from '../data/projects'
import { pageSeo } from '../data/seo'

export default function Projects() {
  const { header, cta, provisional } = projectsContent

  return (
    <>
      <Seo {...pageSeo.projects} />
      <PageHeader
        index={header.index}
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      >
        {provisional && <ProvisionalTag />}
      </PageHeader>
      <ProjectGrid />
      <CtaSection title={cta.title} text={cta.text} />
    </>
  )
}