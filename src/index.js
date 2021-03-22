import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from './context/themeContext'
import { ProjectsProvider } from './context/projectContext'

ReactDOM.render(
  <ThemeProvider>
    <ProjectsProvider>
      <App />
    </ProjectsProvider>
  </ThemeProvider>,

  document.getElementById('root')
)
