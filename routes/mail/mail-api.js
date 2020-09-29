const router = require('express').Router()
const mail = require('../../controllers')

module.exports = (() => {
  // POST operation for `/mail/contact` route
  router.route('/')
    .post(mail.mailTransport.submitContact)

  return router
})()
