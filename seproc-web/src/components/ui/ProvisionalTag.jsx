import { cn } from '../../utils/cn'

export default function ProvisionalTag({ tone = 'dark', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em]',
        tone === 'dark' ? 'border-carbon-700 text-carbon-700' : 'border-seproc text-seproc',
        className,
      )}
    >
      <span aria-hidden="true" className="size-1.5 bg-seproc" />
      Contenido provisional
    </span>
  )
}