import Container from '../../ui/Container'
import Photo from '../../ui/Photo'
import Reveal from '../../ui/Reveal'
import SectionHeading from '../../ui/SectionHeading'
import { aboutContent } from '../../../data/about'

export default function AboutStory() {
  const { story, architect } = aboutContent

  return (
    <section className="py-24 sm:py-32">
      <Container className="grid items-start gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-carbon-200">
            <Photo src={architect.image} alt={architect.name} label="Foto del arquitecto" />
          </div>
          <div className="mt-5 border-t border-carbon-300 pt-4">
            <p className="font-display text-xl font-semibold tracking-tight text-carbon-900">
              {architect.name}
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-carbon-500">
              {architect.role}
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
          <SectionHeading index={story.index} eyebrow={story.eyebrow} title={story.title} />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-carbon-600">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-10 border-l-2 border-seproc pl-5 leading-relaxed text-carbon-700">
            {architect.bio}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}