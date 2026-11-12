import { cn } from '../../utils/cn'


export function LogoMark({ className, title }) {
  return (
    <svg
      viewBox="0 0 383 179"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        d="M0 0H383V179H0Z M42 39H160V137H42Z M185 39H198V137H185Z M225 39H343V137H225Z"
      />
    </svg>
  )
}

const LETTERS = ['S', 'E', 'P', 'R', 'O', 'C']

export default function Logo({
  variant = 'full',
  tone = 'dark',
  showTagline = true,
  className,
}) {
  const main = tone === 'dark' ? 'text-carbon-700' : 'text-paper'
  const secondary = tone === 'dark' ? 'text-carbon-500' : 'text-carbon-300'

  if (variant === 'icon') {
    return <LogoMark title="Seproc" className={cn('h-8 w-auto', main, className)} />
  }

  return (
    <div
      className={cn('w-44 [container-type:inline-size]', main, className)}
      aria-label="Seproc, Servicios Profesionales de Construcción"
      role="img"
    >
      <LogoMark className="block h-auto w-full" />

      {/* Letras repartidas a todo el ancho del símbolo, como en el logo original */}
      <div
        aria-hidden="true"
        className="mt-[7cqw] flex justify-between font-display font-semibold leading-none text-[19cqw]"
      >
        {LETTERS.map((letter) => (
          <span key={letter}>{letter}</span>
        ))}
      </div>

      {showTagline && (
        <p
          aria-hidden="true"
          className={cn(
            'mt-[3cqw] whitespace-nowrap text-center uppercase leading-none tracking-[0.04em] text-[3.3cqw]',
            secondary,
          )}
        >
          Servicios profesionales de construcción
        </p>
      )}
    </div>
  )
}