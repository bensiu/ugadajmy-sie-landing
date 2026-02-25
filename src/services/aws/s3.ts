import type {
  DeleteObjectCommandOutput,
  GetObjectCommandOutput,
  PutObjectAclCommandOutput
} from '@aws-sdk/client-s3'

import {
  DeleteObjectCommand,
  GetObjectCommand,
  NoSuchKey,
  PutObjectCommand,
  S3Client,
  S3ServiceException
} from '@aws-sdk/client-s3'

const AWS_SERVICE_REGION = process.env.AWS_SERVICE_REGION || 'eu-central-1'
const client = new S3Client({ region: AWS_SERVICE_REGION })

export default {
  getObject(bucketName: string, key: string): Promise<string | undefined> {
    return client.send(
      new GetObjectCommand({
        Bucket: bucketName,
        Key: key
      })
    )
      .then((response: GetObjectCommandOutput) => response.Body?.transformToString())
      .catch((caught) => {
        if (caught instanceof NoSuchKey) {
          // console.error(
          //   `Error from S3 while getting object "${key}" from "${bucketName}". No such key exists.`
          // )
          return 'false'
        } else if (caught instanceof S3ServiceException) {
          console.error(
            `Error from S3 while getting object from ${bucketName}.  ${caught.name}: ${caught.message}`
          )
          return 'false'
        } else {
          throw caught
        }
      })
  },

  putObject(bucketName: string, key: string, data: string): Promise<PutObjectAclCommandOutput> {
    return client.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: data
      })
    )

    // TODO then, catch
  },

  deleteObject(bucketName: string, key: string): Promise<DeleteObjectCommandOutput> {
    return client.send(
      new DeleteObjectCommand({
        Bucket: bucketName,
        Key: key
      })
    )
  }
}
