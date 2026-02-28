import type { H3Event, EventHandlerRequest } from 'h3'
import type { TableItem } from './types'
import DynamoDb from './aws/dynamodb'
import { cleanDynamoDbIndexes } from './cleanDynamoDbIndexes'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

interface GetRecordsListOptions {
  domain: string
  sorting?: ((a: TableItem, b: TableItem) => number)
}

export async function getRecordsList(
  event: H3Event<EventHandlerRequest>,
  options: GetRecordsListOptions
) {
  const results = await DynamoDb.query(
    APP_DATA_TABLE_NAME,
    options.domain.toUpperCase(),
    null,
    'GSI1',
    null,
    options.domain
  )

  if (options.sorting) {
    results.sort(options.sorting)
  }

  return cleanDynamoDbIndexes(results)
}
