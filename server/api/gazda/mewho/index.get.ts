import dynamodb from '~~/src/services/aws/dynamodb'
import type { GazdaUserResponse } from '~~/app/types'
import { getCookie } from 'h3'
// import { setToken } from '~~/server/utils/token'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

export default defineEventHandler(async (event): Promise<Omit<GazdaUserResponse, 'password'>> => {
  const cookie = getCookie(event, 'auth_token')
  const token = cookie?.split(':')[1]
  // console.log('token : ', cookie, token)

  if (!token) {
    return { username: '', active: false }
  }

  if (token.slice(-1) !== '0') {
    createError({
      status: 429,
      message: 'Too many requests! Try again in 450 seconds.'
    })
  }

  const user = await dynamodb.getItem(
    APP_DATA_TABLE_NAME,
    {
      PK: `USER-TOKENS;TOKEN:${token.slice(0, -1)}`,
      SK: 'A'
    }
  )

  // console.log('user : ', user, (Math.floor(Date.now() / 1000) + 60 * 25))

  if (user && user.expiresAt > (Math.floor(Date.now() / 1000))) {
    // setToken(event, user.username)

    return { username: user.username, active: user.active }
  }

  return { username: '', active: false }
})
