import dynamodb from '~~/src/services/aws/dynamodb'
import { randomBytes } from 'crypto'
import type { H3Event } from 'h3'
import { setCookie } from 'h3'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

export const setToken = async (event: H3Event, usernamo: string): Promise<boolean> => {
  const token = randomBytes(64).toString('hex')

  await dynamodb.putItem(
    APP_DATA_TABLE_NAME,
    {
      PK: `USER-TOKENS;TOKEN:${token}`,
      SK: 'A',
      username: usernamo,
      PK1: 'USER-TOKENS',
      SK1: usernamo,
      expiresAt: Math.floor(Date.now() / 1000) + 60 * 25,
      active: true,
      ttl: Math.floor(Date.now() / 1000) + 60 * 30
    }
  )

  const cookieOptions: {
    httpOnly: boolean
    secure: boolean
    sameSite: 'lax'
    path: string
    maxAge?: number
  } = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: 'lax' as const, // Adjust as needed
    path: '/',
    maxAge: 60 * 25
  }

  setCookie(event, 'auth_token', `${randomBytes(16).toString('hex')}:${token}0`, cookieOptions)

  return true
}
