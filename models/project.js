const mongoose = require('mongoose')

const Schema = mongoose.Schema

module.exports = (() => {
  const ProjectSchema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    repo: { type: String, required: true },
    imagePath: { type: String, default: 'assets/img/laptop-blank.png' },
    programmingLangs: [{ 
      type: String, 
      enum: [
        'HTML', 
        '(S)CSS', 
        'JavaScript', 
        'JavaScript (ES6)'],
      required: true }],
    technologiesUsed: [{ 
      type: String, 
      enum: [
        'API', 
        'Express',
        'Firebase', 
        'Handlebars',
        'jQuery', 
        'Node', 
        'MongoDB', 
        'MySQL', 
        'React',
        'Webpack'],
      required: true }],
    completionDate: { type: Date, default: Date.now },
    starred: { type: Boolean, default: false }
  }, { timestamps: true })

  return mongoose.model('Project', ProjectSchema)
})()
