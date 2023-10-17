
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import image from '../../images/house.jpg';
import Goals from "./Goals"
import Expertise from "./expertise";
import './styles.css';
import Sucasa from '../about-sucasa/about-sucasa';
import React, { useEffect, useRef } from 'react';



const Navigation: React.FC = () => {
    const navigate = useNavigate();
  
    const navigateHome = () => {
      navigate('/about');
    };
  
    return (
      <button type="button" className="btn btn-success btn-lg" onClick={navigateHome}>About</button>
    );
  }
  




export default function Home() {
  return (
    <>
      <div className="img-text">
     
        <div className="parallax-home">
        </div>
 
        <h1 className="button-estimate">guarantee greatness</h1>
        <h2 className="other-caption">Serving the Seattle area since 2001</h2>
    
        <button type="button" className="btn btn-custom btn-lg fire">Schedule a free estimate </button>

        
       
    
    
      
    </div>
    <script>
     
    </script>
   
    <Goals />
    <Expertise />
    <Sucasa />
    </>
  )
}

