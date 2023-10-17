import React from 'react'
import image from '../../images/exterior-page.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function location() {
  return (
    <div className='image-container'>
                <img className="interior-header"  src={image} alt="paintbrush" />
                <div className="service">Location</div>
            </div>
  )
}
