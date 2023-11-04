import React from 'react';
import './App.css';
import ScrollToTop from './scrollToTop';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Services from './components/services/services';
import Project from './components/projects/projects';
import Contact from './components/contact/contact';
import Navigation from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Interior from './components/interior/interior';
import Exterior from './components/exterior/exterior';
import Commercial from './components/commercial/commercial';
import Location from './components/location/location';
import Pressure from './components/pressure/pressure';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/exterior" element={<Exterior />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/location" element={<Location />} />
        <Route path="/pressure" element={<Pressure />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;