import "../styles/TimelineItem.css"

export default function TimelineItem({ item, type }) {
  const renderContent = () => {
    if (type === "projects") {
      return (
        <>
          <h3 className="timeline-title">{item.title}</h3>
          <p className="timeline-period">{item.period}</p>
          <p className="timeline-description">{item.description}</p>
          <div className="tech-stack">
            {item.tech.map((tech, idx) => (
              <span key={idx} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </>
      )
    }

    return (
      <>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-organization">{item.organization}</p>
        {item.location && <p className="timeline-location">{item.location}</p>}
        <p className="timeline-period">{item.period}</p>
        <ul className="timeline-details">
          {item.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </>
    )
  }

  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-line"></div>
      <div className="timeline-content-box">{renderContent()}</div>
    </div>
  )
}
