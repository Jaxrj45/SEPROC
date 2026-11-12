import { cn } from '../../../utils/cn'

export default function ProjectFilters({ categories, active, onChange }) {
  const options = [{ id: 'todos', label: 'Todos' }, ...categories]

  return (
    <div role="group" aria-label="Filtrar proyectos por categoría" className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option.id === active

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            aria-pressed={isActive}
            className={cn(
              'h-11 border px-5 font-mono text-xs uppercase tracking-[0.15em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carbon-700',
              isActive
                ? 'border-carbon-900 bg-carbon-900 text-paper'
                : 'border-carbon-300 text-carbon-600 hover:border-carbon-700 hover:text-carbon-900',
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}