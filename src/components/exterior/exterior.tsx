import 'bootstrap/dist/css/bootstrap.min.css';
import './exterior.css';
import image2 from '../../images/painting-exterior.jpeg';
import imagefour from '../../images/fence.jpeg';
import imagefive from '../../images/exterior-door.jpeg';
import imagesix from '../../images/brick.jpeg';
import imageseven from '../../images/deck.jpeg';
import imageeight from '../../images/siding.jpeg';
import imagenine from '../../images/garage.jpeg';
import benjamin from '../../images/benjamin.jpeg';
import purdy from '../../images/purdy.jpg';
import threem from '../../images/threem.jpeg';
import trimaco from '../../images/trimaco.jpeg';
import sherwin from '../../images/sherwin.jpeg';
import frogtape from '../../images/frogtape.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './exterior.css';
import Marquee from "react-fast-marquee";
import quality from "../../images/quality.png";
import idea from "../../images/idea.png";
import team_work from "../../images/team-work.png";
import commitement from "../../images/commitement.png";
import leadership from "../../images/leadership.png";
import Faq from "react-faq-component";
import {data, styles, config } from "../Faq/exteriorFaq";
import { Navigation } from "../navigation/navigate";


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
  <h1 className="exterior_header">Exterior</h1>
  <h2 className='other-caption-exterior '><span>Explore a world where comfort meets impeccable taste.</span></h2>

</div>

 
            <div className="quote-container-exterior">
            <div className='container quote'>
                <div className='row'>
            <div className='col-lg-6'>
            <h1>Get a quote today!</h1>
            </div>
            <div className='col-lg-6'>
            <Navigation className="btn btn-custom btn-lg btn-block explore" text="Get a quote" />
            </div>
            </div>
            </div>
            

        </div>

        <div className="container mt-4 exterior-main">
      <div className='row align-items-stretch'>
      <div className='col-lg-6 position-relative'>
        <img className="interior-right" src={image2} alt="interior" />
        <div className="square"></div>

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
              <Navigation className="btn btn-custom btn-lg btn-block explore" text="Get Started" />
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
                  <Navigation className="btn btn-custom btn-lg btn-block explore" text="Get a free quote" />
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
