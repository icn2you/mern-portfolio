const db = require('../../models')

module.exports = { 
  create: (req, res) => {
    const contact = req.body 
    
    Object.defineProperty(contact, 'text', { 
      value: contact.message,
      enumerable: true 
    })
    
    delete contact['message']
    
    db.Message
      .create(contact)
      .then(doc => res.json(doc))
      .catch(err => res.status(422).json(err.stack))
  }
}
