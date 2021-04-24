// -[ ] /showcase/profile -> for more info about the project?
import { Home, SingleProject, Archived } from './pages'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // withRouter,
} from 'react-router-dom'
import Nav from './components/Nav'
// import ScrollToTop from './Helper/ScrollToTop'
// import ReactGA from 'react-ga'
// import { useEffect } from 'react'
// TODO: Google Analytics
// const TrackingId = 'UA-193128299-1'
// ReactGA.initialize(TrackingId)
function App() {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search)
  // })
  return (
    <Router>
      <div className='' style={{ background: 'red' }}>
        {/* <ScrollToTop /> */}
        <Nav />
        <Switch>
          {/* <Route exact path='/showcase' component={Showcase} /> */}
          <Route exact path='/project/:projectId' component={SingleProject} />
          <Route exact path='/archived' component={Archived} />
          <Router path='/pages/success' component={Archived} />

          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

// export default withRouter(App)

export default App
