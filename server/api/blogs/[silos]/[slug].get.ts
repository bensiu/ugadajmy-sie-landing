import type { BlogItem } from '~~/app/types'
import DynamoDb from '~~/src/services/aws/dynamodb'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

export default defineEventHandler(async (event): Promise<BlogItem> => {
  const silos = getRouterParam(event, 'silos')
  const slug = getRouterParam(event, 'slug')

  const blog = await DynamoDb.getItem(
    APP_DATA_TABLE_NAME,
    {
      PK: `BLOGS;SILOS:${silos}`,
      SK: `SLUG:${slug}`
    }
  ) as BlogItem | null

  if (blog === null) {
    createError({
      statusCode: 404
    })
  }

  return {
    ...blog,
    PK1: undefined,
    SK1: undefined,
    PK: undefined,
    SK: undefined,
    ttl: undefined
  } as unknown as BlogItem
})
