import { LoaderCircle } from 'lucide-react'

export default function RouteFallback() {
  return (
    <div role="status" className="flex min-h-[60vh] items-center justify-center text-carbon-500">
      <LoaderCircle className="size-8 animate-spin" aria-hidden="true" />
      <span className="sr-only">Cargando página</span>
    </div>
  )
}