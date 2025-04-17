"use client"

import { useState, useEffect } from "react"
import "../styles/ThemeSwitcher.css"

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.body.classList.add("dark-mode")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)

    if (!isDark) {
      document.body.classList.add("dark-mode")
      localStorage.setItem("theme", "dark")
    } else {
      document.body.classList.remove("dark-mode")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme} className="theme-switch-button" aria-label="Toggle theme">
        <div className={`switch-track ${isDark ? "dark" : "light"}`}>
          <div className="switch-thumb">
            <span className="icon light">☀️</span>
            <span className="icon dark">🌙</span>
          </div>
        </div>
      </button>
    </div>
  )
}

export default ThemeSwitcher
