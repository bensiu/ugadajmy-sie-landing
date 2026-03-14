import { page as terapia } from '~~/app/data/terapia-dla-par/general'
import { page as coaching } from '~~/app/data/coaching/general'
import { page as mediacje } from '~~/app/data/mediacje/general'
import { page as szkolenia } from '~~/app/data/szkolenia/general'

export default defineSitemapEventHandler(() => {
  const urls: string[] = [
    ...(terapia.kinds?.items?.map(item => item.path) || []),
    ...(coaching.kinds?.items?.map(item => item.path) || []),
    ...(mediacje.kinds?.items?.map(item => item.path) || []),
    ...(szkolenia.kinds?.items?.map(item => item.path) || [])
  ]

  return [
    { loc: '/', images: [{ loc: '/images/Aleksandra_Dubiel.jpg' }] },
    ...urls.map(item => ({ loc: item }))
  ]
})
