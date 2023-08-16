import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import './styles.css';


const Navigation: React.FC = () => {
    const navigate = useNavigate();
  
    const navigateHome = () => {
      navigate('/');
    };
  
    return (
      <button type="button" className="btn btn-success" onClick={navigateHome}>services</button>
    );
  }
  


export default function Contact() {
  return (
    <h1>
      Contact
      <Navigation />
    </h1>
  )
}