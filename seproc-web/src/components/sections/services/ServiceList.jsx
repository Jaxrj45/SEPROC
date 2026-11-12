import { Check } from 'lucide-react'
import Container from '../../ui/Container'
import Reveal from '../../ui/Reveal'
import { services } from '../../../data/services'

export default function ServiceList() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <ol className="border-b border-carbon-300">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Reveal
                as="li"
                key={service.id}
                className="grid gap-8 border-t border-carbon-300 py-12 lg:grid-cols-12 lg:py-16"
              >
                <div className="lg:col-span-5">
                  <span className="font-mono text-xs tracking-[0.2em] text-carbon-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="mt-6 flex items-start gap-5">
                    <Icon strokeWidth={1.25} className="mt-1 size-10 shrink-0 text-carbon-700" />
                    <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-carbon-900 sm:text-4xl">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="text-lg leading-relaxed text-carbon-600">{service.description}</p>
                  <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-carbon-800">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-seproc text-carbon-950">
                          <Check className="size-3.5" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}