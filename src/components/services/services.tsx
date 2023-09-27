import 'bootstrap/dist/css/bootstrap.min.css';
import './services.css';
import image from '../../images/paintbrush.jpeg';
import interior_image from '../../images/interior.jpg';
import exterior_image from '../../images/exterior.jpg';
import commercial_image from '../../images/commercial.jpg';
import pressure_image from '../../images/pressure_wash.jpeg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className='image-container'>
                <img className="img-fluid" src={image} alt="paintbrush" />
                <div className="service">SERVICES</div>
            </div>

            <div className='container-description'>
                <p className="about-services">
                Sucasa Paint and Roof has been a trusted name in Sultan, WA, and its surrounding areas for decades. We're a fully licensed, bonded, and insured business in Washington State, and we prioritize environmental safety as an EPA Lead-Safe Certified firm. Catering to both commercial and residential projects, whether it's roofing or painting, interior or exterior, our team's vast experience ensures delivery of an impeccable final product.
                </p>
                <div className="text-center">
                    <button type="button" className="btn btn-custom btn-lg service-button">Schedule a free estimate</button>
                </div>
            </div>

            <div data-aos="fade-left" className="container my-4">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>Interior Painting</h1>
                        <p>Transform your indoor spaces with rich colors and professional finishes. Our interior painting services offer a seamless, efficient, and meticulous application, ensuring every room truly reflects your style.</p>
                        <a href="/interior" className="btn btn-custom btn-lg">Learn More</a>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={interior_image} alt="interior" />
                    </div>
                </div>
            </div>

            <div data-aos="fade-right" className="container my-4">
                <div className="row align-items-center">
                    <div className="col-md-6 order-md-2">
                        <h1>Exterior Painting</h1>
                        <p>Boost your home's curb appeal with a fresh coat of paint. Our exterior painting professionals ensure a clean, detailed appearance that not only protects but also beautifies your home's facade.</p>
                        <a href="/exterior" className="btn btn-custom btn-lg">Learn More</a>
                    </div>
                    <div className="col-md-6 order-md-1">
                        <img className="img-fluid" src={exterior_image} alt="exterior" />
                    </div>
                </div>
            </div>

            {/* Add similar rows for Commercial Painting and Pressure Washing */}
            <div data-aos="fade-left" className="container my-4">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>Commercial Painting</h1>
                        <p>Present your business in the best light with top-notch commercial painting. Whether it's an office, retail space, or industrial setting, our team delivers high-quality finishes that echo professionalism.</p>
                        <a href="/commercial" className="btn btn-custom btn-lg">Learn More</a>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={commercial_image} alt="commercial" />
                    </div>
                </div>
            </div>


            <div data-aos="fade-right" className="container my-4">
                <div className="row align-items-center">
                    <div className="col-md-6 order-md-2">
                        <h1>Pressure</h1>
                        <p>Revitalize and clean surfaces with our pressure washing services. Effectively remove dirt, grime, and mildew, restoring the beauty and extending the life of your property's exteriors.</p>
                        <a href="/pressure" className="btn btn-custom btn-lg">Learn More</a>
                    </div>
                    <div className="col-md-6 order-md-1">
                        <img className="img-fluid" src={pressure_image} alt="pressure" />
                    </div>
                </div>
            </div>

        </>
    )
}
