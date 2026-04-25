import useAuthentication from '~~/server/utils/useAuthentication'

interface AuthResponse {
  info: string
}

export default defineEventHandler(async (event): Promise<AuthResponse> => {
  await useAuthentication(event)

  return {
    info: 'OK'
  }
})
