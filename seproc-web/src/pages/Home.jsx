import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen items-center bg-carbon-900 bg-blueprint-dark">
        <Container>
          <SectionHeading
            tone="light"
            index="00"
            eyebrow="Inicio"
            title="Página de inicio"
            description="Página provisional. Se construye en la Fase 3."
          />
        </Container>
      </section>
      <section className="bg-blueprint py-40">
        <Container>
          <p className="max-w-xl text-lg text-carbon-600">
            Sección de prueba para comprobar el cambio de la barra de navegación al hacer scroll.
          </p>
        </Container>
      </section>
    </>
  )
}