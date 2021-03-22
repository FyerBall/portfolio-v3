import { createContext, useContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()
const lightMode = 'light-mode'
const darkMode = 'dark-mode'
const getPreferredTheme = () => {
  let theme = lightMode
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getPreferredTheme())

  const toggleTheme = () => {
    if (theme === lightMode) {
      setTheme(darkMode)
    } else {
      setTheme(lightMode)
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, lightMode, darkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Reusable Hook
export const useTheme = () => {
  return useContext(ThemeContext)
}
