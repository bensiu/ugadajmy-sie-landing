import type { BlogItem } from '~~/app/types'
import useAuthentication from '~~/server/utils/useAuthentication'
import saveBlog from '~~/server/utils/blogs/saveBlog'

export default defineEventHandler(async (event): Promise<BlogItem> => {
  await useAuthentication(event)
  const body: BlogItem = await readBody(event)

  return saveBlog(body)
})
