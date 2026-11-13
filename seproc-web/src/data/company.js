export const company = {
  name: 'Seproc',
  fullName: 'Seproc, Servicios Profesionales de Construcción',
  description:
    'Diseño, planificación, ejecución y supervisión de proyectos de construcción.',
  phone: '+502 5536 9711',
  phoneHref: '+50255369711',
  email: 'Seprocarquitectura@gmail.com',
  address: 'Dirección por definir, Guatemala',
  whatsapp: '50255369711',
  whatsappMessage: 'Hola, me gustaría solicitar información sobre sus servicios.',
}

export const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  company.whatsappMessage,
)}`