import type { DetailPageProps } from '~/types'

export default function (pages: { [kind: string]: DetailPageProps }): DetailPageProps {
  const { params } = useRoute()
  const kind = (params['kind'] as string).replaceAll('-', '_')

  if (!pages[kind]) {
    console.log('No such kind of page :', kind)
    throw createError({
      statusMessage: 'Page Not Found',
      statusCode: 404
    })
  }
  const page = pages[kind]

  if (page?.seo) {
    usePageSpecificSeoMeta(page.seo)
  }

  return page
}
