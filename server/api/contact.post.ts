import { defineEventHandler, readBody } from 'h3'
import { sendTelegramMessage } from '../utils/sendTelegram'
import { sendEmailMessage } from '../utils/sendEmail'

export default defineEventHandler(async (event) => {
  // Read the form body from client
  const body = await readBody(event)

  // Fire & forget for I/O operations (no need to await them)
  sendTelegramMessage(body).catch(err => console.error(err))
  sendEmailMessage(body).catch(err => console.error(err))

  // Immediately return success response to client
  return { success: true }
})
