const path = require('path')
const router = require('express').Router()
const dbRoutes = require('./db')
const googleRoutes = require('./google')
const mailRoutes = require('./mail')

module.exports = (() => {
  router.use('/db', dbRoutes)
  router.use('/google', googleRoutes)
  router.use('/mail', mailRoutes)

  // Send all requests to React app.
  router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })

  return router
})()
