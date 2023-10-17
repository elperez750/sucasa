import 'bootstrap/dist/css/bootstrap.min.css';
import './expertise-styles.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../../images/whyusone.jpeg';
import image2 from '../../images/seattle.jpeg';
import image3 from '../../images/family.png';
import project1 from '../../images/project-1.jpg';
import project2 from '../../images/project-2.jpeg';
import project3 from '../../images/project-3.jpeg';
import project4 from '../../images/project-4.jpeg';
import project5 from '../../images/project-5.jpeg';
import project6 from '../../images/project-6.jpeg';
import project7 from '../../images/project-7.jpeg';
import project8 from '../../images/project-8.jpeg';




function Expertise() {
    useEffect(() => {
        AOS.init({
            duration: 1000 // Adjustable value
        });
    }, []);

    return (
        <>

            <div className="why-us">
                <h2 className="text-center mb-4">Why Choose Us?</h2>
                <div className='container'>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="image-container-home">
                            <img className="why-us-image" src={image} alt="why-us-image"></img>
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
                            <img className="why-us-image" src={image2} alt="why-us-image"></img>
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
                            <img className="why-us-image" src={image3} alt="why-us-image"></img>
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


            <div className="quote-container">
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


        <div className='projects-container'>
            <h1 className="text-center mb-4">Projects</h1>
                <div className='container'>
                    <div className="row project-image">
                        <div className="col-lg-3 col-md-12">
                            <img className="fluid" src={project1} alt="project-image"></img>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <img className="fluid" src={project2} alt="project-image"></img>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <img className="fluid" src={project3} alt="project-image"></img>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <img className="fluid" src={project4} alt="project-image"></img>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <img className="fluid" src={project5} alt="project-image"></img>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <img className="fluid" src={project6} alt="project-image"></img>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <img className="fluid" src={project7} alt="project-image"></img>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <img className="fluid" src={project8} alt="project-image"></img>
                        </div>
                    </div>
                </div>

                </div>


                <div>
                <div className='container local-container'>
                    <div className="row">
                        
                        <div className="col-lg-6 col-md-12 local-text">
                            <h1 className='local-text'>Design Pioneers</h1>
                            <h4 className="local-text-below">Selecting a Local Design Maestro Can Elevate Your Experience</h4>
                            <p>In the dynamic world of design, the expertise of a local maestro can make a world of difference. Design pioneers, deeply rooted in the community, understand the nuances and preferences of their clientele, enabling them to create designs that resonate deeply. Their proximity offers an unparalleled advantage in communication, understanding, and tailoring solutions to unique requirements. When you opt for a local design expert, you're not just choosing a professional; you're selecting a partner who's deeply invested in bringing your vision to life, one who understands the local aesthetic and integrates it seamlessly with global trends. Elevate your design journey by aligning with those who know your community best.</p>
                            <button type="button" className="btn btn-custom btn-lg local-button">Schedule a free estimate </button>

                        </div>
                        <div className="col-lg-6 col-md-12">
                            <img className="fluid" src={project1} alt="project-image"></img>
                        </div>
                    </div>
                </div>
                </div>


          
        </>
    );
}

export default Expertise;
