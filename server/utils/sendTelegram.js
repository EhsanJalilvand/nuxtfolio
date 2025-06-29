// Send message to Telegram via Bot API
export const sendTelegramMessage = async (body) => {
const config = useRuntimeConfig()
console.log(config.telegramBotToken, config.telegramChatId)
  if (!config.telegramBotToken || !config.telegramChatId) {
    console.error('Telegram Bot Token or Chat ID is not set in environment variables.')
    return
  }
  if (!body || !body.name || !body.email || !body.message) {
    console.error('Invalid body data for Telegram message.')
    return
  }


  const token = config.telegramBotToken
  const chatId = config.telegramChatId

  const message = `
📥 New Contact Form Submission:

👤 Name: ${body.name}
📧 Email: ${body.email}

📝 Message:
${body.message}

------------------------------
📅 Received on: ${new Date().toLocaleString()}
`

  await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'post',
    body: {
      chat_id: chatId,
      text: message
    }
  })
}
