import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../../data/company'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex size-14 items-center justify-center bg-seproc text-carbon-950 shadow-lg transition-colors duration-200 hover:bg-seproc-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carbon-700 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="size-6" />
    </a>
  )
}