import React from 'react'
import image from '../../images/exterior-image.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

import image2 from '../../images/pressure-main.jpeg';
import imageone from '../../images/whyusone.jpeg';
import imagetwo from '../../images/seattle.jpeg';
import imagethree from '../../images/family.jpeg';
import imagefour from '../../images/fence-pressure.jpeg';
import imagefive from '../../images/pressure-commercial.png';
import imagesix from '../../images/pressure-siding.jpeg';
import imageseven from '../../images/pressure-deck.jpeg';
import imageeight from '../../images/pressure-driveway.jpeg';
import imagenine from '../../images/pressure-roof.jpeg';
import imageten from '../../images/door.jpeg';
import imageeleven from '../../images/stair.jpeg';
import benjamin from '../../images/benjamin.jpeg';
import purdy from '../../images/purdy.jpg';
import threem from '../../images/threem.jpeg';
import trimaco from '../../images/trimaco.jpeg';
import sherwin from '../../images/sherwin.jpeg';
import frogtape from '../../images/frogtape.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pressure.css';
import Marquee from "react-fast-marquee";

export default function Pressure() {
  const images = [
    benjamin,
    purdy, threem,
    trimaco, sherwin,
    frogtape,
  ]


  return (
  <>
      <div className='image-container'>
    <div className="parallax-pressure">
  
    </div>
  <div className="service">Pressure</div>
  <h2 className='other-caption-pressure '><span>Serving the Seattle Area since 2001</span></h2>

</div>

 
            <div className="quote-container-pressure">
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

        <div className="container mt-4 pressure-main">
      <div className='row align-items-stretch'>
      <div className='col-lg-6'>
        <img className="pressure-right" src={image2} alt="pressure" />
        </div>
        <div className='col-lg-6'>
          <div className="text-section-pressure">
                  <h2>Sucasa Paint and Roof Pressure Washing Precision</h2>
                  <p>Discover the rejuvenating prowess of professional pressure washing with Sucasa Paint and Roof. Dive into a realm where state-of-the-art technology meets unparalleled expertise, giving your property the radiant facelift it truly deserves. Our commitment to excellence transcends the typical, promising transformative results that redefine curb appeal and professional presentation.</p>
              </div>
              <div className="text-section-pressure">
                  <h2>Unyielding Commitment to Pristine Cleanliness</h2>
                  <p>Your property, be it residential or commercial, stands as an emblem of your attention to detail and care. At Sucasa Paint and Roof, we amplify this sentiment by stripping away years of dirt, grime, and environmental wear, unveiling an underlying sheen that speaks volumes. Harnessing top-grade equipment and environmentally-friendly solutions, our adept pressure washing team ensures your surfaces are not only sparkling clean but also treated with the utmost respect and care. Your satisfaction drives our mission, and we strive for impeccable results, revealing a property that gleams with pride.</p>
                </div>
              <div className="text-section-pressure">
                  <h2>Revitalize, Protect, and Impress</h2>
                  <p>At Sucasa Paint and Roof, our pressure washing services go beyond mere cleaning. We offer a trifecta of benefits: revitalizing your property's appearance, protecting surfaces from potential damage due to accumulated grime, and making a lasting impression on visitors, neighbors, and clients. Entrust us with your property, and witness a transformation that elevates its value and appeal.</p>
              </div>
             
              <button type="button" className="btn btn-custom btn-lg btn-block explore">Get Started</button>
          </div>
        </div>
        
      </div>

     


      <div className="why-us">
                <h2 className="text-center mb-4">Why Choose Us?</h2>
                <div className='container'>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="image-container-home">
                            <img className="why-us-image" src={imageone} alt="why-us-image"></img>
                            <div className="overlay-content-whyus">
                                <h3 className="header-why-us">Experertise</h3>
                                <h2 className='bold'>Unparalleled Precision in Every Project</h2>
                                <div className="more-text">
                                    <p className='white'>At Sucasa Paint and Roofcare, every home we touch becomes a testament to our excellence. Our expertise isn't just in applying paint or fixing roofs; it's about understanding each space and elevating it beyond expectations.</p>
                                <button type="button" className="btn btn-custom btn-lg btn-block explore">Explore</button>

                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="image-container-home">
                            <img className="why-us-image" src={imagetwo} alt="why-us-image"></img>
                            <div className="overlay-content-whyus">
                                <h3 className="header-why-us">Experience</h3>
                                 <h2 className='bold'>Serving Seattle-Area Homeowners Since 2001</h2>
                                <div className="more-text">
                                    <p className='white'>With over two decades in the business, Sucasa Paint and Roof stands as one of Seattle's most seasoned painting firms. </p>
                                <button type="button" className="btn btn-custom btn-lg btn-block explore">Explore</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='image-container-home'>
                            <img className="why-us-image" src={imagethree} alt="why-us-image"></img>
                            <div className="overlay-content-whyus">
                                <h3 className="header-why-us">Dedication</h3>
                                <h2 className='bold'>From Concept to Completion: Your Vision, Our Mission</h2>
                                <div className="more-text">
                                    <p className='white'>At Sucasa Paint and Roofcare, our unwavering commitment goes beyond just paint and tiles. Every brushstroke and every shingle reflects years of honed craftsmanship. ensuring that our clients receive nothing but the best. </p>
                                    <button type="button" className="btn btn-custom btn-lg btn-block explore">Explore</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>



            <div className="container pressure-services">
              <div className='row'>
                <div className='col-lg-12'>
                  <h1>Services offered</h1>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imagefour} alt="exterior-services" />
                  <h2>Fence Pressure Wash</h2>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imagefive} alt="exterior-services" />
                  <h2>Commercial Pressure Wash</h2>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imagesix} alt="exterior-services" />
                  <h2>Siding Pressure Wash</h2>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imageseven} alt="exterior-services" />
                  <h2>Deck Pressure Wash</h2>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imageeight} alt="exterior-services" />
                  <h2>Driveway Pressure Wash</h2>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imagenine} alt="exterior-services" />
                  <h2>Roof Pressure Wash</h2>
                </div>
                
                <div className='justify-content-center'>
                  <button type="button" className="btn btn-custom btn-lg btn-block explore ">Get a free quote</button>
                </div>
              </div>
              </div>

      <div className="suppliers">
        <h1>Suppliers and brands we trust</h1>
      </div>


      <div className="container pressure-secondary">
        <div className="row">
          
        </div>
      </div>

      <Marquee className='marquee-container'>{images.concat(images).map((imageSrc, index) => ( // Concatenating the images array to itself to double the images
                    <img 
                        key={index} 
                        src={imageSrc} 
                        alt={`marquee-item-${index}`}
                    />
                ))}
              </Marquee>



              <div className="background-container">
                <div className='overlay-container' data-aos="fade-in">
                    <h1 className='header'>Our Standards</h1>
                    <div className='row'>
                        <div className="col-lg-6 col-md-12 text-section" id="text1">
                            <h1 className='small-header'>Trustworthiness</h1>
                            <p className='paragraph'>Trust is earned, not given. We pride ourselves on building long-term relationships with our clients, one project at a time. Every contract is a pledge of our integrity and reliability.</p>
                        </div>
                        
                        <div className="col-lg-6 col-md-12 text-section" id="text2">
                            <h1 className='small-header'>Professionalism</h1>
                            <p className='paragraph'>Each member of our team is trained to exhibit the highest levels of professionalism, both in the execution of their tasks and in their interactions with clients. When you hire us, you're not just getting a painter; you're getting a partner dedicated to beautifying your space.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 text-section" id="text3">
                            <h1 className='small-header'>Personal Touch</h1>
                            <p className='paragraph'>Every home, every office, every space tells a story. We pride ourselves on understanding these stories and adding our personal touch, making every painted space truly unique.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 text-section" id="text4">
                            <h1 className='small-header'>End-to-End Service</h1>
                            <p className='paragraph'>Our relationship with our clients goes beyond just painting. From consultation to after-care, we offer end-to-end services ensuring a seamless and memorable experience.</p>
                        </div>
                    </div>
                
                </div>
            </div>



</>

    
  )
}
