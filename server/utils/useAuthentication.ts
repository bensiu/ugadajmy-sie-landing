import type { EventHandlerRequest, H3Event } from 'h3'

export default async function (event: H3Event<EventHandlerRequest>): Promise<void> {
  const config = useRuntimeConfig(event)
  const authHeader = getHeader(event, 'authorization')

  const expectedAuth = `Basic ${Buffer.from(
    `${config.basicAuthUser}:${config.basicAuthPass}`
  ).toString('base64')}`

  if (!authHeader || authHeader !== expectedAuth) {
    setHeader(event, 'WWW-Authenticate', 'Basic realm="Admin API"')

    throw createError({
      status: 401,
      message: 'Unauthorized'
    })
  }
}
