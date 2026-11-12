import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'

export default function Projects() {
  return (
    <section className="bg-blueprint py-24">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Proyectos"
          title="Proyectos"
          description="Página provisional."
        />
        <Link
          to="/proyectos/proyecto-de-prueba"
          className="mt-10 inline-block font-mono text-sm underline underline-offset-4"
        >
          Probar ruta de detalle de proyecto
        </Link>
      </Container>
    </section>
  )
}