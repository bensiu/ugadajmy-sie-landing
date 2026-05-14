import { readFileSync } from 'fs'
import { handler } from './.output/server/index.mjs'

const hackerUrls = [
  '/wp-',
  '.well-know',
  '/admin', '/uploads', '/files',
  '.php', '.alfa', '.map', '.zip', '.rar', '.gz', '.tar',
  '.sqlite3', '.sql',
  '/cgi-bin',
  '/system',
  '.env', '.git'
]

const limitedUrls = [
  'api/gazda/registro',
  'api/gazda/logino'
]

const readImageFromPublic = (path) => {
  const body = readFileSync(`./.output/public${path.replace('/_ipx/_', '')}`, 'base64')

  return {
    isBase64Encoded: true,
    body
  }
}

const getRandomInclusive = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let protectedRequestsTimestamps = []
const TIME_WINDOW_MS = 60 * 1000

const checkRateLimits = (rateLimit) => {
  const currentTime = new Date().now()

  protectedRequestsTimestamps.push(currentTime)
  protectedRequestsTimestamps = protectedRequestsTimestamps.filter(
    ts => ts >= currentTime - TIME_WINDOW_MS
  )
  console.log('Checking rate limit:', protectedRequestsTimestamps.length)

  return protectedRequestsTimestamps.length > rateLimit
}

export const runner = async (event) => {
  const fileExtention = event.path.slice((Math.max(0, event.path.lastIndexOf('.')) || Infinity) + 1)
  const isBase64Encoded = ['jpeg', 'png', 'jpg'].includes(fileExtention)

  if (hackerUrls.some(v => event.path.includes(v))) {
    console.log('response.statusCode : ', event.path, 404, 'as', 429)
    console.log('Event : ', JSON.stringify(event))

    return {
      statusCode: 429,
      body: `Too many requests: Try again in ${getRandomInclusive(75, 500)} seconds.` // 'Wrong user name and passwords'
    }
  }

  if (limitedUrls.some(v => event.path.includes(v))) {
    console.log('Protected Event : ', JSON.stringify(event))

    // eslint-disable-next-line no-constant-condition
    if (false) {
      console.log('Geo check')
    }

    if (checkRateLimits(5)) {
      return {
        statusCode: 429,
        body: `Too many requests! Try again in ${getRandomInclusive(75, 500)} seconds.` // 'Wrong user name and passwords'
      }
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
