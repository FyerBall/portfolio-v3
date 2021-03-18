// -[ ] /showcase/profile -> for more info about the project?
import { Home, SingleProject } from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import { useEffect, useState } from 'react'

const lightMode = 'light-mode'
const dartMode = 'dark-mode'
const getPreferredTheme = () => {
  let theme = lightMode
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}
function App() {
  const [theme, setTheme] = useState(getPreferredTheme())

  const toggleTheme = () => {
    if (theme === lightMode) {
      setTheme(dartMode)
    } else {
      setTheme(lightMode)
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <Router>
      <div className=''>
        <Nav toggleTheme={toggleTheme} />
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
