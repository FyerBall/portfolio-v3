import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { apiUrl } from '../constants/constants'

export const ProjectsContext = createContext()
const url = apiUrl
export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([])
  // const [isLoading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url)

      setProjects(data)
    } catch (error) {}
  }

  const showcase = projects
  // .filter((project) => project.archived !== true)

  const archived = projects
  // .filter((project) => project.archived === true)
  // .sort((a, b) => b.year - a.year)

  useEffect(() => {
    fetchData()

    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <ProjectsContext.Provider value={{ showcase, archived }}>
      {children}
    </ProjectsContext.Provider>
  )
}

// Reusable Hook
export const useProjects = () => {
  return useContext(ProjectsContext)
}
