import { SMTPClient } from 'emailjs'

// Send email via SMTP
export const sendEmailMessage = async (body) => {
const config = useRuntimeConfig()

if (!config.emailUser || !config.emailPass || !config.emailTo) {
    console.error('Email configuration is not set in runtime config.')
    return
  }
  if (!body || !body.name || !body.email || !body.message) {
    console.error('Invalid body data for email message.')
    return
  }
  // Create SMTP client
  const client = new SMTPClient({
    user: config.emailUser,
    password: config.emailPass,
    host: 'smtp.gmail.com',
    ssl: true
  })

  await client.sendAsync({
    from: config.emailUser,
    to: config.emailTo,
    subject: '📬 New Contact Form Submission',
    text: `New contact message from ${body.name} (${body.email}):\n${body.message}`,
    attachment: [
      {
        data: `
          <h2 style="color: #2b6cb0;">New Contact Message From EhsanJalilvand.dev</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Message:</strong></p>
          <p>${body.message}</p>
          <hr />
          <p style="font-size: 12px; color: #999;">Received on: ${new Date().toLocaleString()}</p>
        `,
        alternative: true,
        type: 'text/html'
      }
    ]
  })
}
