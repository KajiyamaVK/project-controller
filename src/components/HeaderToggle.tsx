'use client'

import { useEffect, useState } from 'react'
export function HeaderToggle() {
  const [darkMode, setDarkMode] = useState<boolean>()

  useEffect(() => {
    const html = document.querySelector('html')
    if (!html) return
    const theme = localStorage.getItem('el-theme')
    if (theme) {
      const darkModeOn = theme === 'dracula'
      setDarkMode(darkModeOn)
      html.setAttribute('data-theme', theme)
    } else {
      // Atribuir o tema do SO
      const darkModeOn = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      if (darkModeOn) {
        html.setAttribute('data-theme', 'dracula')
        setDarkMode(true)
      } else {
        html.setAttribute('data-theme', 'light')
        setDarkMode(false)
      }
    }
  }, [])

  function toggleTheme() {
    const html = document.querySelector('html')
    if (!html) return
    const theme = html.getAttribute('data-theme')
    if (theme === 'light') {
      html.setAttribute('data-theme', 'dracula')
      localStorage.setItem('el-theme', 'dracula')
      setDarkMode(true)
    } else {
      html.setAttribute('data-theme', 'light')
      localStorage.setItem('el-theme', 'light')
      setDarkMode(false)
    }
  }

  return (
    <div className="flex">
      <span>☀</span>
      <input
        type="checkbox"
        className="toggle"
        checked={darkMode}
        onChange={toggleTheme}
      />
      <span>🌙</span>
    </div>
  )
}
