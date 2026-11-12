import PageHeader from '../components/ui/PageHeader'
import ProvisionalTag from '../components/ui/ProvisionalTag'
import AboutStory from '../components/sections/about/AboutStory'
import AboutValues from '../components/sections/about/AboutValues'
import CtaSection from '../components/sections/CtaSection'
import { aboutContent } from '../data/about'

export default function About() {
  const { header, cta, provisional } = aboutContent

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
      <AboutStory />
      <AboutValues />
      <CtaSection title={cta.title} text={cta.text} />
    </>
  )
}