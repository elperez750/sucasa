import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './services.css';
import image from '../../images/paintbrush.jpeg';


export default function Services() {
  return (
    <>
    <div className='image-container'>
        <img className="paintbrush" src={image} alt="paintbrsuh" />
        <div className="service">Services</div>
      </div>    

    <div className='description'>
    <p className="about-services">
        SuCasa Paint and RoofCare has been the go-to choice for homeowners and businesses across the metropolitan area for over three decades. We operate with full licensing, bonding, and insurance, adhering to the highest standards set by our state. As a testament to our commitment, we are also proud to be recognized by the Roofing and Paint Professionals Association. Whether your need is a fresh coat of paint or comprehensive roof maintenance, our dedicated team brings the expertise and precision to ensure your property looks its best and stands the test of time.
    </p>

    <button type="button" className="btn btn-custom btn-lg service-button">Schedule a free estimate</button>

   

    </div>
    
    </>
    
  )
}

