import type {
  GetItemCommandOutput
} from '@aws-sdk/client-dynamodb'
import {
  GetItemCommand,
  DynamoDBClient,
  QueryCommand,
  PutItemCommand,
  UpdateItemCommand
} from '@aws-sdk/client-dynamodb'
import { unmarshall, marshall } from '@aws-sdk/util-dynamodb'
import type { TableItem, TableKey } from '../types'
// import DynamoDbTriggers from '../DynamoDbTriggers'
import S3 from './s3'

const APP_DATA_BUCKET_NAME = process.env.APP_DATA_BUCKET_NAME || 'ugadajmy-sie-landing-dev-eu-central-1-data'
const AWS_SERVICE_REGION = process.env.AWS_SERVICE_REGION || 'eu-central-1'
const client = new DynamoDBClient({ region: AWS_SERVICE_REGION })

const attrNames = 'abcdefghijklmnopqrstuvwxyz'.split('')

const isObject = (obj: unknown) => {
  const type = typeof obj
  return (type === 'function' || type === 'object') && !!obj
}

export default {
  getItem(TableName: string, Key: TableKey) {
    return client.send(new GetItemCommand({
      TableName,
      Key: marshall(Key)
    }))
      .then(
        (result: GetItemCommandOutput) => result.Item
          ? unmarshall(result.Item)
          : null
      )
  },

  putItem(TableName: string, Item: TableItem, cacheName?: string) {
    return client.send(new PutItemCommand({
      TableName,
      Item: marshall(Item)
    }))
      .then(async (results) => {
        if (cacheName) {
          await S3.deleteObject(APP_DATA_BUCKET_NAME, `data-cache/${cacheName.replace('!', '')}.json`)
        }

        return results
      })
      // .then(async (results) => {
      //   await DynamoDbTriggers.inserts(Item)
      //
      //   return results
      // })
  },

  async query(
    TableName: string,
    PKValue: string,
    SKValue: string | null = null,
    index: string | null = null,
    select: null | string[] = null,
    cacheName?: string
  ): Promise<TableItem[]> {
    if (cacheName) {
      const cached = await S3.getObject(APP_DATA_BUCKET_NAME, `data-cache/${cacheName}.json`)
        .then((result: string | undefined) => JSON.parse(result || 'false'))

      if (cached) {
        console.log(`Read from cache (${cacheName}): ${cached.length} records`)

        return cached
      }
    }

    const keySufix = index ? '1' : ''
    const ExpressionAttributeValues: { ':pk': { S: string }, ':sk': { S: string } } | { ':pk': { S: string } } = SKValue
      ? {
          ':pk': { S: PKValue },
          ':sk': { S: SKValue.slice(-1) === '%' ? SKValue.slice(0, -1) : SKValue }
        }
      : {
          ':pk': { S: PKValue }
        }

    // console.log('ExpressionAttributeValues : ', ExpressionAttributeValues)

    const KeyConditionExpression = SKValue
      ? (
          SKValue.slice(-1) === '%'
            ? `PK${keySufix} = :pk AND begins_with(SK${keySufix}, :sk)`
            : `PK${keySufix} = :pk AND SK${keySufix} = :sk`
        )
      : `PK${keySufix} = :pk`

    const finalResults = []
    let LastEvaluatedKey

    do {
      const results = await client.send(
        new QueryCommand({
          ReturnConsumedCapacity: 'TOTAL',
          TableName,
          KeyConditionExpression,
          ExpressionAttributeValues,
          Select: select ? 'SPECIFIC_ATTRIBUTES' : 'ALL_ATTRIBUTES',
          ProjectionExpression: select ? select.join(',') : undefined,
          IndexName: index ? index : undefined,
          ExclusiveStartKey: LastEvaluatedKey
        })
      ).then((data) => {
        console.info('Records (Read): ', data.Items?.length)
        console.info('ConsumedCapacity (Read): ', data.ConsumedCapacity)
        LastEvaluatedKey = data.LastEvaluatedKey

        return data.Items ? data.Items.map(item => unmarshall(item)) : []
      }).catch((error) => {
        console.log('Error pulling data from DynamoDB : ', error.message, ExpressionAttributeValues, PKValue, SKValue, index)

        throw new Error('Error pulling data from DynamoDB : ' + error.message)
      })

      finalResults.push(...results)
    } while (LastEvaluatedKey)

    if (cacheName) {
      await S3.putObject(
        APP_DATA_BUCKET_NAME,
        `data-cache/${cacheName.replace('!', '')}.json`,
        JSON.stringify(finalResults)
      )
    }

    return finalResults as TableItem[]
  },

  updateItem(TableName: string, values: TableItem, cacheName?: string) {
    const fields = Object.keys(values).filter((item: string) => !['PK', 'SK'].includes(item))

    const UpdateExpression = 'set ' + fields.map((_, index) =>
      `#${attrNames[index]} = :${attrNames[index]}`
    ).join(', ')

    const ExpressionAttributeValues = fields.reduce((results, item, index) => ({
      [`:${attrNames[index]}`]: Array.isArray(values[item])
        ? { L: marshall(values[item]) }
        : isObject(values[item])
          ? { M: marshall(values[item]) }
          : marshall(values[item]),
      ...results
    }), {})

    const ExpressionAttributeNames = fields.reduce((results, item, index) => ({
      [`#${attrNames[index]}`]: item,
      ...results
    }), {})

    return client.send(new UpdateItemCommand({
      TableName,
      Key: marshall({
        PK: values.PK,
        SK: values.SK
      }),
      UpdateExpression,
      ExpressionAttributeValues,
      ExpressionAttributeNames,
      ReturnValues: 'ALL_NEW',
      ReturnConsumedCapacity: 'TOTAL'
    }))
      .then(async (results) => {
        if (cacheName) {
          await S3.deleteObject(APP_DATA_BUCKET_NAME, `data-cache/${cacheName.replace('!', '')}.json`)
        }

        return results
      })
      // .then(async (results) => {
      //   await DynamoDbTriggers.updates(values)
      //
      //   return results
      // })
  }
}
