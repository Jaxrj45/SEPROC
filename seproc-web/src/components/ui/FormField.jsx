import { cn } from '../../utils/cn'

const controlClasses =
  'w-full border bg-paper px-4 text-carbon-900 transition-colors placeholder:text-carbon-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carbon-700 disabled:opacity-60'

export default function FormField({
  as: Control = 'input',
  label,
  name,
  error,
  hint,
  optional = false,
  className,
  children,
  ...props
}) {
  const showHint = Boolean(hint) && !error
  const hintId = showHint ? `${name}-hint` : undefined
  const errorId = error ? `${name}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-2 flex items-baseline justify-between gap-4 font-mono text-xs uppercase tracking-[0.15em] text-carbon-700"
      >
        <span>{label}</span>
        {optional && (
          <span className="normal-case tracking-normal text-carbon-500">Opcional</span>
        )}
      </label>

      <Control
        id={name}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          controlClasses,
          Control === 'textarea' ? 'py-3' : 'h-12',
          error ? 'border-red-800' : 'border-carbon-300 hover:border-carbon-500',
        )}
        {...props}
      >
        {children}
      </Control>

      {showHint && (
        <p id={hintId} className="mt-2 text-sm text-carbon-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-800">
          {error}
        </p>
      )}
    </div>
  )
}