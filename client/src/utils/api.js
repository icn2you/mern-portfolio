require('isomorphic-fetch')

export default {
  getPortfolioProj: filter => fetch(`/db/projects?${filter}`)
    .then(resp => resp.json())
    .catch(err => console.error(err.stack)),

  verifyVisitor: token => fetch('/google/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ response: token })
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
