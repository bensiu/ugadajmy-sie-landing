import useAuthentication from '~~/server/utils/useAuthentication'

export default defineEventHandler(async (event): Promise<boolean> => {
  useAuthentication(event)

  return true
})
