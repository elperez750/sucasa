import React from 'react'
import image from '../../images/bellevue.png';
import image2 from "../../images/sammamish.jpeg"
import image3 from "../../images/issaquah.jpeg"
import image4 from "../../images/seattletwo.jpeg"
import image5 from "../../images/kirkland.jpeg"
import image6 from "../../images/rainer.jpeg"
import image7 from "../../images/everett.jpeg"
import image8 from "../../images/edmonds.jpeg"
import image9 from "../../images/redmond.jpeg"
import image10 from "../../images/woodinville.jpeg"
import image11 from "../../images/monroe.jpeg"
import image12 from "../../images/renton.jpeg"
import image13 from "../../images/bothell.png"
import image14 from "../../images/tacoma.jpeg"



import 'bootstrap/dist/css/bootstrap.min.css';
import "./location.css"

export default function location() {
  return (
    <>
    <body>

    <div className='image-container'>
    <div className="parallax-locations">
  
    </div>
    <div className="service">Locations</div>

</div>
   


    <div className="location-text">
      <h1 className='main-header'>Areas we serve</h1>
      <h3>Don't see your area? Don't be discouraged and contact us anyways!</h3>
      <p>These are the main cities that we serve, but Sucasa Painting is happy to work on homes all throughout the Greater Seattle area. Speak to one of our team members today!</p>
      <button type="button" className="btn btn-custom btn-lg btn-block explore ">Explore</button>
    </div>


    <div className="row locations" >
      <div className="col-lg-3">
      <img className="image-circles" src={image} alt="Description of Image 1"></img>
      <h1>Bellevue</h1>
      </div>
      <div className="col-lg-3">
      <img className="image-circles" src={image2} alt="Description of Image 1"></img>
      <h1>Sammamish</h1>
      </div>
      <div className="col-lg-3">
      <img className="image-circles" src={image3} alt="Description of Image 1"></img>
      <h1>Issaquah</h1>
      </div>
      <div className="col-lg-3">
      <img className="image-circles" src={image4} alt="Description of Image 1"></img>
      <h1>Seattle</h1>
      </div>
      <div className="col-lg-3">
      <img className="image-circles" src={image5} alt="Description of Image 1"></img>
      <h1>Kirkland</h1>
      </div>
      <div className="col-lg-3">
      <img className="image-circles" src={image7} alt="Description of Image 1"></img>
      <h1>Everett</h1>
      </div>
      <div className="col-lg-3">
      <img className="image-circles" src={image8} alt="Description of Image 1"></img>
      <h1>Edmonds</h1>
      </div>
      <div className="col-lg-3">
      <img className="image-circles" src={image9} alt="Description of Image 1"></img>
      <h1>Redmond</h1>
      </div>
      <div className="col-lg-3">
      <img className="image-circles" src={image10} alt="Description of Image 1"></img>
      <h1>Woodinville</h1>
      </div>
      <div className="col-lg-3">
      <img className="image-circles" src={image11} alt="Description of Image 1"></img>
      <h1>Monroe</h1>
      </div>
      <div className="col-lg-3">
      <img className="image-circles" src={image12} alt="Description of Image 1"></img>
      <h1>Renton</h1>
      </div>
      <div className="col-lg-3">
      <img className="image-circles" src={image13} alt="Description of Image 1"></img>
      <h1>Bothell</h1>
      </div>
      <div className="col-lg-3">
      <img className="image-circles" src={image14} alt="Description of Image 1"></img>
      <h1>Tacoma</h1>
      </div>
    </div>
    </body>
    
    </>
  )
}
