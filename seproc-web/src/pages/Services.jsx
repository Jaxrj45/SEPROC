import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import ProvisionalTag from '../components/ui/ProvisionalTag'
import ServiceList from '../components/sections/services/ServiceList'
import CtaSection from '../components/sections/CtaSection'
import { servicesContent } from '../data/services'
import { pageSeo } from '../data/seo'

export default function Services() {
  const { header, cta, provisional } = servicesContent

  return (
    <>
      <Seo {...pageSeo.services} />
      <PageHeader
        index={header.index}
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      >
        {provisional && <ProvisionalTag />}
      </PageHeader>
      <ServiceList />
      <CtaSection title={cta.title} text={cta.text} />
    </>
  )
}