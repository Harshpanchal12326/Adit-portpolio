"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/portfolio/Header"
import { Timeline } from "@/components/portfolio/Timeline"
import { ThemeToggle } from "@/components/portfolio/ThemeToggle"
import { BackgroundToggle } from "@/components/portfolio/BackgroundToggle"
import "./portfolio.css"

export default function Portfolio() {
  const [theme, setTheme] = useState("dark")
  const [background, setBackground] = useState("default")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark"
    const savedBackground = localStorage.getItem("portfolio-background") || "default"
    setTheme(savedTheme)
    setBackground(savedBackground)
    document.documentElement.setAttribute("data-theme", savedTheme)
    document.documentElement.setAttribute("data-background", savedBackground)
  }, [])

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("portfolio-theme", newTheme)
  }

  const handleBackgroundChange = (newBackground: string) => {
    setBackground(newBackground)
    document.documentElement.setAttribute("data-background", newBackground)
    localStorage.setItem("portfolio-background", newBackground)
  }

  if (!mounted) return null

  return (
    <div className="portfolio-container">
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
