import React from 'react'
import image from '../../images/exterior-page.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './exterior.css';

export default function exterior() {
  return (
  <>
      <div className='image-container'>
                <img className="exterior-header"  src={image} alt="exterior" />
                <div className="service">Exterior</div>
                <h2 className='other-caption-exterior '><span>Explore a world where comfort meets impeccable taste.</span></h2>
            </div>

 
            <div className="quote-container-interior">
            <div className='container quote'>
                <div className='row'>
            <div className='col-lg-6'>
            <h1>Get a quote today!</h1>
            </div>
            <div className='col-lg-6'>
            <button type="button" className="btn btn-custom btn-lg btn-block quote-button">Get a quote</button>
            </div>
            </div>
            </div>
            

        </div>

</>

    
  )
}
