import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Navigation: React.FC = () => {
    const navigate = useNavigate();
  
    const navigateHome = () => {
      navigate('/');
    };
  
    return (
      <button type="button" className="btn btn-success" onClick={navigateHome}>Home</button>
    );
  }

export default function Services() {
  return (
    <h1>
      Service
      <Navigation />
    </h1>
  )
}

