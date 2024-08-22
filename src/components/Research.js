import React from 'react'
import './Research.css'
import './Home.css'
import { Link } from 'react-router-dom';

const Research = () => {

  const researchItems = [
    {
        title: 'Exploring AI in Cybersecurity',
        description: 'A paper on the applications of AI in cybersecurity.',
        link: 'https://your-research-paper-link.com',
    },
    // Add more research items here
  ];
  return (
    <div className="research-container">
            {researchItems.map((item, index) => (
                <div key={index} className="research-item">
                    <h3 className="research-title">{item.title}</h3>
                    <p className="research-description">{item.description}</p>
                    <a href={item.link} className="research-link">Read More</a>
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

export default Research