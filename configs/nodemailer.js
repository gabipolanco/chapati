const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
})

exports.emailBienvenida = (email) => {
  return transporter.sendMail({
      from: 'chapatidelta@gmail.com',
      to: email,
      subject: 'Bienvenid@ a Chapati',
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>
        .title{
          color: red;
          font-weight: bold
        }
        
        </style>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Bienvenid@ a Chapati</title>
      </head>
      <body>
      <h1 class="title">Bienvenid@ a Chapati ${email}</h1>
      </body>
      </html>
  `
  })
}