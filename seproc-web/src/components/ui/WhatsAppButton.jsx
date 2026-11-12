import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../../data/company'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex size-14 items-center justify-center border border-carbon-700 bg-carbon-900 text-seproc shadow-lg transition-colors duration-200 hover:border-seproc hover:bg-seproc hover:text-carbon-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-carbon-500 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="size-6" />
    </a>
  )
}