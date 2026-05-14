import type { DetailPageProps, FaqItemBase } from '~/types'
import { faqs } from '~/data/faqs'

export default function (pages: { [kind: string]: DetailPageProps }): DetailPageProps {
  const { params, path: path } = useRoute()
  const kind = (params['kind'] as string).replaceAll('-', '_')

  if (!pages[kind]) {
    console.log('No such kind of page :', kind)
    throw createError({
      statusMessage: 'Page Not Found',
      statusCode: 404
    })
  }
  const page = pages[kind]

  if (page.frequentlyAskedQuestions) {
    page.frequentlyAskedQuestions = {
      title: page.frequentlyAskedQuestions?.title || '',
      variant: page.frequentlyAskedQuestions?.variant || 'subtle',
      questions: faqs
        .filter(
          item => item.silos === page.silos
        )
        .map(
          (item: FaqItemBase) => ({
            label: item.title,
            content: item.content,
            slug: item.slug
          })
        )
    }
  }

  if (page?.seo) {
    usePageSpecificSeoMeta(page.seo, path, faqs)
  }

  return page
}
