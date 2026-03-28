import type { ReducedTableItem } from '~~/src/services/types'
import { getRecordsList } from '~~/src/services/getRecordsList'

export default defineEventHandler(async (event): Promise<ReducedTableItem[]> => {
  const { all } = getQuery(event)

  return getRecordsList(
    event,
    {
      domain: 'WIADOMOSCI-MEDIACJE',
      sorting: (a, b) => (a.published as string) < (b.published as string) ? 1 : -1
    }
  )
    .then((data) => {
      if (all === 'true') {
        return data
      }

      return data.filter(item => item.approved)
    })
})
