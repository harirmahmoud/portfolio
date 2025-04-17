"use client"

import { useState } from "react"
import "../styles/Projects.css"
import ebook from '../images/Screenshot (26).png'
import prayer from '../images/Screenshot (27).png'
import weither from '../images/Screenshot (28).png'
import portfolio from '../images/Screenshot (30).png'

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-book Website",
      category: "web",
      image: ebook,
      description: "A fully responsive e-book platform offer over 300 books and free to download",
      technologies: ["React", "CSS", "Node.js","my sql"],
      link: "https://hbookdz.netlify.app/",
     
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "web",
      image: portfolio,
      description: "A personal portfolio website showcasing projects and skills.",
      technologies: ["React", "CSS", "Vite"],
      link: "#",
    
    },
    {
      id: 3,
      title: "Weather App",
      category: "app",
      image: weither,
      description: "A weather application that displays current weather and forecasts.",
      technologies: ["JavaScript", "CSS", "Weather API"],
      link: "https://harirmahmoud.github.io/weather2/",
     
    },
    {
      id: 3,
      title: "prayer time App",
      category: "app",
      image: prayer,
      description: "A prayer application that displays current time of all prayers in the day base on your location.",
      technologies: ["JavaScript", "CSS", "prayer API"],
      link: "https://prayerharir.netlify.app/",
     
    },
  ]

  const filterProjects = (category) => {
    setActiveFilter(category)
  }

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>My Projects</h2>
        <div className="underline"></div>
      </div>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => filterProjects("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
          onClick={() => filterProjects("web")}
        >
          Web
        </button>
        <button
          className={`filter-btn ${activeFilter === "app" ? "active" : ""}`}
          onClick={() => filterProjects("app")}
        >
          Apps
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt="" />
              <div className="placeholder-image">
                <span>{project.title}</span>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="btn small primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
