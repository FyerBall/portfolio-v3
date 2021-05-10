import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { ProjectsProvider } from './context/projectContext'

ReactDOM.render(
  <ProjectsProvider>
    <App />
  </ProjectsProvider>,
  document.getElementById('root')
)
