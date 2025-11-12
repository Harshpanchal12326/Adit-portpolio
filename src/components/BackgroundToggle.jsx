"use client"
import "../styles/BackgroundToggle.css"

export default function BackgroundToggle({ current, onChange }) {
  const backgrounds = [
    { id: "default", label: "Default" },
    { id: "gradient", label: "Gradient" },
    { id: "dots", label: "Dots" },
    { id: "grid", label: "Grid" },
  ]

  return (
    <div className="background-toggle">
      <label>Background:</label>
      <div className="toggle-options">
        {backgrounds.map((bg) => (
          <button
            key={bg.id}
            className={`bg-btn ${current === bg.id ? "active" : ""}`}
            onClick={() => onChange(bg.id)}
            title={bg.label}
          >
            {bg.label}
          </button>
        ))}
      </div>
    </div>
  )
}
