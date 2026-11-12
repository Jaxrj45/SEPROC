export const projects = [
  {
    slug: 'proyecto-referencia-01',
    title: 'Proyecto de referencia 01',
    category: 'Categoría por definir',
    image: null,
    featured: true,
  },
  {
    slug: 'proyecto-referencia-02',
    title: 'Proyecto de referencia 02',
    category: 'Categoría por definir',
    image: null,
    featured: true,
  },
  {
    slug: 'proyecto-referencia-03',
    title: 'Proyecto de referencia 03',
    category: 'Categoría por definir',
    image: null,
    featured: true,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)