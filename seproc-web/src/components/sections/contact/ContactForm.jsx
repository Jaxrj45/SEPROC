import { useEffect, useRef } from 'react'
import { CircleCheck, LoaderCircle, TriangleAlert } from 'lucide-react'
import Button from '../../ui/Button'
import FormField from '../../ui/FormField'
import useContactForm from '../../../hooks/useContactForm'
import { contactContent } from '../../../data/contact'

export default function ContactForm() {
  const { values, errors, status, handleChange, handleSubmit, reset } = useContactForm()
  const { form } = contactContent
  const feedbackRef = useRef(null)
  const sending = status === 'sending'

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      feedbackRef.current?.focus()
    }
  }, [status])

  if (status === 'success') {
    return (
      <div
        ref={feedbackRef}
        tabIndex={-1}
        role="status"
        className="border border-carbon-300 bg-paper p-8 outline-none sm:p-12"
      >
        <span className="flex size-12 items-center justify-center bg-seproc text-carbon-950">
          <CircleCheck className="size-6" />
        </span>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-carbon-900">
          {form.success.title}
        </h2>
        <p className="mt-3 max-w-md text-lg leading-relaxed text-carbon-600">{form.success.text}</p>
        <Button variant="outline" onClick={reset} className="mt-8">
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-busy={sending} className="space-y-6">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-carbon-900">
        {form.title}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Nombre"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FormField
          label="Correo electrónico"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Teléfono"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          optional
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <FormField
          as="select"
          label="Tipo de proyecto"
          name="projectType"
          optional
          value={values.projectType}
          onChange={handleChange}
        >
          <option value="">Selecciona una opción</option>
          {form.projectTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </FormField>
      </div>

      <FormField
        as="textarea"
        label="Mensaje"
        name="message"
        rows={6}
        hint="Cuéntanos qué quieres construir, dónde y cualquier detalle importante."
        value={values.message}
        onChange={handleChange}
        error={errors.message}
      />

      <div className="hidden" aria-hidden="true">
        <input
          type="checkbox"
          name="botcheck"
          checked={values.botcheck}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === 'error' && (
        <div
          ref={feedbackRef}
          tabIndex={-1}
          role="alert"
          className="flex gap-3 border border-red-800 bg-red-50 p-4 text-red-900 outline-none"
        >
          <TriangleAlert className="mt-0.5 size-5 shrink-0" />
          <p>{form.error}</p>
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={sending}>
          {sending ? (
            <>
              <LoaderCircle className="size-4 animate-spin" /> Enviando…
            </>
          ) : (
            'Enviar mensaje'
          )}
        </Button>
        <p className="max-w-xs text-sm text-carbon-500">{form.privacyNote}</p>
      </div>
    </form>
  )
}