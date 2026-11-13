const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(values) {
  const errors = {}

  const name = values.name.trim()
  const email = values.email.trim()
  const phone = values.phone.trim()
  const message = values.message.trim()

  if (name.length < 2) {
    errors.name = 'Escribe tu nombre.'
  }

  if (!email) {
    errors.email = 'Escribe tu correo electrónico.'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Escribe un correo válido, por ejemplo nombre@correo.com.'
  }

  if (phone) {
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 8 || digits.length > 15) {
      errors.phone = 'Escribe un teléfono válido (8 dígitos, o con código de país).'
    }
  }

  if (message.length < 10) {
    errors.message = 'Cuéntanos un poco más sobre tu proyecto (mínimo 10 caracteres).'
  } else if (message.length > 1500) {
    errors.message = 'El mensaje es demasiado largo (máximo 1500 caracteres).'
  }

  return errors
}