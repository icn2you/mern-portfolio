module.exports = (() => {
  return {
    queryManager: require('./db'),
    mailTransport: require('./mail') 
  }
})()
