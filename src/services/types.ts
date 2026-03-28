export type TableKey = {
  PK: string
  SK: string
}

export type TableItem = TableKey & {
  [key: string]: unknown
}

export type ReducedTableItem = Omit<TableItem, 'PK1' | 'SK1' | 'PK' | 'SK'>
