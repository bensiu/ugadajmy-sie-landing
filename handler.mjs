import { readFileSync } from 'fs'
import { handler } from './.output/server/index.mjs'

const hackerUrls = [
  '/wp-',
  '.well-know',
  '/admin',
  '/uploads',
  '/files',
  '.php',
  '.alfa',
  '.map',
  '/cgi-bin',
  '/system',
  '.env'
]

const readImageFromPublic = (path) => {
  const body = readFileSync(`./.output/public${path.replace('/_ipx/_', '')}`, 'base64')

  return {
    isBase64Encoded: true,
    body
  }
}

export const runner = async (event) => {
  const fileExtention = event.path.slice((Math.max(0, event.path.lastIndexOf('.')) || Infinity) + 1)
  const isBase64Encoded = ['jpeg', 'png', 'jpg'].includes(fileExtention)

  if (hackerUrls.some(v => event.path.includes(v))) {
    console.log('response.statusCode : ', event.path, 404, 'as', 403)
    console.log('Event : ', JSON.stringify(event))

    return {
      statusCode: 403,
      body: 'Wrong user name and passwords'
    }
  }

  try {
    const response = await handler(event)
      .then((results) => {
        return isBase64Encoded
          ? { ...results, ...readImageFromPublic(event.path) }
          : results
      })

    console.log('response.statusCode : ', event.path, response.statusCode)
    if (response.statusCode === 404) {
      console.log('Event : ', JSON.stringify(event))
    }

    return response
  } catch (error) {
    console.log('ERROR : ', error.message, error)
    console.log('Event : ', JSON.stringify(event))

    return {
      statusCode: 500,
      body: error.message || error
    }
  }
}
