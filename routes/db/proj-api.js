const router = require('express').Router()
const controllers = require('../../controllers')

module.exports = (() => {
  // GET operation for `/db/projects` routes
  router.route('/')
    .get(controllers.queryManager.projects.findAll)

  return router
})()
