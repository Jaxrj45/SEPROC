import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import WhatsAppButton from '../ui/WhatsAppButton'
import { cn } from '../../utils/cn'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-seproc focus:px-4 focus:py-2 focus:text-carbon-950"
      >
        Saltar al contenido
      </a>
      <Navbar overHero={isHome} />
      <main id="contenido" className={cn('flex-1', !isHome && 'pt-20')}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}