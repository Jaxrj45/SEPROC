import { PencilRuler, ClipboardList, HardHat, ClipboardCheck } from 'lucide-react'

export const servicesContent = {
  provisional: true,
  header: {
    index: '02',
    eyebrow: 'Servicios',
    title: 'Del diseño a la entrega de la obra',
    description: 'Un solo equipo a cargo de cada etapa de tu proyecto.',
  },
  cta: {
    title: '¿Necesitas una cotización?',
    text: 'Cuéntanos qué quieres construir y te orientamos sobre los siguientes pasos.',
  },
}

export const services = [
  {
    id: 'diseno',
    title: 'Diseño arquitectónico',
    summary: 'Propuestas arquitectónicas pensadas para las necesidades de cada cliente.',
    description:
      'Convertimos las necesidades del cliente en una propuesta arquitectónica clara, funcional y adaptada al terreno y al presupuesto.',
    includes: [
      'Estudio de necesidades y del terreno',
      'Anteproyecto',
      'Planos arquitectónicos',
      'Definición de materiales y acabados',
    ],
    icon: PencilRuler,
  },
  {
    id: 'planificacion',
    title: 'Planificación',
    summary: 'Planos, presupuestos y programación para construir con orden.',
    description:
      'Preparamos la información técnica y económica necesaria para construir con orden y sin improvisaciones.',
    includes: [
      'Planos constructivos',
      'Presupuesto de obra',
      'Cronograma de ejecución',
      'Especificaciones técnicas',
    ],
    icon: ClipboardList,
  },
  {
    id: 'construccion',
    title: 'Construcción',
    summary: 'Ejecución de obra con control de calidad, tiempos y costos.',
    description:
      'Ejecutamos la obra siguiendo lo planificado, con control de la calidad, los tiempos y los costos.',
    includes: [
      'Coordinación de personal y proveedores',
      'Control de calidad de materiales',
      'Seguimiento de avance y costos',
      'Entrega y cierre de obra',
    ],
    icon: HardHat,
  },
  {
    id: 'supervision',
    title: 'Supervisión',
    summary: 'Seguimiento técnico para asegurar que se construya lo diseñado.',
    description:
      'Damos seguimiento técnico para asegurar que cada etapa se construya conforme a los planos y las especificaciones.',
    includes: [
      'Visitas periódicas a la obra',
      'Revisión de procesos constructivos',
      'Informes de avance',
      'Verificación del cumplimiento del proyecto',
    ],
    icon: ClipboardCheck,
  },
]