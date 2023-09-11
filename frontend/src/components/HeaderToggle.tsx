'use client'

import { useEffect, useState } from 'react'
export function HeaderToggle() {
  const [darkMode, setDarkMode] = useState<boolean>()

  useEffect(() => {
    const html = document.querySelector('html')
    if (!html) return
    const theme = localStorage.getItem('el-theme')
    if (theme && (theme === 'dark2' || theme === 'light2')) {
      const darkModeOn = theme === 'dark2'
      setDarkMode(darkModeOn)
      html.setAttribute('data-theme', theme)
    } else {
      console.log('else')
      // Atribuir o tema do SO
      const darkModeOn = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      if (darkModeOn) {
        html.setAttribute('data-theme', 'dark2')
        setDarkMode(true)
      } else {
        html.setAttribute('data-theme', 'light2')
        setDarkMode(false)
      }
    }
  }, [])

  function toggleTheme() {
    const html = document.querySelector('html')
    if (!html) return
    const theme = html.getAttribute('data-theme')
    if (theme === 'light2') {
      html.setAttribute('data-theme', 'dark2')
      localStorage.setItem('el-theme', 'dark2')
      setDarkMode(true)
    } else {
      html.setAttribute('data-theme', 'light2')
      localStorage.setItem('el-theme', 'light2')
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
        defaultChecked={false}
        onClick={toggleTheme}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
        disabled={false}
      />
      <span>🌙</span>
    </div>
  )
}
