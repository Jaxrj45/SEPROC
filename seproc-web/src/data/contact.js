import { projectCategories } from './projects'

export const contactContent = {
  provisional: true,
  header: {
    index: '04',
    eyebrow: 'Contacto',
    title: 'Hablemos de tu proyecto',
    description: 'Cuéntanos qué quieres construir y te responderemos.',
  },
  form: {
    title: 'Solicita información o una cotización',
    projectTypes: [
      ...projectCategories.map((category) => ({ value: category.label, label: category.label })),
      { value: 'Otro', label: 'Otro' },
    ],
    privacyNote: 'Usaremos tus datos únicamente para responder a tu solicitud.',
    success: {
      title: 'Mensaje enviado',
      text: 'Gracias por escribirnos. Revisaremos tu solicitud y te contactaremos pronto.',
    },
    error: 'No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos por WhatsApp.',
  },
  info: {
    title: 'Contacto directo',
  },
}