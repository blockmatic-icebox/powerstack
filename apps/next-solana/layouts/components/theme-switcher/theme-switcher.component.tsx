import { useEffect, useState } from 'react'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'

export function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState<boolean>()
  const handleDarkMode = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.body.classList.add('dark')
      setDarkMode(true)
    } else {
      document.body.classList.remove('dark')
      setDarkMode(false)
    }
  }

  useEffect(() => {
    handleDarkMode()
  }, [darkMode])

  return (
    <div
      className="text-gray-600 cursor-pointer"
      onClick={() => {
        if (darkMode) {
          localStorage.setItem('theme', 'light')
          setDarkMode(false)
        } else {
          localStorage.setItem('theme', 'dark')
          setDarkMode(true)
        }
      }}
    >
      {darkMode ? (
        <RiSunFill className="w-6 h-6 text-gray-600 dark:text-white" />
      ) : (
        <RiMoonFill className="w-6 h-6 text-gray-600 dark:text-white" />
      )}
    </div>
  )
}
