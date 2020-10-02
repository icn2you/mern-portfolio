const db = require('../../models')

module.exports = {
  findAll: (req, res) => {
    db.Project
      .find(req.query)
      .sort({ starred: 1, projectType: 'desc', completionDate: 'desc' })
      .then(docs => res.json(docs))
      .catch(err => res.status(422).json(err.stack))
  }
}
