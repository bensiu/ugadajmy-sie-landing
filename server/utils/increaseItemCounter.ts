import type { H3Event } from 'h3'
import type {
  TransactWriteCommandInput
} from '@aws-sdk/lib-dynamodb'

import dynamodb from '~~/src/services/aws/dynamodb'
import { getCookie, getRequestIP } from 'h3'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

export default async function<T> (event: H3Event, domain: string): Promise<void> {
  const body: T & { silos: string, slug: string } = await readBody(event)
  const cookieValue = getCookie(event, '_ga') || 'unknown'
  const today = new Date().toISOString().slice(0, 10)

  const transactions: TransactWriteCommandInput = {
    TransactItems: [
      {
        // 1. Increment the counter record
        Update: {
          TableName: APP_DATA_TABLE_NAME,
          Key: {
            PK: `${domain};SILOS:${body.silos}`,
            SK: `SLUG:${body.slug}`
          },
          UpdateExpression: 'ADD #c :inc',
          ExpressionAttributeNames: { '#c': 'counter' },
          ExpressionAttributeValues: { ':inc': 1 }
        }
      },
      {
        // 2. Put the new record ONLY if it doesn't exist
        Put: {
          TableName: APP_DATA_TABLE_NAME,
          Item: {
            PK: `${domain}-COUNTER;SLUG:${body.slug}`,
            SK: `GA4:${cookieValue};ON:${today}`,
            PK1: `${domain}-COUNTER`,
            SK1: `SLUG:${body.slug}`,
            IP: getRequestIP(event, { xForwardedFor: true }) || 'unknown',
            silos: body.silos,
            ga4: cookieValue,
            time: new Date().toISOString()
          },
          ConditionExpression: 'attribute_not_exists(PK) AND attribute_not_exists(SK)'
        }
      }
    ]
  }

  await dynamodb.executeTransaction(transactions)?.catch()
}
