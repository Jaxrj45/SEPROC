import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Photo from './Photo'

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/proyectos/${project.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-carbon-700"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-carbon-200">
        <Photo
          src={project.image}
          alt={project.title}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute right-0 top-0 flex size-12 items-center justify-center bg-seproc text-carbon-950 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <ArrowUpRight className="size-5" />
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 border-t border-carbon-300 pt-4">
        <h3 className="font-display text-xl font-semibold tracking-tight text-carbon-900">
          {project.title}
        </h3>
        <p className="shrink-0 pt-1 font-mono text-xs uppercase tracking-[0.15em] text-carbon-500">
          {project.category}
        </p>
      </div>
    </Link>
  )
}