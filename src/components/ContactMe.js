import {React, useState} from 'react'
import './ContactMe.css'
import './Home.css'
import { Link } from 'react-router-dom';

const ContactMe = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState, 
          [name]: value 
      }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to send form data to an email service or API
    console.log('Form data submitted:', formData);
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <div className="contactme-container">
    <h2>Contact Me</h2>
    <form className="contactme-form" onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="contactme-input" 
            placeholder="Your Name" 
            required 
        />
        <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="contactme-input" 
            placeholder="Your Email" 
            required 
        />
        <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            className="contactme-textarea" 
            placeholder="Your Message" 
            required 
        />
        <button type="submit" className="contactme-button">Send Message</button>
    </form>
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

export default ContactMe