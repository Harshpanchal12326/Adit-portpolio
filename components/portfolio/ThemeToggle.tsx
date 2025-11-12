"use client"

interface ThemeToggleProps {
  current: string
  onChange: (theme: string) => void
}

export function ThemeToggle({ current, onChange }: ThemeToggleProps) {
  return (
    <div className="theme-toggle">
      <button
        className={`toggle-btn ${current === "light" ? "active" : ""}`}
        onClick={() => onChange("light")}
        title="Light Mode"
      >
        ☀️
      </button>
      <button
        className={`toggle-btn ${current === "dark" ? "active" : ""}`}
        onClick={() => onChange("dark")}
        title="Dark Mode"
      >
        🌙
      </button>
    </div>
  )
}
