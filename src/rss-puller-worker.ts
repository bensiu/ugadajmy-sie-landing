import type { ScheduledEvent } from 'aws-lambda'
import dynamodb from './services/aws/dynamodb'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

const decodeHtmlEntities = (text: string): string => {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '\'')
    .replace(/&#x27;/g, '\'')
    .replace(/&#x2F;/g, '/')
}

export const handler = async (event: ScheduledEvent) => {
  console.log('Event : ', event)

  const feedUrl = 'https://www.google.com/alerts/feeds/02803779579269863425/7944837522555055733'
  const response = await fetch(feedUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)'
    }
  })

  if (!response.ok) {
    throw new Error('Error reading RSS feed')
  }

  const xml = await response.text()

  const entries: Array<{
    id: string
    title: string
    link: string
    published: string
    content: string
  }> = []

  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g
  let match

  while ((match = entryRegex.exec(xml)) !== null) {
    const entry = match[1]
    const isMatch = entry.match(/<id[^>]*>([\s\S]*?)<\/id>/)
    const titleMatch = entry.match(/<title[^>]*>([\s\S]*?)<\/title>/)
    const linkMatch = entry.match(/<link\s+href="([^"]+)"/)
    const publishedMatch = entry.match(/<published>([\s\S]*?)<\/published>/) || entry.match(/<updated>([\s\S]*?)<\/updated>/)
    const contentMatch = entry.match(/<content[^>]*>([\s\S]*?)<\/content>/)

    entries.push({
      id: isMatch ? isMatch[1].trim().split(':').at(-1) || '' : '',
      title: titleMatch ? decodeHtmlEntities(titleMatch[1].trim()) : '',
      link: linkMatch ? decodeHtmlEntities(linkMatch[1].trim()) : '',
      published: publishedMatch ? publishedMatch[1].trim() : '',
      content: contentMatch ? decodeHtmlEntities(contentMatch[1].trim()) : ''
    })
  }

  const existingData = await dynamodb.query(
    APP_DATA_TABLE_NAME,
    'WIADOMOSCI-MEDIACJE',
    null,
    'GSI1',
    ['PK1', 'SK1', 'id', 'approved']
  )

  const approvedIds = new Set(
    existingData
      .filter(item => item.approved)
      .map(item => item.id)
  )

  const filteredNewOnes = entries.filter(item => !approvedIds.has(item.id))
  const NINETY_DAYS_IN_SECONDS = 30 * 24 * 60 * 60

  await Promise.all(
    filteredNewOnes.map(
      entry => dynamodb.putItem(
        APP_DATA_TABLE_NAME,
        {
          PK: `WIADOMOSCI-MEDIACJE;ID:${entry.id}`,
          SK: 'A',
          PK1: 'WIADOMOSCI-MEDIACJE',
          SK1: `ID:${entry.id}`,
          ...entry,
          ttl: Math.floor(Date.now() / 1000) + NINETY_DAYS_IN_SECONDS
        },
        'WIADOMOSCI-MEDIACJE'
      )
    )
  )

  return {
    filteredNewOnes,
    entries
  }
}
