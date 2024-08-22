import React from 'react'
import './Certifications.css'
import { Link } from 'react-router-dom';
import './Home.css'

const Certifications = () => {

  const certifications = [
    { title: 'React Developer', description: 'Certified by XYZ' },
    { title: 'JavaScript Mastery', description: 'Certified by ABC' },
    // Add more certifications here
  ];
  return (
    <div className="certifications-container">
            {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                    <h3 className="certification-title">{cert.title}</h3>
                    <p className="certification-description">{cert.description}</p>
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

export default Certifications