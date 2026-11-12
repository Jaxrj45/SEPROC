import { Routes, Route } from 'react-router-dom'
import DesignSystem from './pages/DesignSystem'
import Container from './components/ui/Container'
import Logo from './components/ui/Logo'
import Button from './components/ui/Button'

function Placeholder() {
  return (
    <main className="bg-blueprint flex min-h-screen items-center">
      <Container className="flex flex-col items-start gap-10">
        <Logo className="w-56" />
        <Button to="/design-system">Ver sistema de diseño</Button>
      </Container>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Placeholder />} />
      <Route path="/design-system" element={<DesignSystem />} />
    </Routes>
  )
}