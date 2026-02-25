export type TableKey = {
  PK: string
  SK: string
}

export type TableItem = TableKey & {
  [key: string]: unknown
}
