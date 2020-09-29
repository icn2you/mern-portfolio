const router = require('express').Router()
const mailRoutes = require('./mail-api')

module.exports = (() => {
  // form mail routes
  router.use('/contact', mailRoutes)

  return router
})()
