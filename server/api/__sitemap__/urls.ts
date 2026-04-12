import { page as terapia } from '~~/app/data/terapia-dla-par/general'
import { page as coaching } from '~~/app/data/coaching/general'
import { page as mediacje } from '~~/app/data/mediacje/general'
import { page as szkolenia } from '~~/app/data/szkolenia/general'

import type { BlogItem } from '~~/app/types'
import { getRecordsList } from '~~/src/services/getRecordsList'

export default defineSitemapEventHandler(async (event) => {
  const urls: string[] = [
    ...(szkolenia.kinds?.items?.map(item => item.link || '') || []),
    ...(coaching.kinds?.items?.map(item => item.link || '') || []),
    ...(mediacje.kinds?.items?.map(item => item.link || '') || []),
    ...(terapia.kinds?.items?.map(item => item.link || '') || [])
  ].filter(item => item)

  const blogs = await getRecordsList(
    event,
    {
      domain: 'BLOGS',
      select: ['silos', 'slug', 'active'],
      fromCache: false
    }
  )
    .then(results => results.filter(item => item.active)) as unknown as BlogItem[]

  return [
    { loc: '/', images: [{ loc: '/images/Aleksandra_Dubiel.jpg' }] },
    ...urls.map(item => ({ loc: item })),
    ...blogs.map(item => `/skarbnica-wiedzy/${item.silos}/${item.slug}`)
  ]
})
