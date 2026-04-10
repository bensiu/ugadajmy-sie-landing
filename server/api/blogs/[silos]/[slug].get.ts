import type { BlogItem, BlogItemMinimal } from '~~/app/types'
import { getRecordsList } from '~~/src/services/getRecordsList'
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

  if (blog?.related && blog?.related.length > 0) {
    const related = await getRecordsList(
      event,
      {
        domain: 'BLOGS',
        gsiSearchKey: `${blog.silos.split('-')[0]}%`,
        sorting: (a, b) => (a.counter as string) < (b.counter as string) ? 1 : -1,
        // select: ['silos', 'slug', 'title', 'counter', 'readTime'],
        fromCache: false
      }
    ) as unknown as BlogItemMinimal[]

    blog.relatedItems = related.filter(r => blog.related?.includes(r.slug))
      .map(
        r => ({
          silos: r.silos,
          slug: r.slug,
          title: r.title,
          counter: r.counter,
          active: r.active,
          readTime: r.readTime
        })
      )
  }

  if (blog?.services && blog.services.length) {
    blog.services = blog.services.toSorted(
      (a, b) => a > b ? 1 : -1
    )
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
