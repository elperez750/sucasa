import "bootstrap/dist/css/bootstrap.min.css";
import "./expertise-styles.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import project1 from "../../images/project-1.jpg";
import project2 from "../../images/project-2.jpeg";
import project3 from "../../images/project-3.jpeg";
import project4 from "../../images/project-4.jpeg";
import project5 from "../../images/project-5.jpeg";
import project6 from "../../images/project-6.jpeg";
import project7 from "../../images/project-7.jpeg";
import project8 from "../../images/project-8.jpeg";
import roller from "../../images/roller.svg";
import trophy from "../../images/trophy.svg";
import handshake from "../../images/handshake.svg";
import shield from "../../images/shield.svg";
import tag from "../../images/tag.svg";
import eco from "../../images/eco.svg";

function Expertise() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjustable value
    });
  }, []);

  return (
    <>
      <div className="container all-cards mt-4">
        <div className="row g-4">
          <div className="col-md-12">
            <h1>Why Choose us</h1>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card h-100 shadow">
              <div className="card-body">
                <img
                  className="card-img-top"
                  src={roller}
                  alt="Card image cap"
                />
                <h5 className="card-title">Quality of Workmanship</h5>
                <p className="card-text">
                  Our dedication to excellence is evident in every brush stroke.
                  With meticulous preparation, skilled application, and a
                  thorough cleanup, we ensure a flawless finish. Our team uses
                  the latest techniques and top-tier materials to deliver a
                  durable and beautiful result that stands the test of time. We
                  don’t just paint your spaces; we perfect them.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card h-100 shadow">
              <div className="card-body">
                <img
                  className="card-img-top"
                  src={trophy}
                  alt="Card image cap"
                />

                <h5 className="card-title">Years of Experience</h5>
                <p className="card-text">
                  With over a decade in the painting business, our depth of
                  experience speaks for itself. Our seasoned professionals bring
                  a wealth of knowledge to every project, ensuring that every
                  decision, from color selection to finish type, is informed by
                  years of successful practice. Our long-standing presence in
                  the community has been built on trust and consistently
                  exceptional service.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card h-100 shadow">
              <div className="card-body">
                <img className="card-img-top" src={tag} alt="Card image cap" />

                <h5 className="card-title">Competitive Pricing</h5>
                <p className="card-text">
                  We believe in fair, transparent pricing without compromising
                  on quality. Our competitive rates reflect our commitment to
                  giving you the best value. Detailed quotes ensure you
                  understand what you are paying for, with no hidden fees or
                  surprises. We strive to work within your budget to transform
                  your space into something you’ll love.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card h-100 shadow">
              <div className="card-body">
                <img
                  className="card-img-top"
                  src={handshake}
                  alt="Card image cap"
                />

                <h5 className="card-title">Customer Satisfaction Guarantee</h5>
                <p className="card-text">
                  Your happiness is the measure of our success. That’s why we
                  back our work with a customer satisfaction guarantee. If any
                  aspect of our work doesn’t meet your expectations, we pledge
                  to make it right. We value our clients' feedback and work
                  tirelessly to cultivate lasting relationships built on
                  reliability and satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card h-100 shadow">
              <div className="card-body">
                <img
                  className="card-img-top"
                  src={shield}
                  alt="Card image cap"
                />

                <h5 className="card-title">Licensed and Insured</h5>
                <p className="card-text">
                  Rest easy knowing you’re in safe hands. Our business is fully
                  licensed, adhering to the industry's best practices and
                  standards. We are also comprehensively insured, protecting
                  your property and our team in the event of an accident. This
                  commitment to professionalism means your project is always
                  secure with us.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card h-100 shadow">
              <div className="card-body">
                <img className="card-img-top" src={eco} alt="Card image cap" />

                <h5 className="card-title">Eco-Friendly Options</h5>
                <p className="card-text">
                  Sustainability is at the core of our services. We proudly
                  offer eco-friendly painting solutions, including low-VOC and
                  zero-VOC paints that promote healthier indoor air quality and
                  are better for the environment. Our eco-conscious approach
                  extends to responsible waste management and energy-efficient
                  practices, ensuring a greener footprint for every project we
                  undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quote-container">
        <div className="container quote">
          <div className="row">
            <div className="col-lg-6">
              <h1>Get a quote today!</h1>
            </div>
            <div className="col-lg-6">
              <button
                type="button"
                className="btn btn-custom btn-lg btn-block quote-button"
              >
                Get a quote
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-container">
        <h1 className="text-center mb-4">Projects</h1>
        <div className="container">
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
        <div className="container local-container">
          <div className="row">
            <div className="col-lg-6 col-md-12 local-text">
              <h1 className="local-text">Design Pioneers</h1>
              <h4 className="local-text-below">
                Selecting a Local Design Maestro Can Elevate Your Experience
              </h4>
              <p>
                In the dynamic world of design, the expertise of a local maestro
                can make a world of difference. Design pioneers, deeply rooted
                in the community, understand the nuances and preferences of
                their clientele, enabling them to create designs that resonate
                deeply. Their proximity offers an unparalleled advantage in
                communication, understanding, and tailoring solutions to unique
                requirements. When you opt for a local design expert, you're not
                just choosing a professional; you're selecting a partner who's
                deeply invested in bringing your vision to life, one who
                understands the local aesthetic and integrates it seamlessly
                with global trends. Elevate your design journey by aligning with
                those who know your community best.
              </p>
              <button
                type="button"
                className="btn btn-custom btn-lg local-button"
              >
                Schedule a free estimate{" "}
              </button>
            </div>
            <div className="col-lg-6 col-md-12">
              <img className="maestro" src={project1} alt="project-image"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expertise;
