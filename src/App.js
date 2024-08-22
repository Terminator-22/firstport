import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Research from './components/Research';
import NavDrawer from './components/NavDrawer';

function App() {
  return (
    <div>
      <NavDrawer />
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/Certifications" element={<Certifications/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/ContactMe" element={<ContactMe/>} />
        <Route path="/Research" element={<Research/>} />
      </Routes>
    </div>
  );
}

export default App;
