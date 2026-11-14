function upsertElement(selector, tag, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement(tag)
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value))
  return element
}

export function setMeta(attribute, key, content) {
  upsertElement(`meta[${attribute}="${key}"]`, 'meta', { [attribute]: key, content })
}

export function removeMeta(attribute, key) {
  document.head.querySelector(`meta[${attribute}="${key}"]`)?.remove()
}

export function setCanonical(href) {
  upsertElement('link[rel="canonical"]', 'link', { rel: 'canonical', href })
}

export function removeCanonical() {
  document.head.querySelector('link[rel="canonical"]')?.remove()
}

export function setJsonLd(text) {
  const element = upsertElement('script#json-ld', 'script', {
    id: 'json-ld',
    type: 'application/ld+json',
  })
  element.textContent = text
}

export function removeJsonLd() {
  document.getElementById('json-ld')?.remove()
}