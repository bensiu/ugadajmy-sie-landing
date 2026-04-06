import type { BlogItem } from '~~/app/types'
import { getRecordsList } from '~~/src/services/getRecordsList'

export default defineEventHandler(async (event): Promise<BlogItem[]> => {
  const { subject } = getQuery(event)

  return getRecordsList(
    event,
    {
      domain: 'BLOGS',
      gsiSearchKey: (
        ['mediacje'].includes(subject as string)
          ? `${subject as string}%`
          : subject as string
      ) || '',
      sorting: (a, b) => (a.counter as string) < (b.counter as string) ? 1 : -1,
      fromCache: false
    }
  ) as unknown as BlogItem[]
})
