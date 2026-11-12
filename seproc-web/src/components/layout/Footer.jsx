import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import { navLinks } from '../../data/navigation'
import { company } from '../../data/company'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-carbon-950 bg-blueprint-dark text-carbon-300">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo tone="light" className="w-52" />
          <p className="mt-8 max-w-sm leading-relaxed">{company.description}</p>
        </div>

        <nav aria-label="Navegación del pie de página" className="md:col-span-3 md:col-start-7">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-seproc">
            Navegación
          </h2>
          <ul className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-seproc">
            Contacto
          </h2>
          <ul className="mt-5 flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-carbon-400" />
              <a href={`tel:${company.phoneHref}`} className="transition-colors hover:text-paper">
                {company.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-carbon-400" />
              <a href={`mailto:${company.email}`} className="transition-colors hover:text-paper">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-carbon-400" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-carbon-800">
        <Container className="flex flex-col gap-2 py-6 text-sm text-carbon-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. Todos los derechos reservados.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em]">Guatemala</p>
        </Container>
      </div>
    </footer>
  )
}