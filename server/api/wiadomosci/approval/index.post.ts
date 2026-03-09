import type { NewsItem } from '~/types'
import dynamodb from '~~/src/services/aws/dynamodb'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

export default defineEventHandler(async (event): Promise<NewsItem> => {
  const config = useRuntimeConfig(event)
  const authHeader = getHeader(event, 'authorization')
  const expectedAuth = `Basic ${Buffer.from(
    `${config.basicAuthUser}:${config.basicAuthPass}`
  ).toString('base64')}`

  if (!authHeader || authHeader !== expectedAuth) {
    setHeader(event, 'WWW-Authenticate', 'Basic realm="Admin API"')

    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  const body: NewsItem = await readBody(event)
  const DAY_IN_SECONDS = 24 * 60 * 60

  const record = {
    PK: `WIADOMOSCI-MEDIACJE;ID:${body.id}`,
    SK: 'A',
    approved: body.approved,
    ttl: Math.floor(Date.now() / 1000) + DAY_IN_SECONDS * (body.approved ? 21 : 9)
  }

  const result = await dynamodb.updateItem(APP_DATA_TABLE_NAME, record, 'WIADOMOSCI-MEDIACJE')
    .then(() => dynamodb.getItem(APP_DATA_TABLE_NAME, { PK: `WIADOMOSCI-MEDIACJE;ID:${body.id}`, SK: 'A' }))

  return {
    ...result,
    PK1: undefined,
    SK1: undefined,
    PK: undefined,
    SK: undefined,
    ttl: undefined
  } as unknown as NewsItem
})
