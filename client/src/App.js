import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ReCaptchaProvider } from 'react-recaptcha-x'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileWord } from '@fortawesome/free-solid-svg-icons'
import { Projects } from './pages'
import './App.scss'

require('dotenv').config()

library.add(fab, faEnvelope, faFileWord)

const RECAPTCHA_V2_SITE_KEY = process.env.REACT_APP_RECAPTCHA_V2_SITE_KEY

const App = () => {
  return (
    <ReCaptchaProvider
      siteKeyV2={RECAPTCHA_V2_SITE_KEY}
    >
      <Router>
        <Switch>
          <Route exact path='/' component={Projects} />
        </Switch>
      </Router>
    </ReCaptchaProvider>
  )
}

export default App
