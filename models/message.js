const mongoose = require('mongoose')

const Schema = mongoose.Schema

module.exports = (() => {
  const MessageSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    _cc: { type: String, default: process.env.CC_USERNAME },
    _subject: { type: String, required: true },
    text: { type: String, required: true }
  }, { timestamps: true })

  return mongoose.model('Message', MessageSchema)
})()
