import type { SEO } from '~/types'

export default function (seo: SEO) {
  const { path } = useRoute()

  useSeoMeta({
    title: seo.title,
    description: seo.description
  })
  useHead({
    link: [
      { rel: 'canonical', href: `https://ugadajmysie.pl${path}` }
    ]
  })
}
