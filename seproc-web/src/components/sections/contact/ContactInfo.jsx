import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Button from '../../ui/Button'
import { company, whatsappUrl } from '../../../data/company'
import { contactContent } from '../../../data/contact'

const items = [
  { icon: Phone, label: 'Teléfono', value: company.phone, href: `tel:${company.phoneHref}` },
  { icon: Mail, label: 'Correo', value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: 'Dirección', value: company.address },
]

export default function ContactInfo() {
  return (
    <aside
      aria-labelledby="contacto-directo"
      className="bg-carbon-900 bg-blueprint-dark p-8 text-carbon-300 sm:p-10"
    >
      <h2
        id="contacto-directo"
        className="font-mono text-xs uppercase tracking-[0.2em] text-seproc"
      >
        {contactContent.info.title}
      </h2>

      <ul className="mt-8 space-y-7">
        {items.map(({ icon: Icon, label, value, href }) => (
          <li key={label} className="flex items-start gap-4">
            <Icon className="mt-1 size-5 shrink-0 text-carbon-400" />
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-carbon-400">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="mt-1 block break-words text-lg text-paper transition-colors hover:text-seproc"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-1 text-lg text-paper">{value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <Button
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 w-full"
      >
        <MessageCircle className="size-4" /> Escribir por WhatsApp
      </Button>
    </aside>
  )
}