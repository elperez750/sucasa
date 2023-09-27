import 'bootstrap/dist/css/bootstrap.min.css';
import './expertise-styles.css';
import image from '../../images/paint.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Expertise() {
    useEffect(() => {
        AOS.init({
            duration: 1000 // This value can be adjusted
        });
    }, []);

    return (
      <div className="background-container">
         <div className='overlay-container' data-aos="fade-in">
         <h1 className='header'>Our Standards</h1>
                
        <div className='grid-container'>
           
            <div className="text-section" id="text1">
                <h1 className='small-header'>Trustworthiness</h1>
                <p className='paragraph'>Trust is earned, not given. We pride ourselves on building long-term relationships with our clients, one project at a time. Every contract is a pledge of our integrity and reliability.</p>
            </div>
            <div className="text-section" id="text2">
                <h1 className='small-header'>Professionalism</h1>
                <p className="paragraph">Each member of our team is trained to exhibit the highest levels of professionalism, both in the execution of their tasks and in their interactions with clients. When you hire us, you're not just getting a painter; you're getting a partner dedicated to beautifying your space.</p>
            </div>
            <div className="text-section" id="text3">
                <h1 className="small-header">Personal Touch</h1>
                <p className='paragraph'>Every home, every office, every space tells a story. We pride ourselves on understanding these stories and adding our personal touch, making every painted space truly unique.</p>
            </div>
            <div className="text-section" id="text4">
                <h1 className='small-header'>End-to-End Service</h1>
                <p className="paragraph">Our relationship with our clients goes beyond just painting. From consultation to after-care, we offer end-to-end services ensuring a seamless and memorable experience.</p>
            </div>
        </div>
        <button className="btn btn-custom btn-lg btn-block explore">Dive Into Our Services</button>
        </div>
     
        </div>
  )
}

export default Expertise;