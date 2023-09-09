import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../images/interior.jpg';
import image2 from '../../images/exterior.jpg';
import image3 from '../../images/commercial.jpg';
import image5 from '../../images/pressure_wash.jpeg';
import image4 from '../../images/jesus.jpg';
import { Link } from 'react-router-dom';

function Goals() {
    return (
        <>
        <div className="content-wrapper">
            <div className="text-area">
                <h1 className='Who'>Who we are</h1>
                <h4 className='location'>Residential & Commercial Painting Company in Sultan, WA</h4>
                <p className='first-paragraph'>Sucasa paint and roof is a bonded insured roofing and painting contractor in the State of Washington. Jesus Perez owner and the operator. He worked within the roofing and painting industry since 1999. Using his extensive knowledge and a vast range of experience. He works directly with his clients to ensure that each project is completed properly and in accordance with the initial estimate. Sucasa Paint and Roof can provide the service you need when you need it and at price you afford.</p>
                <p className='second-paragraph'>We are committed to providing you with the best job possible for a reasonable price. We aren't happy until you are, and we'll work with you until you are satisfied. We hold ourselves to a high level, and we look to exceed that level everyday. With more than 20 years worth of experience, we bring excellence and quality to your home, and we hope to continue in the future.</p>
                <button type="button" className="btn btn-custom btn-lg btn-block start">Get started</button>
            </div>
            <div className="image-section">
                <img className="image-on-right" src={image4} alt="Description of Image 1" />
               
            </div>
        </div>

        <section id="goal">
            <div className='goal'>
            <h1 className="our-goal">Our Goal</h1>
            <h4 className="for-us">For us, making the client happy is our number one priority. We will work closely with you to figure out your needs and satisfy you. Others may overlook the smallest details, but we are dedicated to perfection and quality. We work hard all year and are glad to come help you with your project, rain or shine!</h4>
            <div className='image-container'>
                <div className='image-wrapper'>
                <Link to="/interior">
                <img className="interior" src={image1} alt="interior" /> 
                <div className='hover-text'>Interior</div>
                <div className="hover-overlay"></div>
                </Link>
             </div>

             <div className='image-wrapper'>
                <Link to="/exterior">
                    <img className="exterior" src={image2} alt="exterior" /> 
                
                <div className='hover-text'>Exterior</div>
                <div className="hover-overlay"></div>
            </Link>
            </div>

            <div className='image-wrapper'>
                <Link to="commercial">
                <img className="commercial" src={image3} alt="commercial" /> 
                <div className='hover-text'>Commercial</div>
                <div className="hover-overlay"></div>
                </Link>
            </div>
            <div className='image-wrapper'>
                <Link to="/pressure">
                <img className="pressure" src={image5} alt="pressure" /> 
                <div className='hover-text'>Pressure Wash</div>
                <div className="hover-overlay"></div>
                </Link>
            </div>
            </div> 
            </div>

        
           
            
        </section>

        </>
    );
}

export default Goals;