const router = require('express').Router()
const projectRoutes = require('./projects-api')

module.exports = (() => {
  // project routes
  router.use('/projects', projectRoutes)

  return router
})()
