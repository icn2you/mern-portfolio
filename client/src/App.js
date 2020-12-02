import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ReCaptchaProvider } from 'react-recaptcha-x'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileWord } from '@fortawesome/free-solid-svg-icons'
import { Home, Portfolio } from './pages'
import API from './utils/api'
import './App.scss'

require('dotenv').config()

library.add(fab, faEnvelope, faFileWord)

const RECAPTCHA_V2_SITE_KEY = process.env.REACT_APP_RECAPTCHA_V2_SITE_KEY

const App = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = () => {
    API.getPortfolioProj('active=true')
      .then(res => {
        // Verify that API did not return an error message from MongoDB.
        if (typeof res === 'string') {
          console.error(res)
        } else {
          setProjects(res)
        }
      })
      .catch(err => console.error(err.stack))
  }

  return (
    <ReCaptchaProvider
      siteKeyV2={RECAPTCHA_V2_SITE_KEY}
    >
      <Router>
        <Switch>
          <Route exact path='/' render={props =>
            <Home {...props} projects={
              projects.filter(project => project.starred)}
            />}
          />
          <Route exact path='/portfolio' render={props =>
            <Portfolio {...props} projects={projects} />} />
        </Switch>
      </Router>
    </ReCaptchaProvider>
  )
}

export default App
