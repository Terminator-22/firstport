import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom';
import './Home.css'

const Projects = () => { 
  const projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio to showcase my projects.',
        imageUrl: 'path/to/image.jpg',
        link: 'https://github.com/your-portfolio',
    },
    // Add more projects here
 ];


  return (
    <div className="projects-container">
    {projects.map((project, index) => (
        <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link">View Project</a>
            </div>
        </div>
    ))}
    <div className="home-buttons">
                <Link to="/ " className="home-button">Home</Link>
                <Link to="/Certifications" className="home-button">Certifications</Link>
                <Link to="/Projects" className="home-button">Projects</Link>
                <Link to="/Research" className="home-button">Research</Link>
                <Link to="/ContactMe" className="home-button">Contact Me</Link>
                
            </div>
    </div>
  )
}

export default Projects