const router = require('express').Router()
const controllers = require('../../controllers')

module.exports = (() => {
  // POST operation for `/db/messages` route
  router.route('/')
    .post(controllers.queryManager.messages.create)

  return router
})()
