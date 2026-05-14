import type { FaqItem } from '~~/app/types'
import { getRecordsList } from '~~/src/services/getRecordsList'

export default defineEventHandler(async (event): Promise<FaqItem[]> => {
  const { subject } = getQuery(event)

  return getRecordsList(
    event,
    {
      domain: 'FAQS',
      gsiSearchKey: (subject as string) || '',
      sorting: subject
        ? (a, b) => (a.counter as number) < (b.counter as number) ? 1 : -1
        : (a, b) => ((a.slug as string) || '') > ((b.slug as string) || '') ? 1 : -1,
      fromCache: false
    }
  ) as unknown as FaqItem[]
})
