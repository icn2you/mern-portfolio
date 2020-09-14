import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileWord } from '@fortawesome/free-solid-svg-icons'
import { Projects } from './pages'
import './App.scss'

library.add(fab, faEnvelope, faFileWord)

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Projects} />
      </Switch>
    </Router>
  )
}

export default App
