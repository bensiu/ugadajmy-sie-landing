import type { BlogItem } from '~~/app/types'
import { getRecordsList } from '~~/src/services/getRecordsList'

export default defineEventHandler(async (event): Promise<BlogItem[]> => {
  const { subject } = getQuery(event)
  const { all } = getQuery(event)

  return getRecordsList(
    event,
    {
      domain: 'BLOGS',
      gsiSearchKey: (
        ['mediacje', 'coaching', 'szkolenia', 'terapia-dla-par'].includes(subject as string)
          ? `${subject as string}%`
          : subject as string
      ) || '',
      sorting: (a, b) => (a.counter as string) < (b.counter as string) ? 1 : -1,
      fromCache: false
    }
  )
    .then(results => all && all === 'true' ? results : results.filter(item => item.active))
    .then(results => all && all === 'true' ? results : results.slice(0, 6)) as unknown as BlogItem[]
})
