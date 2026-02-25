import type { TableItem } from './types'

export function cleanDynamoDbIndexes(data: TableItem[]): Omit<TableItem, 'PK1' | 'SK1' | 'PK' | 'SK'>[] {
  return data.map(
    item => ({
      ...item,
      PK1: undefined,
      SK1: undefined,
      PK: undefined,
      SK: undefined
    })
  )
}
