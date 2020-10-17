require('dotenv').config()

const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection
  .on('error', console.error.bind(
    console, 'An error was encountered connecting to MongoDB Atlas.'
  ))
  .once('connected', () => {
    console.log('Successfully connected to MongoDB Atlas!')
  })
  .close()
