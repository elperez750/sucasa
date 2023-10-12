import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../images/interior.jpg';
import image2 from '../../images/exterior.jpg';
import image3 from '../../images/commercial.jpg';
import image5 from '../../images/pressure_wash.jpeg';
import image4 from '../../images/jesus.jpg';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Goals() {

    useEffect(() => {
        AOS.init({
            duration: 1000 // This value can be adjusted
        });
    }, []);

    return (
        <>
            <div className="container who-we-are-container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className='Who'>Who we are</h1>
                        <h4 className='location'>Residential & Commercial Painting Company in Sultan, WA</h4>
                        <p className='first-paragraph'>Sucasa Paint and Roof stands as a premier, bonded, and insured roofing and painting contractor in the ever-evolving State of Washington. At the heart of this esteemed establishment is Jesus Perez, the diligent owner and hands-on operator. With an eye for detail and a dedication to maintaining the highest standards, Jesus ensures that every project undertaken by Sucasa Paint and Roof mirrors his personal ethos of quality, professionalism, and impeccable workmanship. His leadership goes beyond mere oversight; he's deeply involved in every phase, ensuring clients receive unparalleled service and results that stand the test of time. This level of commitment has not only earned Sucasa Paint and Roof a sterling reputation but has also cemented its place as one of the most sought-after contractors in the region.</p>
                        <p className='second-paragraph'>Jesus is deeply committed to his craft. With over two decades of dedicated experience, he brings a wealth of knowledge and expertise to every project. His longstanding commitment to the field is evident in the quality of his work, ensuring excellence in all he undertakes.</p>
                        <button type="button" className="btn btn-custom btn-lg btn-block start">Get started</button>
                    </div>
                    

                    <div className="col-lg-6">
                        <img className="image-on-right" src={image4} alt="Description of Image 1" />
                    </div>
                </div>
            </div>
           
              
            

            <section id="goal" data-aos='zoom-in'>
                <h1 className="our-goal">Our Goal</h1>
                <h4 className="for-us">At SuCasa Paint and Roof, making the client happy isn’t merely a target—it’s a promise. We understand the significance of the walls that shelter you and the roof that guards against the elements. It's more than just paint and shingles; it's your home, your sanctuary.</h4>
                <div className='container goals-containers'>
                    <div className="row justify-content-center">
                        <div className='col-lg-6 col-md-3 image-wrapper'>
                            <Link to="/interior">
                                <img className="interior" src={image1} alt="interior" />
                                <div className='hover-text'>Interior</div>
                                <div className="hover-overlay"></div>
                            </Link>
                        </div>

                        <div className='col-lg-6 col-md-3 image-wrapper'>
                            <Link to="/exterior">
                                <img className="exterior" src={image2} alt="exterior" />
                                <div className='hover-text'>Exterior</div>
                                <div className="hover-overlay"></div>
                            </Link>
                        </div>

                        <div className='col-lg-6 col-md-3 image-wrapper'>
                            <Link to="commercial">
                                <img className="commercial" src={image3} alt="commercial" />
                                <div className='hover-text'>Commercial</div>
                                <div className="hover-overlay"></div>
                            </Link>
                        </div>

                        <div className='col-lg-6 col-md-3 image-wrapper'>
                            <Link to="/pressure">
                                <img className="pressure" src={image5} alt="pressure" />
                                <div className='hover-text'>Pressure Wash</div>
                                <div className="hover-overlay"></div>
                            </Link>
                        </div>
                        <div className="explore-div">
                        <button type="button" className="btn btn-custom btn-lg btn-block explore">Schedule a free estimate</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Goals;
