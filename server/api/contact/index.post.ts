import SNS from '~~/src/services/aws/sns'

const APP_DATA_CONTACT_NOTIFICATION_TOPIC_ARN = process.env.APP_DATA_CONTACT_NOTIFICATION_TOPIC_ARN || 'arn:aws:sns:eu-central-1:557844393866:ugadajmy-sie-landing-dev-eu-central-1-contact-alert-topic'

export default defineEventHandler(async (event) => {
  try {
    // 1. Parse and validate the incoming body
    const body = await readBody(event)
    const { name, phone, message, subject, email } = body

    if (!name || !phone || !message || !email) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields: name, phone, message, subject, email.'
      })
    }

    const emailContent = `
      Nowa wiadomość ze strony Ugadajmy sie:
      ------------------------------------------
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Temat: ${subject}
      Wiadomość:
      ${message}
    `

    const response = await SNS.publishMessage(
      APP_DATA_CONTACT_NOTIFICATION_TOPIC_ARN,
      'Nowa wiadomość z Ugadajmy Sie od ' + name,
      emailContent
    )
    // 4. Return success response
    return {
      success: true,
      messageId: response.MessageId
    }
  } catch (error: unknown) {
    console.error('SNS Error:', error)

    // Return a clean error to the client
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to process request.'
    })
  }
})
