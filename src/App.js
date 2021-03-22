// -[ ] /showcase/profile -> for more info about the project?
import { Home, SingleProject } from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import { useEffect, useState } from 'react'

function App() {
  return (
    <Router>
      <div className=''>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/showcase' component={Showcase} /> */}
          <Route exact path='/project/:projectId' component={SingleProject} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
