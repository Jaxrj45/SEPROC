import { ArrowRight, Phone } from 'lucide-react'
import Container from '../components/ui/Container'
import Logo, { LogoMark } from '../components/ui/Logo'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'


const palette = [
  { name: 'carbon-950', cls: 'bg-carbon-950' },
  { name: 'carbon-800', cls: 'bg-carbon-800' },
  { name: 'carbon-700 (logo)', cls: 'bg-carbon-700' },
  { name: 'carbon-500', cls: 'bg-carbon-500' },
  { name: 'carbon-300', cls: 'bg-carbon-300' },
  { name: 'carbon-100', cls: 'bg-carbon-100' },
  { name: 'paper', cls: 'bg-paper border border-carbon-200' },
  { name: 'seproc', cls: 'bg-seproc' },
  { name: 'seproc-dark', cls: 'bg-seproc-dark' },
]

export default function DesignSystem() {
  return (
    <main>
      {/* Logos */}
      <section className="bg-blueprint py-20">
        <Container>
          <SectionHeading
            index="01"
            eyebrow="Identidad"
            title="Logo y marca"
            description="Versión vectorial del logo: se ve nítido a cualquier tamaño y se adapta al fondo."
          />
          <div className="mt-12 grid gap-px bg-carbon-200 sm:grid-cols-3">
            <div className="flex items-center justify-center bg-paper p-12">
              <Logo />
            </div>
            <div className="flex items-center justify-center bg-carbon-800 p-12">
              <Logo tone="light" />
            </div>
            <div className="flex items-center justify-center gap-6 bg-seproc p-12">
              <LogoMark className="h-14 w-auto text-carbon-700" title="Seproc" />
              <LogoMark className="h-8 w-auto text-carbon-950" />
            </div>
          </div>
        </Container>
      </section>

      {/* Colores */}
      <section className="py-20">
        <Container>
          <SectionHeading index="02" eyebrow="Color" title="Paleta" />
          <ul className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9">
            {palette.map((color) => (
              <li key={color.name}>
                <div className={`aspect-square ${color.cls}`} />
                <p className="mt-2 font-mono text-[0.7rem] text-carbon-600">{color.name}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Tipografía */}
      <section className="bg-carbon-900 bg-blueprint-dark py-20">
        <Container>
          <SectionHeading
            index="03"
            eyebrow="Tipografía"
            title="Construimos con precisión"
            description="Archivo para titulares, DM Sans para texto corrido y JetBrains Mono para anotaciones técnicas."
            tone="light"
          />
          <p className="mt-10 max-w-2xl font-sans text-base leading-relaxed text-carbon-300">
            Este es un párrafo de ejemplo en la fuente de texto. Debe leerse con comodidad
            en pantallas pequeñas y grandes, con un interlineado generoso y un ancho de
            línea moderado.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-seproc">
            Lat 14.6349° N / Lon 90.5069° W
          </p>
        </Container>
      </section>

      {/* Botones */}
      <section className="py-20">
        <Container>
          <SectionHeading index="04" eyebrow="Componentes" title="Botones" />
          <div className="mt-12 flex flex-wrap gap-4">
            <Button to="/">
              Ver proyectos <ArrowRight className="size-4" />
            </Button>
            <Button variant="dark">
              <Phone className="size-4" /> Contactar
            </Button>
            <Button variant="outline">Secundario</Button>
            <Button size="lg">Tamaño grande</Button>
            <Button disabled>Deshabilitado</Button>
          </div>
          <div className="mt-6 inline-flex gap-4 bg-carbon-800 p-6">
            <Button variant="outlineLight">Sobre fondo oscuro</Button>
          </div>
        </Container>
      </section>
    </main>
  )
}