import { PencilRuler, ClipboardList, HardHat, ClipboardCheck } from 'lucide-react'

export const services = [
  {
    id: 'diseno',
    title: 'Diseño arquitectónico',
    summary: 'Propuestas arquitectónicas pensadas para las necesidades de cada cliente.',
    icon: PencilRuler,
  },
  {
    id: 'planificacion',
    title: 'Planificación',
    summary: 'Planos, presupuestos y programación para construir con orden.',
    icon: ClipboardList,
  },
  {
    id: 'construccion',
    title: 'Construcción',
    summary: 'Ejecución de obra con control de calidad, tiempos y costos.',
    icon: HardHat,
  },
  {
    id: 'supervision',
    title: 'Supervisión',
    summary: 'Seguimiento técnico para asegurar que se construya lo diseñado.',
    icon: ClipboardCheck,
  },
]