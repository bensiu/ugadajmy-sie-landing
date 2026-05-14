import type { ScheduledEvent } from 'aws-lambda'
import dynamodb from './services/aws/dynamodb'
import { promiseAllWithConcurrency } from './utils'

const APP_DATA_TABLE_NAME = process.env.APP_DATA_TABLE_NAME || 'ugadajmy-sie-landing-dev-data'

export const handler = async (event: ScheduledEvent) => {
  console.log('Event : ', event)

  const records: { SK1: string }[] = await dynamodb.query(
    APP_DATA_TABLE_NAME,
    `${event.domain}-COUNTER`,
    null,
    'GSI1',
    ['SK1', 'silos']
  )
  console.log('Pulling', event['domain'], records.length, 'records')

  const counters: Record<string, number> = records.reduce(
    (results, item) => {
      if (results[item.SK1]) {
        return { ...results, [item.SK1]: results[item.SK1] + 1 }
      }

      return { ...results, [item.SK1]: 1 }
    },
    {}
  )

  console.log('Unique keys:', Object.keys(counters).length, counters)

  await promiseAllWithConcurrency(
    Object.keys(counters).map(
      item => dynamodb.updateItem(
        APP_DATA_TABLE_NAME,
        {
          PK: `${event['domain']};SILOS:${records.find(i => i.SK1 === item)?.silos}`,
          SK: item,
          counter: counters[item]
        }
      )
    ),
    5
  )

  return true
}
