import type { FaqItem } from '~~/app/types'
import useAuthentication from '~~/server/utils/useAuthentication'
import dynamodb from '~~/src/services/aws/dynamodb'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

export default defineEventHandler(async (event): Promise<FaqItem> => {
  useAuthentication(event)
  const body: FaqItem = await readBody(event)

  const existingRecord = await dynamodb.getItem(
    APP_DATA_TABLE_NAME,
    {
      PK: `FAQS;ID:${body.silos}`,
      SK: body.slug
    }
  ) as FaqItem | null

  const record = {
    PK: `FAQS;ID:${body.silos}`,
    SK: body.slug,
    PK1: 'FAQS',
    SK1: body.silos,
    slug: body.slug,
    silos: body.silos,
    label: body.label,
    content: body.content,
    counter: existingRecord ? existingRecord.counter : 0,
    // counter: body.counter,
    update_time: new Date().toISOString(),
    active: !!body.active
  }

  // console.log('RECORD : ', record)
  await dynamodb.putItem(APP_DATA_TABLE_NAME, record, 'FAQS')

  return {
    ...record,
    PK1: undefined,
    SK1: undefined,
    PK: undefined,
    SK: undefined,
    ttl: undefined
  } as unknown as FaqItem
})
