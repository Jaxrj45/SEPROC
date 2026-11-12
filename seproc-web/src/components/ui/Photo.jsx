import { cn } from '../../utils/cn'
import HeroBlueprint from './HeroBlueprint'

export default function Photo({
  src,
  alt = '',
  label = 'Imagen de referencia',
  variant = 'card',
  priority = false,
  className,
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className={cn('h-full w-full object-cover', className)}
      />
    )
  }

  return (
    <div
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      className={cn('relative h-full w-full overflow-hidden bg-carbon-800 bg-blueprint-dark', className)}
    >
      {variant === 'hero' ? (
        <HeroBlueprint />
      ) : (
        <svg
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full text-carbon-500 [&_*]:[vector-effect:non-scaling-stroke]"
        >
          <path d="M0 250H400" />
          <path d="M80 110H260" />
          <rect x="90" y="110" width="160" height="140" />
          <rect x="250" y="170" width="90" height="80" />
          <rect x="110" y="130" width="30" height="34" />
          <rect x="160" y="130" width="30" height="34" />
          <rect x="210" y="130" width="30" height="34" />
          <rect x="110" y="185" width="30" height="34" />
          <rect x="210" y="185" width="30" height="34" />
          <rect x="158" y="190" width="34" height="60" />
          <rect x="270" y="195" width="50" height="30" />
          <path d="M90 275H250M90 270V280M250 270V280" />
        </svg>
      )}
      <span className="absolute bottom-3 right-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-carbon-300">
        {label}
      </span>
    </div>
  )
}