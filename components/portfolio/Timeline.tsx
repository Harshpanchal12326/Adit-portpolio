"use client"

import { useState } from "react"
import { TimelineItem } from "./TimelineItem"

export function Timeline() {
  const [activeSection, setActiveSection] = useState("experience")

  const education = [
    {
      id: 1,
      title: "B.Tech in Computer Science Engineering",
      organization: "K.R. Mangalam University",
      period: "Sept 2024 - May 2028",
      location: "New Delhi NCR",
      details: ["CGPA: 9.33/10.0", "Coursework: Full Stack Development"],
    },
    {
      id: 2,
      title: "High School",
      organization: "The Indian School",
      period: "June 2023 - Apr 2013",
      details: ["Percentage: 92%", "Stream: Science (Physics, Chemistry, Mathematics, Computer Science)"],
    },
  ]

  const experience = [
    {
      id: 1,
      title: "Software Engineer",
      organization: "Kaizen Training Solutions - Gurugram, Haryana",
      period: "Oct 2025 - Present",
      details: [
        "Developed a LXP for internal systems: Learning experience platform which uses AI to curate courses and modules to be learnt",
        "Developed an AI powered HR System: AI powered HR system which scans resume and suggest skills to further users career",
      ],
    },
  ]

  const projects = [
    {
      id: 1,
      title: "Verdict - The final says on product health",
      period: "July 2025",
      description:
        "Developed a full-stack AI application that analyzes product data to assess environmental and health impacts.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "Docker"],
    },
    {
      id: 2,
      title: "TruthLens AI - AI fake news detector",
      period: "June 2025",
      description:
        "Built a full-stack AI application to detect fake news by analyzing text content and predicting misinformation likelihood.",
      tech: [
        "React (Vite)",
        "Tailwind CSS",
        "FastAPI",
        "Pydantic",
        "Hugging Face API",
        "JWT Authentication",
        "MongoDB",
      ],
    },
    {
      id: 3,
      title: "Growth Charters - AI powered Human Resource Development",
      period: "October 2025",
      description:
        "An AI powered HR system which scans resume and suggest skills to further users career or divert their career using the LXP.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "DynamoDB",
        "Redis",
        "PostgreSQL",
        "Jenkins",
        "RESTful APIs",
        "Docker",
      ],
    },
  ]

  const technologies = {
    languages: ["C++", "Python", "Java", "SQL", "JavaScript", "NoSQL"],
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Redis",
      "VectorDB",
      "PostgreSQL",
      "DynamoDB",
      "AWS DevOps",
      "NextJS",
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "Django",
      "FastAPI",
      "SpringBoot",
      "JavaFX",
    ],
  }

  return (
    <div className="timeline-container">
      <div className="section-tabs">
        <button
          className={`tab ${activeSection === "experience" ? "active" : ""}`}
          onClick={() => setActiveSection("experience")}
        >
          Experience
        </button>
        <button
          className={`tab ${activeSection === "education" ? "active" : ""}`}
          onClick={() => setActiveSection("education")}
        >
          Education
        </button>
        <button
          className={`tab ${activeSection === "projects" ? "active" : ""}`}
          onClick={() => setActiveSection("projects")}
        >
          Projects
        </button>
        <button
          className={`tab ${activeSection === "skills" ? "active" : ""}`}
          onClick={() => setActiveSection("skills")}
        >
          Skills
        </button>
      </div>

      <div className="timeline-content">
        {activeSection === "experience" && (
          <div className="timeline-section">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              {experience.map((item) => (
                <TimelineItem key={item.id} item={item} type="experience" />
              ))}
            </div>
          </div>
        )}

        {activeSection === "education" && (
          <div className="timeline-section">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
              {education.map((item) => (
                <TimelineItem key={item.id} item={item} type="education" />
              ))}
            </div>
          </div>
        )}

        {activeSection === "projects" && (
          <div className="timeline-section">
            <h2 className="section-title">Projects</h2>
            <div className="timeline">
              {projects.map((item) => (
                <TimelineItem key={item.id} item={item} type="projects" />
              ))}
            </div>
          </div>
        )}

        {activeSection === "skills" && (
          <div className="timeline-section">
            <h2 className="section-title">Technologies & Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages</h3>
                <div className="skill-tags">
                  {technologies.languages.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Technologies & Tools</h3>
                <div className="skill-tags">
                  {technologies.technologies.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
