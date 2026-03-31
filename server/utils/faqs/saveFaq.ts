import type { FaqItem } from '~~/app/types'
import dynamodb from '~~/src/services/aws/dynamodb'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

export default async function (item: FaqItem): Promise<FaqItem> {
  const existingRecord = await dynamodb.getItem(
    APP_DATA_TABLE_NAME,
    {
      PK: `FAQS;SLUG:${item.silos}`,
      SK: `SLUG:${item.slug}`
    }
  ) as FaqItem | null

  const record = {
    PK: `FAQS;SLUG:${item.silos}`,
    SK: `SLUG:${item.slug}`,
    PK1: 'FAQS',
    SK1: item.silos,
    slug: item.slug,
    silos: item.silos,
    label: item.label,
    content: item.content,
    counter: existingRecord ? existingRecord.counter : 0,
    // counter: body.counter,
    update_time: new Date().toISOString(),
    active: !!item.active
  }

  // console.log('RECORD : ', record)
  await dynamodb.putItem(APP_DATA_TABLE_NAME, record)

  return {
    ...record,
    PK1: undefined,
    SK1: undefined,
    PK: undefined,
    SK: undefined,
    ttl: undefined
  } as FaqItem
}
