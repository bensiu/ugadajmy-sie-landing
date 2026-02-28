import type { PublishCommandOutput } from '@aws-sdk/client-sns'
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns'

const AWS_SERVICE_REGION = process.env.AWS_SERVICE_REGION || 'eu-central-1'
const client = new SNSClient({ region: AWS_SERVICE_REGION })

export default {
  publishMessage(topicArn: string, subject: string, message: string): Promise<PublishCommandOutput> {
    return client.send(
      new PublishCommand({
        TopicArn: topicArn,
        Subject: subject,
        Message: message
      })
    )
  }
}
