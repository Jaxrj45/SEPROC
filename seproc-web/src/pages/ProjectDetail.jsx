import { Link, useParams } from 'react-router-dom'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'

export default function ProjectDetail() {
  const { slug } = useParams()

  return (
    <section className="bg-blueprint py-24">
      <Container>
        <SectionHeading
          index="03.1"
          eyebrow="Detalle de proyecto"
          title="Detalle del proyecto"
          description="Página provisional."
        />
        <p className="mt-8 font-mono text-sm text-carbon-600">slug: {slug}</p>
        <Link
          to="/proyectos"
          className="mt-6 inline-block font-mono text-sm underline underline-offset-4"
        >
          Volver a proyectos
        </Link>
      </Container>
    </section>
  )
}