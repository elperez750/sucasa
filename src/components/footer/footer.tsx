import React from 'react';
import './footer.css';

import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import tiktok from '../../images/tiktok.png';


function Footer() {
    return (
      
        <>
        <footer>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    
            <div className="footer-section">
                <h4>Contact Information</h4>
                <p>Your Address Here</p>
                <p>Email: jepeto79@hotmail.com</p>
                <p>Phone: (425) 346-6003</p>
            </div>

            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                   
                </ul>
            </div>

            <div className="footer-section social-section">
                <h4>Follow Us</h4>
                <ul>
                    <li><a className="social" href="#" ><img className="instagram" src={instagram} /></a></li>
                    <li><a className="social" href="#"><img className="facebook" src={facebook} /></a></li>
                    <li><a className="social" href="#"><img className="tiktok" src={tiktok} /></a></li>
                </ul>   
               
            </div>

           

          
        </footer>
        <footer className="footer-bottom">
        <div className='contents'>
          <p>© 2023 Sucasa Paint and Roofcare</p>
      </div>
      </footer>
      </>
    );
}

export default Footer;