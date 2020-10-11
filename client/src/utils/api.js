require('isomorphic-fetch')

const RECAPTCHA_SERVER_KEY =
  process.env.REACT_APP_REACAPTCH_V2_SERVER_KEY

export default {
  getPortfolioProj: filter => fetch(`/db/projects?${filter}`)
    .then(resp => resp.json())
    .catch(err => console.error(err.stack)),

  isVisitorHuman: verificationKey => fetch(
    'https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: `secret=${RECAPTCHA_SERVER_KEY}&response=${verificationKey}`
    })
    .then(resp => resp.json())
    .catch(err => console.error(err.message)),

  saveVisitorMsg: contact => fetch('/db/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact)
  })
    .then(resp => resp.json())
    .catch(err => console.error(err.message)),

  sendVisitorMsg: contact => fetch('/mail/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact)
  })
    .then(resp => resp.json())
    .catch(err => console.error(err.message))
}
