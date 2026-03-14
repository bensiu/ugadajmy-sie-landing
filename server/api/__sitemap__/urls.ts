import { page as terapia } from '~~/app/data/terapia-dla-par/general'
import { page as coaching } from '~~/app/data/coaching/general'
import { page as mediacje } from '~~/app/data/mediacje/general'
import { page as szkolenia } from '~~/app/data/szkolenia/general'

export default defineSitemapEventHandler(() => {
  const urls: string[] = [
    ...(szkolenia.kinds?.items?.map(item => item.link || '') || []),
    ...(coaching.kinds?.items?.map(item => item.link || '') || []),
    ...(mediacje.kinds?.items?.map(item => item.link || '') || []),
    ...(terapia.kinds?.items?.map(item => item.link || '') || [])
  ].filter(item => item)

  return [
    { loc: '/', images: [{ loc: '/images/Aleksandra_Dubiel.jpg' }] },
    ...urls.map(item => ({ loc: item }))
  ]
})
