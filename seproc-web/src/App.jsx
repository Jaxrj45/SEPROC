import { Routes, Route, Link } from 'react-router-dom'
import { Building2 } from 'lucide-react'

function PruebaInicio() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center gap-6 p-6">
      <Building2 className="size-12 text-yellow-300" />
      <h1 className="text-4xl font-semibold tracking-widest">SEPROC</h1>
      <p className="text-neutral-400">Fase 0: entorno funcionando</p>
      <Link to="/otra" className="text-yellow-300 underline underline-offset-4">
        Probar navegación
      </Link>
    </main>
  )
}

function PruebaOtra() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900 flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-semibold">La navegación funciona</h1>
      <Link to="/" className="underline underline-offset-4">Volver</Link>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PruebaInicio />} />
      <Route path="/otra" element={<PruebaOtra />} />
    </Routes>
  )
}