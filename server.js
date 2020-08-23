// Node dependencies
const express = require('express')
const routes = require('./routes')
const logger = require('morgan')
const mongoose = require('mongoose')

// HTTP port & MongoDB URI
const PORT = process.env.PORT || 3001
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/devprojsdb'

// Create Express app.
const app = express()

// Create middleware.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Log server activity.
app.use(logger('dev'))

// Serve static assets on production server.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Use app routes.
app.use(routes)

// Connect to database.
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection
  .on('error', console.error.bind(
    console, 'An error was encountered connecting to the database.'))
  .once('connected', () => {
    console.log('Successfully connected to the database.')
  })

// Launch server and listen for requests.
app.listen(PORT, () => {
  console.log(`🌎 ==> API server running on port ${PORT} ...`)
})
