import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import './projects.css';


const Navigation: React.FC = () => {
    const navigate = useNavigate();
  
    const navigateHome = () => {
      navigate('/');
    };
  
    return (
      <button type="button" className="btn btn-success" onClick={navigateHome}>services</button>
    );
  }
  


export default function Projects() {
  return (
    <h1>
      Projects
      <Navigation />
    </h1>
  )
}

