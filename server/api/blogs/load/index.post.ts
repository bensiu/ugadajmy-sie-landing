import type { BlogItem } from '~~/app/types'
import useAuthentication from '~~/server/utils/useAuthentication'
import saveBlog from '~~/server/utils/blogs/saveBlog'

export default defineEventHandler(async (event): Promise<BlogItem[]> => {
  const user = await useAuthentication(event)
  if (!user?.active) {
    createError({
      status: 401,
      message: 'Not allowed'
    })
  }

  const body: BlogItem[] = await readBody(event)

  return Promise.all(
    body.map(saveBlog)
  )
})
