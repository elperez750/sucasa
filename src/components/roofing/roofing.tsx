import React from "react";
import "./roofing.css";
import { Navigation } from "../navigation/navigate";
import image from "../../images/roofing-main.jpeg";
import benjamin from "../../images/benjamin.jpeg";
import purdy from "../../images/purdy.jpg";
import threem from "../../images/threem.jpeg";
import trimaco from "../../images/trimaco.jpeg";
import sherwin from "../../images/sherwin.jpeg";
import frogtape from "../../images/frogtape.png";
import Marquee from "react-fast-marquee";
import quality from "../../images/quality.png";
import idea from "../../images/idea.png";
import team_work from "../../images/team-work.png";
import commitement from "../../images/commitement.png";
import leadership from "../../images/leadership.png";
import Faq from "react-faq-component";
import { data, styles, config } from "../Faq/roofingFaq";
import new_roof from "../../images/new_roof.jpeg";
import roof_repair from "../../images/roof_repair.jpeg";
import gutter from "../../images/gutter.jpeg";
import skylight from "../../images/skylight.jpeg";
import chimney from "../../images/chimney.jpeg";
import attic from "../../images/attic.jpeg";

const images = [benjamin, purdy, threem, trimaco, sherwin, frogtape];

export default function Roofing() {
  return (
    <>
      <div className="image-container">
        <div className="parallax-roofing"></div>
        <div className="service">Roofing</div>
        <h2 className="other-caption-roofing ">
          <span>
          Quality Roofing That Stands the Test of Time
          </span>
        </h2>
      </div>

      <div className="quote-container-commercial">
        <div className="container quote">
          <div className="row">
            <div className="col-lg-6">
              <h1>Get a quote today!</h1>
            </div>
            <div className="col-lg-6">
              <Navigation
                className="btn btn-custom btn-lg btn-block quote-button"
                text="Get a quote"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4 roofing-main">
        <div className="row align-items-stretch">
          <div className="col-lg-6 position-relative">
            <img className="interior-right" src={image} alt="roofing" />
            <div className="square"></div>
          </div>

          <div className="col-lg-6">
            <div className="text-section-commercial">
              <h2>
                Sucasa Roofing Excellence — Elevating Structures, Enhancing
                Businesses
              </h2>
              <p>
                Ascend to the pinnacle of structural integrity and aesthetic
                distinction with Sucasa Paint and Roof Care, your foremost collaborator in
                roofing excellence. Venture into an era where every shingle,
                tile, and seam is orchestrated to culminate in roofs that do
                more than shelter—they make a statement. Our commitment is
                rooted in elevating your business environment with precision,
                mastery, and unmatched workmanship.
              </p>
            </div>
            <div className="text-section-commercial">
              <h2>Roofs That Reimagine Commercial Spaces</h2>
              <p>
                At Sucasa Paint and Roof Care, we comprehend the critical role a top-tier
                commercial roofing system plays in the overall image and
                efficiency of your business. We deliver solutions that merge
                form with function, creating rooftops that not only captivate
                but also provide unparalleled durability and protection. Bask in
                the assurance of a roofing experience where innovation meets
                reliability, yielding an atmosphere that fosters growth and
                exudes professionalism.
              </p>
            </div>
            <div className="text-section-commercial">
              <h2>Tailored Roofing for Every Business Need</h2>
              <p>
                In the sphere of commercial roofing, a one-size-fits-all
                approach falls short. Acknowledging the diversity of demands,
                our expert team engages closely with each client to understand
                the specific needs of your building, from structural challenges
                to aesthetic ambitions and energy efficiency goals. The outcome
                is a roofing masterpiece that transcends mere functionality—it
                revitalizes your business's facade, amplifying your brand's
                stature and solidifying its presence against the skyline. Step
                under a Sucasa roof, and step into a realm where every layer is
                laden with quality, each material is selected for longevity, and
                every finish reflects the zenith of commercial roofing artistry.
              </p>
            </div>
            <Navigation
              className="btn btn-custom btn-lg btn-block explore"
              text="Get Started"
            />
          </div>
        </div>
      </div>

      <div className="suppliers">
        <h1>
          <em>
            <strong>Suppliers and brands we trust</strong>
          </em>
        </h1>
      </div>

      <div className="container commercial-secondary">
        <div className="row"></div>
      </div>

      <Marquee className="marquee-container">
        {images.concat(images).map(
          (
            imageSrc,
            index // Concatenating the images array to itself to double the images
          ) => (
            <img key={index} src={imageSrc} alt={`marquee-item-${index}`} />
          )
        )}
      </Marquee>

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

      <div className="container commercial-services">
        <div className="row">
          <div className="col-lg-12">
            <h1>
              <em>
                <strong>Services Offered</strong>
              </em>
            </h1>
          </div>
          <div className="col-lg-4">
            <img
              className="exterior-services-image"
              src={new_roof}
              alt="exterior-services"
            />
            <h2>Roof Installation</h2>
          </div>
          <div className="col-lg-4">
            <img
              className="exterior-services-image"
              src={roof_repair}
              alt="exterior-services"
            />
            <h2>Roof Repair</h2>
          </div>
          <div className="col-lg-4">
            <img
              className="exterior-services-image"
              src={gutter}
              alt="exterior-services"
            />
            <h2>Gutter Maintenence and Installation</h2>
          </div>

          <div className="col-lg-4">
            <img
              className="exterior-services-image"
              src={skylight}
              alt="exterior-services"
            />
            <h2>Skylight Installation and Repair</h2>
          </div>

          <div className="col-lg-4">
            <img
              className="exterior-services-image"
              src={chimney}
              alt="exterior-services"
            />
            <h2>Chimney Flashing and Repair</h2>
          </div>

          <div className="col-lg-4">
            <img
              className="exterior-services-image"
              src={attic}
              alt="exterior-services"
            />
            <h2>Attic Ventilation</h2>
          </div>

          <div className="justify-content-center">
            <Navigation
              className="btn btn-custom btn-lg btn-block explore "
              text="Get a free quote"
            />
          </div>
        </div>
      </div>

      <div className="container-faq">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </>
  );
}
