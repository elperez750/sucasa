
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import image from '../../images/house.jpg';
import Goals from "./Goals"
import Expertise from "./expertise";
import './styles.css';
import Sucasa from '../about-sucasa/about-sucasa';
import React, { useEffect, useRef } from 'react';
import { Navigation } from '../navigation/navigate';



export default function Home() {
  return (
    <>
      <div className="img-text">
     
        <div className="parallax-home">
        </div>
 
        <h1 className="button-estimate">guarantee greatness</h1>
        <h2 className="other-caption">Serving the Seattle area since 2001</h2>
    
        <Navigation className="btn btn-custom btn-lg fire" text="Schedule a free estimate" />

        
       
    
    
      
    </div>
    <script>
     
    </script>
   
    <Goals />
    <Expertise />
    <Sucasa />
    </>
  )
}

