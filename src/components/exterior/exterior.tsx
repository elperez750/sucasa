import React from 'react'
import image from '../../images/exterior-image.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './exterior.css';
import image2 from '../../images/painting-exterior.jpeg';
import imageone from '../../images/whyusone.jpeg';
import imagetwo from '../../images/seattle.jpeg';
import imagethree from '../../images/family.jpeg';
import imagefour from '../../images/fence.jpeg';
import imagefive from '../../images/exterior-door.jpeg';
import imagesix from '../../images/brick.jpeg';
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
import './exterior.css';
import Marquee from "react-fast-marquee";

export default function exterior() {
  const images = [
    benjamin,
    purdy, threem,
    trimaco, sherwin,
    frogtape,
  ]


  return (
  <>
      <div className='image-container'>
    <div className="parallax-exterior">
  
    </div>
  <div className="service">Exterior</div>
  <h2 className='other-caption-exterior '><span>Explore a world where comfort meets impeccable taste.</span></h2>

</div>

 
            <div className="quote-container-exterior">
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

        <div className="container mt-4 exterior-main">
      <div className='row align-items-stretch'>
      <div className='col-lg-6'>
        <img className="interior-right" src={image2} alt="interior" />
        </div>
        <div className='col-lg-6'>
          <div className="text-section-exterior">
                  <h2>Sucasa Paint and Roof Exterior Mastery</h2>
                  <p>Embrace the allure of renewed exteriors with Sucasa Paint and Roof, where we redefine the essence of outdoor aesthetics with our superior painting solutions. Venture into a realm where hues revive your property, manifesting a façade that mirrors your aspirations. Our dedication lies in metamorphosing your cherished spaces with accuracy, professionalism, and timeliness.</p>
              </div>
              <div className="text-section-exterior">
                  <h2>Unwavering Excellence and Craftsmanship</h2>
                  <p>Your property's exterior is more than just a boundary; it's a statement of your individual taste and a fortress that shelters your cherished memories. At Sucasa Paint and Roof, we pledge to magnify the grandeur of your exteriors with an unwavering commitment to excellence. Employing top-tier supplies and cutting-edge methodologies, our adept painters promise long-lasting and striking finishes that brave the elements. Your delight fuels our journey, driving us to impeccable precision with every brushstroke, shaping façades that articulate your narrative spectacularly.</p>
              </div>
              <div className="text-section-exterior">
                  <h2>Customized Strategies for Every Facade</h2>
                  <p>In the sphere of exterior painting, generic strategies simply don't measure up. Acknowledging this, our virtuosos invest earnest effort in understanding the distinctive structural details of your property, the environmental influences, and your personal style preferences. The result? A cascade of colors that does more than adorn your exteriors—it rejuvenates your entire property, amplifying your curb appeal and enhancing your daily living backdrop.</p>
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



            <div className="container exterior-services">
              <div className='row'>
                <div className='col-lg-12'>
                  <h1>Services offered</h1>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imagefour} alt="exterior-services" />
                  <h2>Fence Staining and Painting</h2>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imagefive} alt="exterior-services" />
                  <h2>Exterior Door Painting</h2>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imagesix} alt="exterior-services" />
                  <h2>Brick Painting</h2>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imageseven} alt="exterior-services" />
                  <h2>Deck Staining</h2>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imageeight} alt="exterior-services" />
                  <h2>Siding Painting</h2>
                </div>
                <div className='col-lg-4'>
                  <img className="exterior-services-image" src={imagenine} alt="exterior-services" />
                  <h2>Garage Painting</h2>
                </div>
                
                <div className='justify-content-center'>
                  <button type="button" className="btn btn-custom btn-lg btn-block explore ">Get a free quote</button>
                </div>
              </div>
              </div>

      <div className="suppliers">
        <h1>Suppliers and brands we trust</h1>
      </div>


      <div className="container exterior-secondary">
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
