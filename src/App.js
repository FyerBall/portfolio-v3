// -[ ] /showcase/profile -> for more info about the project?
import { Home, SingleProject } from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className=''>
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
