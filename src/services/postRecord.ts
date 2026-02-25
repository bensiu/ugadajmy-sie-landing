import type { H3Event, EventHandlerRequest } from 'h3'
import type { TableItem } from './types'
import DynamoDb from './aws/dynamodb'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

interface PostRecordOptions {
  domain: string
}

export async function postRecord(
  event: H3Event<EventHandlerRequest>,
  options: PostRecordOptions
): Promise<TableItem> {
  const body = await readBody(event)

  if (!body.id) {
    const ids = await DynamoDb.query(
      APP_DATA_TABLE_NAME,
      options.domain.toUpperCase(),
      null,
      'GSI1',
      ['id'],
      options.domain
    )

    const id = ids.reduce((result: number, item): number => {
      const extract = parseInt(item.id as string)

      return extract > result ? extract : result
    }, 0) + 1

    body.id = '' + id
  }

  const payload: TableItem = {
    PK: `${options.domain.toUpperCase()};ID:${body.id}`,
    SK: 'A',
    PK1: options.domain.toUpperCase(),
    SK1: `ID:${body.id}`, // TODO: YEAR handling
    ...body
  }

  await DynamoDb.putItem(
    APP_DATA_TABLE_NAME,
    payload,
    options.domain
  )

  return payload
}
