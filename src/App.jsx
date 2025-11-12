"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Timeline from "./components/Timeline"
import ThemeToggle from "./components/ThemeToggle"
import BackgroundToggle from "./components/BackgroundToggle"
import "./App.css"

export default function App() {
  const [theme, setTheme] = useState("dark")
  const [background, setBackground] = useState("default")

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark"
    const savedBackground = localStorage.getItem("portfolio-background") || "default"
    setTheme(savedTheme)
    setBackground(savedBackground)
    document.documentElement.setAttribute("data-theme", savedTheme)
    document.documentElement.setAttribute("data-background", savedBackground)
  }, [])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("portfolio-theme", newTheme)
  }

  const handleBackgroundChange = (newBackground) => {
    setBackground(newBackground)
    document.documentElement.setAttribute("data-background", newBackground)
    localStorage.setItem("portfolio-background", newBackground)
  }

  return (
    <div className="app-container">
      <div className="controls">
        <ThemeToggle current={theme} onChange={handleThemeChange} />
        <BackgroundToggle current={background} onChange={handleBackgroundChange} />
      </div>
      <Header />
      <main className="main-content">
        <Timeline />
      </main>
    </div>
  )
}
