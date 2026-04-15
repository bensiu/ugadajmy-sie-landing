import type { FaqItem } from '~~/app/types'
// import type {
//   TransactWriteCommandInput
// } from '@aws-sdk/lib-dynamodb'

import increaseItemCounter from '../../../utils/increaseItemCounter'
import dynamodb from '~~/src/services/aws/dynamodb'
// import { getCookie, getRequestIP } from 'h3'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

export default defineEventHandler(async (event): Promise<FaqItem> => {
  await increaseItemCounter(event, 'FAQS')
  const body: FaqItem = await readBody(event)
  // const cookieValue = getCookie(event, '_ga') || 'unknown'
  // const today = new Date().toISOString().slice(0, 10)

  // const transactions: TransactWriteCommandInput = {
  //   TransactItems: [
  //     {
  //       // 1. Increment the counter record
  //       Update: {
  //         TableName: APP_DATA_TABLE_NAME,
  //         Key: {
  //           PK: `FAQS;SILOS:${body.silos}`,
  //           SK: `SLUG:${body.slug}`
  //         },
  //         UpdateExpression: 'ADD #c :inc',
  //         ExpressionAttributeNames: { '#c': 'counter' },
  //         ExpressionAttributeValues: { ':inc': 1 }
  //       }
  //     },
  //     {
  //       // 2. Put the new record ONLY if it doesn't exist
  //       Put: {
  //         TableName: APP_DATA_TABLE_NAME,
  //         Item: {
  //           PK: `FAQS-COUNTER;SLUG:${body.slug}`,
  //           SK: `GA4:${cookieValue};ON:${today}`,
  //           PK1: 'FAQS-COUNTER',
  //           SK1: `SLUG:${body.slug}`,
  //           IP: getRequestIP(event, { xForwardedFor: true }) || 'unknown',
  //           time: new Date().toISOString()
  //         },
  //         ConditionExpression: 'attribute_not_exists(PK) AND attribute_not_exists(SK)'
  //       }
  //     }
  //   ]
  // }

  // await dynamodb.executeTransaction(transactions)?.catch()

  const record = await dynamodb.getItem(
    APP_DATA_TABLE_NAME,
    {
      PK: `FAQS;SILOS:${body.silos}`,
      SK: `SLUG:${body.slug}`
    }
  )

  return {
    ...record,
    PK1: undefined,
    SK1: undefined,
    PK: undefined,
    SK: undefined,
    ttl: undefined
  } as unknown as FaqItem
})
