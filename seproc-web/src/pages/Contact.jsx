import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import ProvisionalTag from '../components/ui/ProvisionalTag'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import ContactForm from '../components/sections/contact/ContactForm'
import ContactInfo from '../components/sections/contact/ContactInfo'
import { contactContent } from '../data/contact'
import { pageSeo } from '../data/seo'

export default function Contact() {
  const { header, provisional } = contactContent

  return (
    <>
      <Seo {...pageSeo.contact} />
      <PageHeader
        index={header.index}
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      >
        {provisional && <ProvisionalTag />}
      </PageHeader>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9">
            <ContactInfo />
          </Reveal>
        </Container>
      </section>
    </>
  )
}