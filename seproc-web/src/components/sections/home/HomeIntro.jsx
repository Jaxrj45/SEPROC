import { ArrowRight } from 'lucide-react'
import Container from '../../ui/Container'
import SectionHeading from '../../ui/SectionHeading'
import Button from '../../ui/Button'
import Reveal from '../../ui/Reveal'
import { homeContent } from '../../../data/home'

export default function HomeIntro() {
  const { intro } = homeContent

  return (
    <section className="bg-blueprint py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <SectionHeading index={intro.index} eyebrow={intro.eyebrow} title={intro.title} />
        </Reveal>

        <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
          <p className="text-lg leading-relaxed text-carbon-600">{intro.text}</p>
          <Button to="/nosotros" variant="outline" className="mt-8">
            Conocer Seproc <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}