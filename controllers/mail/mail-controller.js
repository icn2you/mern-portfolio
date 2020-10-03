const nodemailer = require('nodemailer')

const { GMAIL_USERNAME, GMAIL_PASSWORD } = process.env

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
      from: req.body.name,
      to: GMAIL_USERNAME,
      cc: req.body._cc,
      subject: req.body._subject,
      text: `
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
    smtpServer.sendMail(emailMessage, (err, res) => {
      let msgStatus = ''

      if (err) {
        msgStatus = 'An error occurred. Please attempt to send your message again. If the problem persists, use the email link below to contact me.'
      } else {
        msgStatus = 'Your message was successfully sent! I\'ll be in touch soon.'
      }

      res.json({ feedback: msgStatus })
    })
  }
}