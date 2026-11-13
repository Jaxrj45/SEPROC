import { useState } from 'react'
import { validateContactForm } from '../utils/validateContactForm'

const ENDPOINT = 'https://api.web3forms.com/submit'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
  botcheck: false,
}

export default function useContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setErrors((current) => (current[name] ? { ...current, [name]: undefined } : current))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'sending') return

    const form = event.currentTarget
    const nextErrors = validateContactForm(values)
    setErrors(nextErrors)

    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      form.elements.namedItem(firstInvalid)?.focus()
      return
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
    if (!accessKey) {
      console.error('Falta la variable VITE_WEB3FORMS_KEY en el archivo .env')
      setStatus('error')
      return
    }

    setStatus('sending')

    const payload = new FormData()
    payload.append('access_key', accessKey)
    payload.append('subject', `Nueva solicitud desde el sitio web: ${values.name.trim()}`)
    payload.append('from_name', 'Sitio web Seproc')
    payload.append('name', values.name.trim())
    payload.append('email', values.email.trim())
    if (values.phone.trim()) payload.append('telefono', values.phone.trim())
    if (values.projectType) payload.append('tipo_de_proyecto', values.projectType)
    payload.append('message', values.message.trim())
    if (values.botcheck) payload.append('botcheck', 'true')

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
        signal: AbortSignal.timeout(15000),
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'No se pudo enviar el formulario')
      }

      setValues(initialValues)
      setStatus('success')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  const reset = () => {
    setErrors({})
    setStatus('idle')
  }

  return { values, errors, status, handleChange, handleSubmit, reset }
}