const router = require('express').Router()
const projects = require('../../controllers')

module.exports = (() => {
  // GET operation for `/api/projects` routes
  router.route('/')
    .get(projects.controller.findAll)

  return router
})()
