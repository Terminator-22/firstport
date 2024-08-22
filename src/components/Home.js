import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
            <h1 className="home-title">Welcome to My Portfolio</h1>
            <p className="home-subtitle">A showcase of my work, certifications, and research</p>
            <div className="home-buttons">
                <Link to=" " className="home-button">Home</Link>
                <Link to="/Certifications" className="home-button">Certifications</Link>
                <Link to="/Projects" className="home-button">Projects</Link>
                <Link to="/Research" className="home-button">Research</Link>
                <Link to="/ContactMe" className="home-button">Contact Me</Link>
                
            </div>
    </div>
  )
}

export default Home