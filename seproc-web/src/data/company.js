export const company = {
  name: 'SEPROC',
  fullName: 'SEPROC, Servicios Profesionales de Construcción',
  description:
    'Diseño, planificación, ejecución y supervisión de proyectos de construcción.',
  phone: '+502 5536 9711',
  phoneHref: '+50200000000',
  email: 'correo@ejemplo.com',
  address: 'Dirección por definir, Guatemala',
  whatsapp: '50255369711',
  whatsappMessage: 'Hola, me gustaría solicitar información sobre sus servicios.',
}

export const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  company.whatsappMessage,
)}`