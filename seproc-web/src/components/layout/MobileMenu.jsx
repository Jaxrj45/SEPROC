import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Button from '../ui/Button'
import { navLinks } from '../../data/navigation'
import { whatsappUrl } from '../../data/company'
import { cn } from '../../utils/cn'

export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <div
      id="menu-movil"
      aria-hidden={!open}
      className={cn(
        'fixed inset-0 z-40 flex flex-col bg-carbon-950 bg-blueprint-dark px-6 pb-10 pt-28 transition-[opacity,visibility] duration-300 lg:hidden',
        open ? 'visible opacity-100' : 'invisible opacity-0',
      )}
    >
      <nav aria-label="Navegación principal móvil">
        <ul className="flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    'flex items-baseline gap-4 border-b border-carbon-800 py-4 font-display text-4xl font-semibold tracking-tight transition-colors',
                    isActive ? 'text-seproc' : 'text-paper hover:text-seproc',
                  )
                }
              >
                <span className="font-mono text-xs tracking-[0.2em] text-carbon-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto flex flex-col gap-3">
        <Button to="/contacto" onClick={onClose} size="lg">
          Solicitar cotización
        </Button>
        <Button
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlineLight"
          size="lg"
        >
          <MessageCircle className="size-4" /> WhatsApp
        </Button>
      </div>
    </div>
  )
}