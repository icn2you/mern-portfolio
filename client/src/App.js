import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Projects } from './pages'

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
