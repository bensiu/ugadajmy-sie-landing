import type { BlogItem } from '~~/app/types'
import dynamodb from '~~/src/services/aws/dynamodb'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

export default async function (item: BlogItem): Promise<BlogItem> {
  const existingRecord = await dynamodb.getItem(
    APP_DATA_TABLE_NAME,
    {
      PK: `BLOGS;SILOS:${item.silos}`,
      SK: `SLUG:${item.slug}`
    }
  ) as BlogItem | null

  const record = {
    PK: `BLOGS;SILOS:${item.silos}`,
    SK: `SLUG:${item.slug}`,
    PK1: 'BLOGS',
    SK1: item.silos,
    slug: item.slug,
    silos: item.silos,
    title: item.title,
    content: item.content,
    description: item.description,
    author: item.author,
    date: item.date,
    readTime: item.readTime,
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
  } as unknown as BlogItem
}
