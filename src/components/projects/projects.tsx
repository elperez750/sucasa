import "bootstrap/dist/css/bootstrap.min.css";
import "./projects.css";
import { Navigation } from "../navigation/navigate";
import image1 from "../../images/attic.jpeg";

export default function Projects() {
  return (
    <>
    <body>
      <div className="image-container">
        <div className="parallax-projects"></div>
        <h5 className="other-caption-projects-top ">
          <span>See our work</span>
        </h5>

        <h1 className="project_header">Projects</h1>
        <h2 className="other-caption-projects ">
          <span>Explore a world where comfort meets impeccable taste.</span>
        </h2>
      </div>

      <div className="quote-container-projects">
        <div className="container quote">
          <div className="row">
            <div className="col-lg-6">
              <h1>Get a quote today!</h1>
            </div>
            <div className="col-lg-6">
              <Navigation
                className="btn btn-custom btn-lg btn-block quote-button"
                text="Get a free quote"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card" >
              <img src={image1} className="project-card-img" alt="..." />
              <div className="card-body">
                <h2>
                 <em> Marysville Attic </em>
                </h2>
                <p>
                  Exterior Painting
                </p>
              </div>
            </div>
          </div>


          <div className="col-md-6">
            <div className="card" >
              <img src={image1} className="project-card-img" alt="..." />
              <div className="card-body">
                <h2>
                 <em> Marysville Attic </em>
                </h2>
                <p>
                  Exterior Painting
                </p>
              </div>
            </div>
          </div>


          <div className="col-md-6">
            <div className="card" >
              <img src={image1} className="project-card-img" alt="..." />
              <div className="card-body">
                <h2>
                 <em> Marysville Attic </em>
                </h2>
                <p>
                  Exterior Painting
                </p>
              </div>
            </div>
          </div>

          

          
        </div>
      </div>
      </body>
    </>
  );
}
