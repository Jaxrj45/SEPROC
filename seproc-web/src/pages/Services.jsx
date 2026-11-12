import PageHeader from '../components/ui/PageHeader'
import ProvisionalTag from '../components/ui/ProvisionalTag'
import ServiceList from '../components/sections/services/ServiceList'
import CtaSection from '../components/sections/CtaSection'
import { servicesContent } from '../data/services'

export default function Services() {
  const { header, cta, provisional } = servicesContent

  return (
    <>
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