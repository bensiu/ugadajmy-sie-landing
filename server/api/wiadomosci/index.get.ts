import type { TableItem } from '~~/src/services/types'
import { getRecordsList } from '~~/src/services/getRecordsList'

export default defineEventHandler(async (event): Promise<Omit<TableItem, 'PK1' | 'SK1' | 'PK' | 'SK'>[]> => {
  return getRecordsList(
    event,
    {
      domain: 'WIADOMOSCI-MEDIACJE',
      sorting: (a, b) => (a.published as string) < (b.published as string) ? 1 : -1
    }
  )
})
