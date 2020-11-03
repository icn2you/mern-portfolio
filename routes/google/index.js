const router = require('express').Router()
const googleRoutes = require('./recaptcha-api')

module.exports = (() => {
  // form mail routes
  router.use('/verify', googleRoutes)

  return router
})()
