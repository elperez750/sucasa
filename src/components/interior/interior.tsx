import React from 'react'
import image from '../../images/interior-page.jpeg';
import image2 from '../../images/interior.jpg';
import imageone from '../../images/whyusone.jpeg';
import imagetwo from '../../images/seattle.jpeg';
import imagethree from '../../images/family.jpeg';
import imagefour from '../../images/bathroom.jpeg';
import imagefive from '../../images/cabinet.jpg';
import imagesix from '../../images/kitchen.jpeg';
import imageseven from '../../images/room.jpeg';
import imageeight from '../../images/trim.jpeg';
import imagenine from '../../images/window.jpeg';
import imageten from '../../images/door.jpeg';
import imageeleven from '../../images/stair.jpeg';
import benjamin from '../../images/benjamin.jpeg';
import purdy from '../../images/purdy.jpg';
import threem from '../../images/threem.jpeg';
import trimaco from '../../images/trimaco.jpeg';
import sherwin from '../../images/sherwin.jpeg';
import frogtape from '../../images/frogtape.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './interior.css';
import Marquee from "react-fast-marquee";


export default function interior() {
  const images = [
    benjamin,
    purdy, threem,
    trimaco, sherwin,
    frogtape,
  ]
  return (
    <>

<div className='image-container'>
  <div className="parallax">
  
  </div>
  <div className="service">Interior</div>
  <h2 className='other-caption-interior '><span>Explore a world where comfort meets impeccable taste.</span></h2>

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
       

    <div className="container mt-4 interior-main">
      <div className='row align-items-stretch'>
      <div className='col-lg-6'>
        <img className="interior-right" src={image2} alt="interior" />
        </div>
        <div className='col-lg-6'>
          <div className="text-section-interior">
                  <h2>Sucasa Paint and Roof Interior Services</h2>
                  <p>Experience the transformative power of a fresh coat of paint with [Your Business Name]! Our expert team is dedicated to bringing life back to your interiors with our premier painting services. Step into a world where colors enhance your space, creating environments that are tailored to your desires. At Sucasa Paint and Roof, we take pride in turning your dream interiors into reality with precise, professional, and punctual services..</p>
              </div>
              <div className="text-section-interior">
                  <h2>Our Commitment to Quality and Precision</h2>
                  <p>Your home is not merely a place; it's a reflection of your personality and style. At [Your Business Name], we commit to honoring your vision with meticulous attention to detail and unmatched quality. Utilizing only premium materials and innovative techniques, our seasoned painters ensure durable and vibrant finishes that stand the test of time. Your satisfaction is our motivation, and we stride towards perfection in every stroke, crafting spaces that tell your story eloquently.</p>
              </div>
              <div className="text-section-interior">
                  <h2>Tailored Solutions for Every Space</h2>
                  <p>In the realm of interior painting, a one-size-fits-all approach is a misfit. Recognizing this, our seasoned experts delve deep into comprehending the unique architectural nuances of your spaces, the lighting, and your aesthetic inclinations. The outcome? A symphony of colors that not only compliments your décor but also elevates your day-to-day living experience.</p>
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



            <div className="container interior-services">
              <div className='row'>
                <div className='col-lg-12'>
                  <h1>Services offered</h1>
                </div>
                <div className='col-lg-3'>
                  <img className="interior-services-image" src={imagefour} alt="interior-services" />
                  <h2>Bathroom Painting</h2>
                </div>
                <div className='col-lg-3'>
                  <img className="interior-services-image" src={imagefive} alt="interior-services" />
                  <h2>Cabinet Painting</h2>
                </div>
                <div className='col-lg-3'>
                  <img className="interior-services-image" src={imagesix} alt="interior-services" />
                  <h2>Kitchen Painting</h2>
                </div>
                <div className='col-lg-3'>
                  <img className="interior-services-image" src={imageseven} alt="interior-services" />
                  <h2>Room Painting</h2>
                </div>
                <div className='col-lg-3'>
                  <img className="interior-services-image" src={imageeight} alt="interior-services" />
                  <h2>Trim Painting</h2>
                </div>
                <div className='col-lg-3'>
                  <img className="interior-services-image" src={imagenine} alt="interior-services" />
                  <h2>Window Painting</h2>
                </div>
                <div className='col-lg-3'>
                  <img className="interior-services-image" src={imageten} alt="interior-services" />
                  <h2>Door Painting</h2>
                </div>
                <div className='col-lg-3'>
                  <img className="interior-services-image" src={imageeleven} alt="interior-services" />
                  <h2>Staircase Painting</h2>
                </div>
                <div className='justify-content-center'>
                  <button type="button" className="btn btn-custom btn-lg btn-block explore ">Get a free quote</button>
                </div>
              </div>
              </div>

      <div className="suppliers">
        <h1>Suppliers and brands we trust</h1>
      </div>


      <div className="container interior-secondary">
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
    )}

