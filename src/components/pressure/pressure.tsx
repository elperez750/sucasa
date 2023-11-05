import 'bootstrap/dist/css/bootstrap.min.css';
import image2 from '../../images/pressure-main.jpeg';
import imagefour from '../../images/fence-pressure.jpeg';
import imagefive from '../../images/pressure-commercial.png';
import imagesix from '../../images/pressure-siding.jpeg';
import imageseven from '../../images/pressure-deck.jpeg';
import imageeight from '../../images/pressure-driveway.jpeg';
import imagenine from '../../images/pressure-roof.jpeg';
import benjamin from '../../images/benjamin.jpeg';
import purdy from '../../images/purdy.jpg';
import threem from '../../images/threem.jpeg';
import trimaco from '../../images/trimaco.jpeg';
import sherwin from '../../images/sherwin.jpeg';
import frogtape from '../../images/frogtape.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pressure.css';
import Marquee from "react-fast-marquee";
import quality from "../../images/quality.png";
import idea from "../../images/idea.png";
import team_work from "../../images/team-work.png";
import commitement from "../../images/commitement.png";
import leadership from "../../images/leadership.png";
import Faq from "react-faq-component";
import {data, styles, config } from "../Faq/pressureFaq";
import { Navigation } from '../navigation/navigate';

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
  <div className="service">Pressure Washing</div>

</div>

 
            <div className="quote-container-pressure">
            <div className='container quote'>
                <div className='row'>
            <div className='col-lg-6'>
            <h1>Get a quote today!</h1>
            </div>
            <div className='col-lg-6'>
            
            <Navigation className="btn btn-custom btn-lg btn-block quote-button" text="Get a free quote" />
            </div>
            </div>
            </div>
            

        </div>

        <div className="container mt-4 pressure-main">
      <div className='row align-items-stretch'>
      <div className='col-lg-6 position-relative'>
        <img className="interior-right" src={image2} alt="pressure" />
        <div className="square"></div>
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
              <Navigation className="btn btn-custom btn-lg btn-block explore " text="Get Started" />
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
                  <Navigation className="btn btn-custom btn-lg btn-block explore " text="Get a free quote" />
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
