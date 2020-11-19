require('dotenv').config()

// Node dependencies
const express = require('express')
const path = require('path')
const routes = require('./routes')
const logger = require('morgan')
const mongoose = require('mongoose')

// HTTP port & MongoDB URI
const PORT = process.env.PORT || 3001
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/dev_portfolio_db'

// Create Express app.
const app = express()

// Create middleware.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Log server activity.
app.use(logger('dev'))

// Serve static assets on production server.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')))
}

// Use app routes.
app.use(routes)

// Connect to database.
mongoose.connection
  .on('error', console.error.bind(
    console, 'An error was encountered connecting to the database.'))
  .on('connected', () => {
    console.log('Successfully connected to the database.')
  })

mongoose.connect(MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true })

// Create fail-safe route handler.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

// Launch server and listen for requests.
app.listen(PORT, () => {
  console.log(`🌎 ==> API server running on port ${PORT} ...`)
})
