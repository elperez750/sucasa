import React from 'react';
import './footer.css';
import logo from '../../images/sucasa-logo.png';

function Footer() {
    return (
        <>
            <footer className="container-fluid bg-dark text-white py-4">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <h4 className='about'>About</h4>
                        <img className="logo-for-footer my-3" src={logo} alt="logo" />
                        <p className='footer-description'>
                            We hold proper licensing and insurance and ensure that every professional we hire is experienced, skilled, and has undergone thorough background checks. You can confidently entrust your property to our team, knowing it will be handled with the highest degree of care and respect.
                        </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h4 className='quick-links'>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li><a className='footer-links' href="/interior">Interior</a></li>
                            <li><a className='footer-links' href="/Exterior">Exterior</a></li>
                            <li><a className='footer-links' href="/Commercial">Commercial</a></li>
                            <li><a className='footer-links' href="/Pressure">Pressure Washing</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-center">
                        <h4 className="follow-us">Contact Us</h4>
                        <ul className="list-unstyled">
                            <li className='phone'>Phone: 425-246-5330</li>
                        </ul>
                    </div>
                </div>
            </footer>
            <footer className="footer-bottom  text-white py-2 text-center">
                <p>© 2023 Sucasa Paint and Roofcare</p>
            </footer>
        </>
    );
}

export default Footer;
