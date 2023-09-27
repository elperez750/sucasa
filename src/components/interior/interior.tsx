import React from 'react'
import image from '../../images/interior-page.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './interior.css';

export default function interior() {
  return (
    <>
    <div className='image-container'>
    <div className='blur-image'>
    <img className="interior-pic" src={image} alt="interior-pic" loading='lazy'/>
    </div>
    <div className="service">Interior</div>
  </div>    

    <div className="free-quote">
       Hi
    </div>

    </>
  )
}
