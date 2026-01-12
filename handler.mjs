import { readFileSync } from 'fs'
import { handler } from './.output/server/index.mjs'

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

  try {
    const response = await handler(event)
      .then((results) => {
        return isBase64Encoded
          ? { ...results, ...readImageFromPublic(event.path) }
          : results
      })

    console.log('response.statusCode : ', event.path, response.statusCode)

    return response
  } catch (error) {
    console.log('ERROR : ', error.message || error)

    return {
      statusCode: 500,
      body: error.message || error
    }
  }
}
