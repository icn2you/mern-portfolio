module.exports = (() => {
  return {
    queryManager: require('./db'),
    siteVerify: require('./google'),
    mailTransport: require('./mail')
  }
})()
