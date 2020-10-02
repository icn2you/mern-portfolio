const router = require('express').Router()
const msgRoutes = require('./msg-api')
const projRoutes = require('./proj-api')

module.exports = (() => {
  // database routes
  router.use('/messages', msgRoutes)
  router.use('/projects', projRoutes)

  return router
})()
