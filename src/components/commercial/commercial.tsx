import React from 'react'
import image from '../../images/exterior-image.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

import image2 from '../../images/commercial-building.jpeg';
import imageone from '../../images/whyusone.jpeg';
import imagetwo from '../../images/seattle.jpeg';
import imagethree from '../../images/family.jpeg';
import imagefour from '../../images/restaurant.jpeg';
import imagefive from '../../images/office.jpeg';
import imagesix from '../../images/building.jpeg';
import imageseven from '../../images/deck.jpeg';
import imageeight from '../../images/siding.jpeg';
import imagenine from '../../images/garage.jpeg';
import imageten from '../../images/door.jpeg';
import imageeleven from '../../images/stair.jpeg';
import benjamin from '../../images/benjamin.jpeg';
import purdy from '../../images/purdy.jpg';
import threem from '../../images/threem.jpeg';
import trimaco from '../../images/trimaco.jpeg';
import sherwin from '../../images/sherwin.jpeg';
import frogtape from '../../images/frogtape.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './commercial.css';
import Marquee from "react-fast-marquee";

export default function commercial() {
  const images = [
    benjamin,
    purdy, threem,
    trimaco, sherwin,
    frogtape,
  ]


  return (
  <>
      <div className='image-container'>
    <div className="parallax-commercial">
  
    </div>
  <div className="service">Commercial</div>
  <h2 className='other-caption-commercial '><span>NAVIGATE A REALM WHERE EFFICIENCY MERGES WITH EXQUISITE ELEGANCE.</span></h2>

</div>

 
            <div className="quote-container-commercial">
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

        <div className="container mt-4 commercial-main">
      <div className='row align-items-stretch'>
      <div className='col-lg-6'>
        <img className="commercial-right" src={image2} alt="commercial" />
        </div>
        <div className='col-lg-6'>
          <div className="text-section-commercial">
                  <h2>Sucasa Paint and Roof Commercial Painting Excellence</h2>
                  <p>Step into the future of vibrant workspaces with Sucasa Paint and Roof, your partner in transforming business environments through our distinguished painting services. Immerse yourself in a domain where color schemes ignite productivity, fostering a professional façade that aligns with your corporate identity. Our devotion is anchored in revolutionizing your commercial spaces with precision, expertise, and efficiency.</p>
              </div>
              <div className="text-section-commercial">
                  <h2>Environments that Embolden and Inspire</h2>
                  <p>At Sucasa Paint and Roof, we understand that a stellar commercial paint job is pivotal in creating an ambiance conducive to innovation, engagement, and achievement. Our holistic approach guarantees an environment not only pleasing to the eyes but also one that stimulates inspiration and confidence among employees and clients alike. Experience the tranquility of spaces painted with passion, fortified by quality, and echoing the silent narrative of your commercial triumph.</p>
                </div>
              <div className="text-section-commercial">
                  <h2>Bespoke Solutions for Every Corporate Entity</h2>
                  <p>In the world of commercial painting, universal solutions are a glaring oversight. Recognizing the nuances, our seasoned specialists take the time to comprehend the unique architectural aspects of your commercial property, environmental considerations, and your branding necessities. The result? A palette of perfection that goes beyond aesthetic enhancement—it revitalizes your professional presence, boosting your brand's visibility and reinforcing its ethos in every stroke.</p>
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



            <div className="container commercial-services">
              <div className='row'>
                <div className='col-lg-12'>
                  <h1>Services offered</h1>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imagefour} alt="exterior-services" />
                  <h2>Restaurant Painting</h2>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imagefive} alt="exterior-services" />
                  <h2>Office Painting</h2>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imagesix} alt="exterior-services" />
                  <h2>Commercial Building Exterior</h2>
                </div>
                
                <div className='justify-content-center'>
                  <button type="button" className="btn btn-custom btn-lg btn-block explore ">Get a free quote</button>
                </div>
              </div>
              </div>

      <div className="suppliers">
        <h1>Suppliers and brands we trust</h1>
      </div>


      <div className="container commercial-secondary">
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
