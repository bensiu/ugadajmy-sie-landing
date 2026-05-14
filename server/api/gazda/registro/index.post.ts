// import dynamodb from '~~/src/services/aws/dynamodb'
// import { hashPassword } from '~~/server/utils/passwords'
import type { GazdaUserResponse } from '~~/app/types'

// const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

export default defineEventHandler(async (event): Promise<Omit<GazdaUserResponse, 'password'>> => {
  const body = await readBody(event)
  const { usernamo, passwordo } = body
  // const theError = {
  //   statusCode: 401,
  //   statusMessage: 'Email and password are required'
  // }

  // if (!usernamo || !passwordo) {
  //   throw createError(theError)
  // }

  // const hashedPasword = await hashPassword(passwordo)

  // await dynamodb.putItem(
  //   APP_DATA_TABLE_NAME,
  //   {
  //     PK: `USERS;NAME:${usernamo}`,
  //     SK: 'A',
  //     PK1: 'USERS',
  //     SK1: `NAME:${usernamo}`,
  //     username: usernamo,
  //     password: hashedPasword,
  //     active: true
  //   }
  // )

  console.log('payload : ', usernamo, passwordo)
  return { username: usernamo, active: true }
})
