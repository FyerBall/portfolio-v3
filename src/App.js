// -[ ] /showcase/profile -> for more info about the project?
import { Home, SingleProject, Archived } from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import ScrollToTop from './Helper/ScrollToTop'

function App() {
  return (
    <Router>
      <div className=''>
        <ScrollToTop />
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/showcase' component={Showcase} /> */}
          <Route exact path='/project/:projectId' component={SingleProject} />
          <Route exact path='/archived' component={Archived} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
