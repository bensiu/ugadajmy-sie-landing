import type { EventHandlerRequest, H3Event } from 'h3'

export default function (event: H3Event<EventHandlerRequest>): void {
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
}
