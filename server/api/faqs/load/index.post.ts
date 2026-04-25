import type { FaqItem } from '~~/app/types'
import useAuthentication from '~~/server/utils/useAuthentication'
import saveFaq from '~~/server/utils/faqs/saveFaq'

export default defineEventHandler(async (event): Promise<FaqItem[]> => {
  await useAuthentication(event)
  const body: FaqItem[] = await readBody(event)

  return Promise.all(
    body.map(saveFaq)
  )
})
