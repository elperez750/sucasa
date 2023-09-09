

import 'bootstrap/dist/css/bootstrap.min.css';
import './services.css';
import image from '../../images/paintbrush.jpeg';
import interior_image from '../../images/interior.jpg';
import exterior_image from '../../images/exterior.jpg';
import commercial_image from '../../images/commercial.jpg';
import pressure_image from '../../images/pressure_wash.jpeg';

export default function Services() {
  return (
    <>
    <div className='image-container'>
        <img className="paintbrush" src={image} alt="paintbrush" />
        <div className="service">Services</div>
      </div>    

    <div className='description'>
    <p className="about-services">
        SuCasa Paint and RoofCare has been the go-to choice for homeowners and businesses across the metropolitan area for over three decades. We operate with full licensing, bonding, and insurance, adhering to the highest standards set by our state. As a testament to our commitment, we are also proud to be recognized by the Roofing and Paint Professionals Association. Whether your need is a fresh coat of paint or comprehensive roof maintenance, our dedicated team brings the expertise and precision to ensure your property looks its best and stands the test of time.
    </p>

    <button type="button" className="btn btn-custom btn-lg service-button">Schedule a free estimate</button>



   

    </div>

    <div className="interior-container">
    <div className='interior-text'>
            <h1>Interior Painting</h1>
              <p>Interior painting is more than just applying color; it's about capturing a room's essence and mood. The right shade and finish can transform a space, making it a reflection of personal style. It's not just decor, but a canvas where life's stories unfold.</p>
            </div>
          
            <img className="interior" src={interior_image} alt="interior" /> 
            <button type="button" className="btn btn-custom btn-lg interior-button">Learn More</button>

            
        </div>

        <div className="exterior-container">
      <div className='exterior-text'>
            <h1>Exterior Painting</h1>
              
              <p>Exterior painting is more than a visual upgrade; it's a shield against the elements. The right paint enriches a property's character, protects its integrity, and ensures it stands out in the neighborhood. It's not just about aesthetics, but ensuring longevity in the face of time and weather.</p>
            </div>
          
            <img className="exterior" src={exterior_image} alt="exterior" /> 
            <button type="button" className="btn btn-custom btn-lg exterior-button">Learn More</button>

            
        </div>


        <div className="commercial-container">
      <div className='commercial-text'>
            <h1>Commercial Painting</h1>
              
              <p>Commercial painting goes beyond aesthetics—it's about creating an environment that drives productivity and communicates professionalism. With the right hue and finish, businesses can leave a lasting impression on clients and foster a positive workspace for employees. It's where commerce meets craftsmanship.</p>
            </div>
          
            <img className="commercial" src={commercial_image} alt="commercial" /> 
            <button type="button" className="btn btn-custom btn-lg commercial-button">Learn More</button>

            
        </div>

      <div className='pressure-container'>
        <div className='pressure-text'>
            <h1>Pressure Washing</h1>
              
              <p>Pressure washing rejuvenates your property by swiftly removing dirt, grime, and residues. Perfect for exteriors, driveways, and patios, our services deliver a refreshed and revitalized look in no time.</p>
            </div>
          
            <img className="pressure" src={pressure_image} alt="pressure" /> 
            <button type="button" className="btn btn-custom btn-lg pressure-button">Learn More</button>

            
        </div>



   
    
    </>
    
  )
}

