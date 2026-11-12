import { MessageCircle } from 'lucide-react'
import Container from '../../ui/Container'
import Button from '../../ui/Button'
import Reveal from '../../ui/Reveal'
import { homeContent } from '../../../data/home'
import { whatsappUrl } from '../../../data/company'

export default function HomeCta() {
  const { cta } = homeContent

  return (
    <section className="bg-seproc">
      <Container className="flex flex-col gap-10 py-20 md:flex-row md:items-center md:justify-between">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-carbon-950 sm:text-5xl">
            {cta.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-carbon-800">{cta.text}</p>
        </Reveal>

        <Reveal delay={150} className="flex flex-col gap-3 sm:flex-row">
          <Button to="/contacto" variant="dark" size="lg">
            Solicitar cotización
          </Button>
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}