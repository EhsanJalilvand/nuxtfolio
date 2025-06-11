import { defineEventHandler, readBody } from 'h3'
import { SMTPClient } from 'emailjs'


export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const token = '7775432559:AAHe-NdrZMdPV869l36gQf9wfOxhkzTJaGQ'
  const chatId = '-1001051750826' 

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









  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 's.clashlink@gmail.com', // ایمیل خودت
  //     pass: 'mcct cyhv jiql fbmt'
  //   }
  // })

  // // 📄 تنظیمات ایمیل
  // const mailOptions = {
  //   from: '"Nuxtfolio Contact" <s.clashlink@gmail.com>',
  //   to: 'ehsan.jalilvand.dev@gmail.com',
  //   subject: 'New Contact Form Submission',
  //   html: `
  //     <h2>New Contact Message From EhsanJalilvand.dev</h2>
  //     <p><strong>Name:</strong> ${body.name}</p>
  //     <p><strong>Email:</strong> ${body.email}</p>
  //     <p><strong>Message:</strong></p>
  //     <p>${body.message}</p>
  //     <hr />
  //     <p><small>Received on: ${new Date().toLocaleString()}</small></p>
  //   `
  // }

  // 📤 ارسال ایمیل
  //await transporter.sendMail(mailOptions)



  const client = new SMTPClient({
    user: 's.clashlink@gmail.com',
    password: 'mcct cyhv jiql fbmt', 
    host: 'smtp.gmail.com',
    ssl: true
  });

await client.sendAsync({
  from: 's.clashlink@gmail.com',
  to: 'ehsan.jalilvand.dev@gmail.com',
  subject: '📬 New Contact Form Submission',
  text: `New contact message from ${body.name} (${body.email}):\n${body.message}`, // متن ساده ایمیل
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



  return { success: true }
})
