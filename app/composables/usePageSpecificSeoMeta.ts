import type { SEO } from '~/types'
import { schemaMarkup } from '../schema-markup'

export default function (seo: SEO, path: string = '') {
  if (!path) {
    path = useRoute().path
  }
  const script = seo.markup
    ? [
        { type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup(seo.markup)) }
      ]
    : []

  useSeoMeta({
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords
  })

  useHead(() => ({
    link: [
      { rel: 'canonical', href: `https://ugadajmysie.pl${path}` }
    ],
    script
  }))
}
