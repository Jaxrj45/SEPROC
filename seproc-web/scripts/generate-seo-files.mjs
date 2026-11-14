import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { projects } from '../src/data/projects.js'

if (existsSync('.env')) process.loadEnvFile()

const siteUrl = (process.env.VITE_SITE_URL ?? '').replace(/\/+$/, '')

const staticPaths = ['/', '/nosotros', '/servicios', '/proyectos', '/contacto']
const paths = [...staticPaths, ...projects.map((project) => `/proyectos/${project.slug}`)]

mkdirSync('public', { recursive: true })

const robotsLines = ['User-agent: *', 'Allow: /']

if (siteUrl) {
  const today = new Date().toISOString().slice(0, 10)
  const entries = paths
    .map(
      (path) =>
        `  <url>\n    <loc>${siteUrl}${path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
    )
    .join('\n')

  writeFileSync(
    'public/sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
  )
  robotsLines.push('', `Sitemap: ${siteUrl}/sitemap.xml`)
} else {
  console.warn('VITE_SITE_URL no está definida: se genera robots.txt sin sitemap.xml')
}

writeFileSync('public/robots.txt', `${robotsLines.join('\n')}\n`)