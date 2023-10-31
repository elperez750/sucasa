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
import quality from "../../images/quality.png";
import idea from "../../images/idea.png";
import team_work from "../../images/team-work.png";
import commitement from "../../images/commitement.png";
import leadership from "../../images/leadership.png";
import Faq from "react-faq-component";
import {data, styles, config } from "../Faq/commercialFaq";

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
      <div className='col-lg-6 position-relative'>
        <img className="interior-right" src={image2} alt="commercial" />
        <div className="square"></div>
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



              <div className="values-that-drive-work">
                <div className="container">
                    <div className="row values">
                        <div className="col-lg-4 the-values text-start">
                            <h4>Our values</h4>
                            <h1>The values that drive our work</h1>
                        </div>
                        <div className="col-lg-4 gray back-one">
                          
                            <div className="square-two">
                            <img className="icons" src={quality} alt="hellos"></img>
                            
                            </div>
                            <h3>Quality</h3>
                        </div>
                        <div className="col-lg-4 box">
                        <div className="square-two">
                            <img className="icons" src={idea} alt="hellos"></img>
                            </div>
                            <h3>Inovation</h3>
                        </div>
                        <div className="col-lg-4 gray">
                        <div className="square-two">
                            <img className="icons" src={team_work} alt="hellos"></img>
                            </div>
                            <h3>Team Work</h3>
                        </div>
                        <div className="col-lg-4 box">
                        <div className="square-two">
                            <img className="icons" src={commitement} alt="hellos"></img>
                            </div>
                            <h3>Commitement</h3>
                        </div>
                        <div className="col-lg-4 gray back-two">
                        <div className="square-two">
                            <img className="icons" src={leadership} alt="hellos"></img>
                            </div>
                            <h3>Leadership</h3>
                         

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



            <div className="container-faq">

            <Faq
                data={data}
                styles={styles}
                config={config}
            />

    </div>



</>

    
  )
}
