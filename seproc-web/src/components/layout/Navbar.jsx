import { useCallback, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'
import useScrolled from '../../hooks/useScrolled'
import { navLinks } from '../../data/navigation'
import { cn } from '../../utils/cn'

export default function Navbar({ overHero }) {
  const scrolled = useScrolled(24)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const light = (overHero && !scrolled) || menuOpen

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
          light
            ? 'border-transparent bg-transparent'
            : 'border-carbon-200 bg-paper/95 backdrop-blur',
        )}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link to="/" aria-label="Seproc, ir al inicio" onClick={closeMenu}>
            <Logo variant="icon" tone={light ? 'light' : 'dark'} className="h-9" />
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            <nav aria-label="Navegación principal">
              <ul className="flex items-center gap-9">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        cn(
                          "relative py-2 text-sm font-medium uppercase tracking-wider transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-seproc after:transition-transform after:duration-300 after:content-['']",
                          isActive
                            ? 'after:scale-x-100'
                            : 'after:scale-x-0 hover:after:scale-x-100',
                          light
                            ? isActive
                              ? 'text-paper'
                              : 'text-carbon-300 hover:text-paper'
                            : isActive
                              ? 'text-carbon-900'
                              : 'text-carbon-600 hover:text-carbon-900',
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Button to="/contacto" variant={light ? 'primary' : 'dark'}>
              Cotizar
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            className={cn(
              'flex size-11 items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-seproc lg:hidden',
              light ? 'text-paper' : 'text-carbon-900',
            )}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  )
}