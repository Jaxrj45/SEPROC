import { useState } from 'react'
import { Maximize2 } from 'lucide-react'
import Container from '../../ui/Container'
import Photo from '../../ui/Photo'
import Reveal from '../../ui/Reveal'
import SectionHeading from '../../ui/SectionHeading'
import Lightbox from '../../ui/Lightbox'

export default function ProjectGallery({ images }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-carbon-100 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading index="03.2" eyebrow="Galería" title="Imágenes del proyecto" />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <Reveal as="li" key={image.alt} delay={(index % 3) * 100}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Ampliar imagen ${index + 1} de ${images.length}`}
                className="group relative block aspect-[4/3] w-full overflow-hidden bg-carbon-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-carbon-700"
              >
                <Photo
                  src={image.src}
                  alt={image.alt}
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 flex size-9 items-center justify-center bg-carbon-950/70 text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 className="size-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </Container>

      <Lightbox
        images={images}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onChange={setOpenIndex}
      />
    </section>
  )
}