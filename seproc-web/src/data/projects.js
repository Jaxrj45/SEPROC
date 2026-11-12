export const projectCategories = [
  { id: 'residencial', label: 'Residencial' },
  { id: 'comercial', label: 'Comercial' },
  { id: 'remodelacion', label: 'Remodelación' },
]

export const projectsContent = {
  provisional: true,
  header: {
    index: '03',
    eyebrow: 'Proyectos',
    title: 'Del plano a la obra, en cada proyecto',
    description: 'Una muestra de los trabajos diseñados y construidos por Seproc.',
  },
  cta: {
    title: 'Tu proyecto puede ser el siguiente',
    text: 'Cuéntanos tu idea y la convertimos en obra.',
  },
}

function createGallery(title, count) {
  return Array.from({ length: count }, (_, index) => ({
    src: null,
    alt: `${title}, imagen de referencia ${index + 1}`,
  }))
}

function createPlaceholderProject(number, category, featured = false) {
  const label = String(number).padStart(2, '0')
  const title = `Proyecto de referencia ${label}`

  return {
    slug: `proyecto-referencia-${label}`,
    title,
    category,
    image: null,
    featured,
    summary: 'Descripción breve del proyecto, pendiente de recibir la información real.',
    description: [
      'Espacio reservado para describir el proyecto: las necesidades del cliente, la solución propuesta y el proceso de construcción.',
      'Aquí se detallan el alcance de la intervención y los aspectos más relevantes de la obra.',
    ],
    facts: [
      { label: 'Ubicación', value: 'Por definir' },
      { label: 'Año', value: 'Por definir' },
      { label: 'Área', value: 'Por definir' },
      { label: 'Alcance', value: 'Por definir' },
    ],
    gallery: createGallery(title, 6),
  }
}

export const projects = [
  createPlaceholderProject(1, 'residencial', true),
  createPlaceholderProject(2, 'comercial', true),
  createPlaceholderProject(3, 'remodelacion', true),
  createPlaceholderProject(4, 'residencial'),
  createPlaceholderProject(5, 'comercial'),
  createPlaceholderProject(6, 'remodelacion'),
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}

export function getCategoryLabel(categoryId) {
  return projectCategories.find((category) => category.id === categoryId)?.label ?? categoryId
}