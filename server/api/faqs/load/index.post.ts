import type { FaqItem } from '~~/app/types'
import useAuthentication from '~~/server/utils/useAuthentication'
import saveFaq from '~~/server/utils/faqs/saveFaq'

export default defineEventHandler(async (event): Promise<FaqItem[]> => {
  const user = await useAuthentication(event)
  if (!user?.active) {
    createError({
      status: 401,
      message: 'Not allowed'
    })
  }

  const body: FaqItem[] = await readBody(event)

  return Promise.all(
    body.map(saveFaq)
  )
})
