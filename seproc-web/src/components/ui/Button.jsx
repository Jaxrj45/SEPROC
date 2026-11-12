import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

const base =
  'inline-flex items-center justify-center gap-2 font-medium uppercase tracking-wider text-sm ' +
  'transition-colors duration-200 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carbon-700 ' +
  'disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary: 'bg-seproc text-carbon-950 hover:bg-seproc-dark',
  dark: 'bg-carbon-800 text-paper hover:bg-carbon-950',
  outline: 'border border-carbon-700 text-carbon-800 hover:bg-carbon-800 hover:text-paper',
  outlineLight: 'border border-paper/40 text-paper hover:bg-paper hover:text-carbon-900',
}

const sizes = {
  md: 'h-12 px-7',
  lg: 'h-14 px-9',
}


export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }


  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}