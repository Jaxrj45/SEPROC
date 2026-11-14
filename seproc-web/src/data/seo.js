import { company } from './company'

export const siteUrl = (import.meta.env.VITE_SITE_URL ?? '').replace(/\/+$/, '')

export const seoDefaults = {
  title: `${company.name} | Arquitectura y construcción en Guatemala`,
  description:
    'Seproc ofrece diseño, planificación, ejecución y supervisión de proyectos de construcción en Guatemala. Conoce nuestros servicios y proyectos.',
  image: '/og-image.png',
}

export const pageSeo = {
  about: {
    title: 'Nosotros',
    description:
      'Conoce a Seproc, empresa de arquitectura y construcción en Guatemala, y su forma de trabajar: del diseño a la obra terminada con un solo equipo.',
    path: '/nosotros',
  },
  services: {
    title: 'Servicios',
    description:
      'Diseño arquitectónico, planificación, construcción y supervisión de obra. Un solo equipo a cargo de cada etapa de tu proyecto en Guatemala.',
    path: '/servicios',
  },
  projects: {
    title: 'Proyectos',
    description:
      'Explora el portafolio de proyectos diseñados, construidos y supervisados por Seproc en Guatemala: fotografías, descripciones y alcance de cada obra.',
    path: '/proyectos',
  },
  contact: {
    title: 'Contacto',
    description:
      'Solicita información o una cotización para tu proyecto de arquitectura y construcción. Escríbenos por formulario, correo, teléfono o WhatsApp.',
    path: '/contacto',
  },
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: company.name,
  description: company.description,
  telephone: company.phoneHref,
  email: company.email,
  areaServed: { '@type': 'Country', name: 'Guatemala' },
  ...(siteUrl ? { url: siteUrl } : {}),
}