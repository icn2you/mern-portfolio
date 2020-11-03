const router = require('express').Router()
const controllers = require('../../controllers')

module.exports = (() => {
  // POST operation for `/google/verify` route
  router.route('/')
    .post(controllers.siteVerify.recaptcha.isVisitorHuman)

  return router
})()
