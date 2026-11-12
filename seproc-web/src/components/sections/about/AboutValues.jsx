import Container from '../../ui/Container'
import Reveal from '../../ui/Reveal'
import SectionHeading from '../../ui/SectionHeading'
import { aboutContent } from '../../../data/about'

export default function AboutValues() {
  const { values } = aboutContent

  return (
    <section className="bg-carbon-900 bg-blueprint-dark py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            tone="light"
            index={values.index}
            eyebrow={values.eyebrow}
            title={values.title}
            description={values.description}
          />
        </Reveal>

        <ul className="mt-16 grid gap-px bg-carbon-700 sm:grid-cols-2">
          {values.items.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(index % 2) * 100}
              className="bg-carbon-900 p-8 sm:p-10"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-seproc">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-paper">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-carbon-300">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}