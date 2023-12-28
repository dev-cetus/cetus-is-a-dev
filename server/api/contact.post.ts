import ContactSchema from '~/server/utils/schema/ContactSchema'
import getRandomColor from '~/server/utils/ColorGenerator'

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const data = ContactSchema.safeParse(body)

  if (!data.success) {
    return {
      statusCode: 409,
      message: 'Invalid payload',
    }
  }

  const config = useRuntimeConfig()

  await $fetch(config.webhookUrl, {
    method: 'POST',
    body: {
      content: `<@${config.ownerId}>, **${data.data.name}** sent a message`,
      embeds: [
        {
          title: 'New message',
          color: getRandomColor(),
          fields: [
            {
              name: 'Name',
              value: data.data.name,
              inline: true,
            },
            {
              name: 'Email',
              value: data.data.email,
              inline: true,
            },
            {
              name: 'Subject',
              value: data.data.subject,
            },
            {
              name: 'Message',
              value: data.data.message,
            },
          ],
          footer: {
            text: `Sent at ${new Date().toLocaleString()}`,
          },
        },
      ],
    },
  })

  return {
    statusCode: 200,
    message: 'Message sent',
  }
})
