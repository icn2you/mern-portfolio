const fetch = require('cross-fetch')

module.exports = {
  isVisitorHuman: (req, res) => {
    const params = new URLSearchParams()
    params.append('secret', process.env.RECAPTCHA_V2_SERVER_KEY)
    params.append('response', req.body.response)

    fetch('//www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: params
    })
      .then(resp => {
        if (resp.status >= 400) {
          throw new Error(`The server responded with error status code ${resp.status}.`)
        }

        return resp.json()
      })
      .then(json => res.json(json))
      .catch(err => {
        console.error(err.message)
      })
  }
}
