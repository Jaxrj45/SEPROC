import Seo from '../components/ui/Seo'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="bg-blueprint py-24">
      <Seo title="Página no encontrada" noindex />
      <Container>
        <SectionHeading
          index="404"
          eyebrow="Error"
          title="Página no encontrada"
          description="La dirección que buscas no existe o fue movida."
        />
        <Button to="/" className="mt-10">
          Volver al inicio
        </Button>
      </Container>
    </section>
  )
}