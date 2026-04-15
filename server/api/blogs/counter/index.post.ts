import type { BlogItem } from '~~/app/types'
import increaseItemCounter from '../../../utils/increaseItemCounter'
// import dynamodb from '~~/src/services/aws/dynamodb'

// const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

export default defineEventHandler(async (event): Promise<BlogItem> => {
  await increaseItemCounter(event, 'BLOGS')
  const body: BlogItem = await readBody(event)

  return body
})
