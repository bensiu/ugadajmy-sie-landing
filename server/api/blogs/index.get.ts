import type { FaqItem } from '~~/app/types'
import { getRecordsList } from '~~/src/services/getRecordsList'

export default defineEventHandler(async (event): Promise<FaqItem[]> => {
  const { subject } = getQuery(event)

  return getRecordsList(
    event,
    {
      domain: 'BLOGS',
      gsiSearchKey: (subject as string) || '',
      sorting: (a, b) => (a.counter as string) < (b.counter as string) ? 1 : -1,
      fromCache: false
    }
  ) as unknown as FaqItem[]
})
