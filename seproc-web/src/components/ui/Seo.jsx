import { useEffect } from 'react'
import { company } from '../../data/company'
import { seoDefaults, siteUrl } from '../../data/seo'
import {
  removeCanonical,
  removeJsonLd,
  removeMeta,
  setCanonical,
  setJsonLd,
  setMeta,
} from '../../utils/head'

export default function Seo({ title, description, path = '/', image, noindex = false, jsonLd }) {
  const jsonLdText = jsonLd ? JSON.stringify(jsonLd) : null

  useEffect(() => {
    const fullTitle = title ? `${title} | ${company.name}` : seoDefaults.title
    const metaDescription = description ?? seoDefaults.description
    const url = siteUrl && !noindex ? `${siteUrl}${path}` : null
    const imageUrl = siteUrl ? `${siteUrl}${image ?? seoDefaults.image}` : null

    document.title = fullTitle
    setMeta('name', 'description', metaDescription)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', metaDescription)
    setMeta('name', 'twitter:card', imageUrl ? 'summary_large_image' : 'summary')

    if (url) {
      setMeta('property', 'og:url', url)
      setCanonical(url)
    } else {
      removeMeta('property', 'og:url')
      removeCanonical()
    }

    if (imageUrl) {
      setMeta('property', 'og:image', imageUrl)
    } else {
      removeMeta('property', 'og:image')
    }

    if (noindex) {
      setMeta('name', 'robots', 'noindex')
    } else {
      removeMeta('name', 'robots')
    }

    if (jsonLdText) {
      setJsonLd(jsonLdText)
    } else {
      removeJsonLd()
    }
  }, [title, description, path, image, noindex, jsonLdText])

  return null
}