import { cn } from '../../utils/cn'


export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  tone = 'dark',
  className,
}) {
  const onLight = tone === 'dark'

  return (
    <header className={cn('max-w-3xl', className)}>
      <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em]">
        {index && (
          <span className={onLight ? 'text-carbon-700' : 'text-seproc'}>{index}</span>
        )}
        <span
          aria-hidden="true"
          className={cn('h-px w-12', onLight ? 'bg-carbon-700' : 'bg-seproc')}
        />
        {eyebrow && (
          <span className={onLight ? 'text-carbon-500' : 'text-carbon-300'}>{eyebrow}</span>
        )}
      </div>

      <h2
        className={cn(
          'mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl',
          onLight ? 'text-carbon-900' : 'text-paper',
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed',
            onLight ? 'text-carbon-600' : 'text-carbon-300',
          )}
        >
          {description}
        </p>
      )}
    </header>
  )
}