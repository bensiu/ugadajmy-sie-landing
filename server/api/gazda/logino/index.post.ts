import dynamodb from '~~/src/services/aws/dynamodb'
import type { GazdaUserResponse } from '~~/app/types'
import { verifyPassword } from '~~/server/utils/passwords'
import { setToken } from '~~/server/utils/token'
import { deleteCookie, readBody } from 'h3'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

export default defineEventHandler(async (event): Promise<Omit<GazdaUserResponse, 'password'>> => {
  const body = await readBody(event)
  const { usernamo, passwordo } = body
  const theError = {
    statusCode: 401,
    statusMessage: 'Email and password are required'
  }

  if (!usernamo || !passwordo) {
    deleteCookie(event, 'auth_token')
    throw createError(theError)
  }

  const user = await dynamodb.getItem(
    APP_DATA_TABLE_NAME,
    {
      PK: `USERS;NAME:${usernamo}`,
      SK: 'A'
    }
  ) as GazdaUserResponse | null

  if (!user) {
    deleteCookie(event, 'auth_token')
    throw createError(theError)
  }

  const passwordMatch = await verifyPassword(user.password, passwordo)

  if (!passwordMatch) {
    deleteCookie(event, 'auth_token')
    throw createError(theError)
  }

  await setToken(event, usernamo)

  return {
    username: user.username,
    active: user.active
  }
})
