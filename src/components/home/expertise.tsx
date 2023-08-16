import 'bootstrap/dist/css/bootstrap.min.css';
import './expertise-styles.css';
import image from '../../images/paint.jpg';


function Expertise() {
    return (
    
       

      <div className="background-container">
         <div className='overlay-container'>
         <h1 className='header'>Our Standards</h1>
                
        <div className='grid-container'>
           
            <div className="text-section" id="text1">
                <h1>Trustworthiness</h1>
                <p className='paragraph'>Trust is earned, not given. We pride ourselves on building long-term relationships with our clients, one project at a time. Every contract is a pledge of our integrity and reliability.</p>
            </div>
            <div className="text-section" id="text2">
                <h1>Professionalism</h1>
                <p className="paragraph">Each member of our team is trained to exhibit the highest levels of professionalism, both in the execution of their tasks and in their interactions with clients. When you hire us, you're not just getting a painter; you're getting a partner dedicated to beautifying your space.</p>
            </div>
            <div className="text-section" id="text3">
                <h1>Personal Touch</h1>
                <p className='paragraph'>Every home, every office, every space tells a story. We pride ourselves on understanding these stories and adding our personal touch, making every painted space truly unique.</p>
            </div>
            <div className="text-section" id="text4">
                <h1>End-to-End Service</h1>
                <p className="paragraph">Our relationship with our clients goes beyond just painting. From consultation to after-care, we offer end-to-end services ensuring a seamless and memorable experience.</p>
            </div>
        </div>
        <button className="btn btn-custom btn-lg btn-block explore">Dive Into Our Services</button>
        </div>
     
        </div>
  )
}

export default Expertise;