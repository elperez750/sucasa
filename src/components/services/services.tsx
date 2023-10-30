import 'bootstrap/dist/css/bootstrap.min.css';
import './services.css';
import interior_image from '../../images/interior.jpg';
import exterior_image from '../../images/exterior.jpg';
import commercial_image from '../../images/commercial.jpg';
import pressure_image from '../../images/pressure_wash.jpeg';
import estimate_image from '../../images/estimate.jpeg';
import swatch_image from '../../images/swatch.png';
import roller_image from '../../images/roller.png';
import heart_house from '../../images/heart-house.png';
import paint_roller from '../../images/paint-roller.jpeg';
import happy_image from '../../images/happy.jpeg';
import quality from "../../images/quality.png";
import idea from "../../images/idea.png";
import team_work from "../../images/team-work.png";
import commitement from "../../images/commitement.png";
import leadership from "../../images/leadership.png";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Services() {
    useEffect(() => {
       
        AOS.init({ offset: 350, duration: 1000 });
    }, []);

    return (
        <>
            <div className='image-container'>
                <div className="parallax-services">

                </div>
                
                <div className="service">SERVICES</div>
                <h2 className='other-caption-services'>THE RIGHT COMPANY FOR ALL YOUR PAINTING WORK</h2>
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





            <div className='container-description'>
                <p className="about-services">
                Sucasa Paint and Roof has been a trusted name in Sultan, WA, and its surrounding areas for decades. We're a fully licensed, bonded, and insured business in Washington State, and we prioritize environmental safety as an EPA Lead-Safe Certified firm. Catering to both commercial and residential projects, whether it's roofing or painting, interior or exterior, our team's vast experience ensures delivery of an impeccable final product.
                </p>
                <div className="text-center">
                    <button type="button" className="btn btn-custom btn-lg service-button">Schedule a free estimate</button>
                </div>
            </div>


            <div data-aos="fade-right" className="container my-4">
                <div className="row align-items-center">
                    <div className="col-md-6 services-container">
                        <h1>Interior Painting</h1>
                        <hr className='solid'></hr>
                        <p>Transform your indoor spaces with rich colors and professional finishes. Our interior painting services offer a seamless, efficient, and meticulous application, ensuring every room truly reflects your style.</p>
                        <a href="/interior" className="btn btn-custom btn-lg service-button">Learn More</a>
                    </div>
                    <div className="col-md-6 service-image">
                        <img className="img-fluid" src={interior_image} alt="interior" />
                    </div>
                </div>
            </div>


            <div data-aos="fade-right" className="container my-4">
                <div className="row align-items-center">
                    <div className="col-md-6 services-container">
                    <img className="img-fluid" src={exterior_image} alt="exterior" />
                    </div>
                    <div className="col-md-6 service-image">
                    <h1>Exterior Painting</h1>
                        <hr className='solid'></hr>
                        <p>Boost your home's curb appeal with a fresh coat of paint. Our exterior painting professionals ensure a clean, detailed appearance that not only protects but also beautifies your home's facade.</p>
                        <a href="/exterior" className="btn btn-custom btn-lg service-button">Learn More</a>

                        
                    </div>
                </div>
            </div>

x
            <div data-aos="fade-right" className="container my-4">
                <div className="row align-items-center ">
                    <div className="col-md-6 services-container">
                        <h1>Commercial Painting</h1>
                        <hr className='solid'></hr>
                        <p>Present your business in the best light with top-notch commercial painting. Whether it's an office, retail space, or industrial setting, our team delivers high-quality finishes that echo professionalism.</p>
                        <a href="/commercial" className="btn btn-custom btn-lg service-button">Learn More</a>
                    
                    </div>
                    <div className="col-md-6 service-image">
                        <img className="img-fluid" src={commercial_image} alt="commercial" />
                    </div>
                </div>
            </div>


            <div data-aos="fade-right" className="container my-4">
                <div className="row align-items-center">
                    <div className="col-md-6 services-container">
                    <img className="img-fluid" src={pressure_image} alt="pressure" />
                    </div>
                    <div className="col-md-6 order-md-1 service-image">
                        
                    <h1>Pressure</h1>
                        <hr className='solid'></hr>
                        <p>Revitalize and clean surfaces with our pressure washing services. Effectively remove dirt, grime, and mildew, restoring the beauty and extending the life of your property's exteriors.</p>
                        <a href="/pressure" className="btn btn-custom btn-lg service-button">Learn More</a>

                       
                    </div>
                </div>
            </div>


            <section className='goals-container'>
                <h1 className="steps">A seamless experience from start to finish</h1>
                <div className='container '>
                    <div className="row justify-content-center">
                        <div className='col-lg-4 col-md-6 steps-image'>
                        <img className="fluid" src={estimate_image} alt="pressure" />
                        <div className='icon-bubble'>
                            <img className='swatch' src={swatch_image} alt="swatch" />
                            <span className='step-2'>Step 1</span>
                           
                            </div>
                            <div className='step-descriptions'>
                            <h1 className='step-heading'>Schedule an Estimate</h1>
                            <p>Begin your journey to a refreshed space by scheduling a no-obligation, free estimate. Our expert will assess the area, understand your requirements, and provide a detailed quote tailored to your needs.</p>
                            </div>
                        </div>

                        <div className='col-lg-4 steps-image'>
                        <img className="fluid" src={paint_roller} alt="pressure" />
                        <div className='icon-bubble'>
                            <img className='roller' src={roller_image} alt="roller" />
                            <span className='step-2'>Step 2</span>
                        </div>
                        <div className='step-descriptions'>
                            <h1 className='step-heading'>Finalize Details</h1>
                            <p>Once you've approved the estimate, our team gets to work. We'll protect your belongings, prep the surfaces ensuring they're clean and ready, and then apply premium-quality paints using the best techniques. Our aim is not just to paint but to provide an artful transformation.</p>
                            </div>
                         
                        </div>

                        <div className='col-lg-4 col-md-3 steps-image'>

                        <img className="fluid" src={happy_image} alt="pressure" />
                        <div className='icon-bubble'>
                            <img className='heart-house' src={heart_house} alt="heart_house" />
                            <span className='step-2'>Step 3</span>
                        </div>
                        <div className='step-descriptions'>
                            <h1 className='step-headin'>Get Transformed</h1>
                            <p>After the paint dries, join us for a final walkthrough. We'll address any of your concerns and ensure that the results meet our mutual expectations. Your satisfaction is our primary goal, and our job isn't done until you're delighted with the transformation.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="steps-button">
                        <button type="button" className="btn btn-custom btn-lg btn-block explore">Schedule a free estimate</button>
                        </div>
                </div>
            </section>
            

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


        </>
    )
}
