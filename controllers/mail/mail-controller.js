const nodemailer = require('nodemailer')

const {
  GMAIL_ACCT_NAME, GMAIL_USERNAME, GMAIL_PASSWORD,
  CC_ACCT_NAME, CC_USERNAME
} = process.env

module.exports = {
  submitContact: (req, res) => {
    // Instantiate the SMTP server.
    const smtpServer = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USERNAME,
        pass: GMAIL_PASSWORD
      }
    })

    // Format the message.
    const emailMessage = {
      from: `'${req.body.name} <${req.body.email}>'`,
      to: `'${GMAIL_ACCT_NAME} <${GMAIL_USERNAME}>'`,
      cc: `'${CC_ACCT_NAME} <${CC_USERNAME}>'`,
      replyTo: `'${req.body.name} <${req.body.email}>'`,
      subject: req.body._subject,
      html:
        `
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap" rel="stylesheet">
        <style>
          body { color: #373838; font-family: 'Nunito'; font-size: 14px; }
          h2 { color: #84898C; font-size: medium; }
          a { color: #373838; text-decoration: none; }
          a:active, a:focus, a:hover { color: #0F4C81; text-decoration: underline; }
        </style>
        <div>
          <h1>Hi, Chris! 🤓</h1>
          <p>You've got mail from a visitor to your online portfolio:</p>
          <h2>name:</h2>
          <p>${req.body.name}</p>
          <h2>reply-to:</h2>
          <p>${req.body.email}</p>
          <h2>message:</h2>
          <p>${req.body.message}</p>
        </div>
        `,
      text:
        `
        Hi, Chris.
        A visitor to your online portfolio just sent you the following message:

        name: 
        ${req.body.name}
        reply-to: 
        ${req.body.email}
        message:
        ${req.body.message}
        `
    }

    // Send the message.
    smtpServer.sendMail(emailMessage, (err, resp) =>
      res.json({ status: err || true })
    )
  }
}
