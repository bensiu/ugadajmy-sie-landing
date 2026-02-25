import type { H3Event, EventHandlerRequest } from 'h3'
import type { TableItem } from './types'
import DynamoDb from './aws/dynamodb'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

interface GetRecordOptions {
  domain: string
  default: Omit<TableItem, 'PK1' | 'SK1' | 'PK' | 'SK'>
}

export async function getRecord(
  event: H3Event<EventHandlerRequest>,
  options: GetRecordOptions
) {
  const id = getRouterParam(event, 'id')

  const record = await DynamoDb.getItem(
    APP_DATA_TABLE_NAME,
    {
      PK: `${options.domain.toUpperCase()};ID:${id}`,
      SK: 'A'
    }
  )

  if (!record) return options.default

  return {
    ...options.default,
    ...record,
    PK1: undefined,
    SK1: undefined,
    PK: undefined,
    SK: undefined
  }
}
