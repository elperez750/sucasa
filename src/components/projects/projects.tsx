import "bootstrap/dist/css/bootstrap.min.css";
import "./projects.css";
import { Navigation } from "../navigation/navigate";
import image1 from "../../images/attic.jpeg";
import image2 from "../../images/bathroom.jpeg";
import image3 from "../../images/cabinet.jpg";
import image4 from "../../images/chimney.jpeg";
import image5 from "../../images/pressure-deck.jpeg";
import image6 from "../../images/door.jpeg";
import image7 from "../../images/commercial.jpeg";
import image8 from "../../images/exterior-door.jpeg";
import image9 from "../../images/fence.jpeg";
import image10 from "../../images/garage.jpeg";
import image11 from "../../images/gutter.jpeg";
import image12 from "../../images/kitchen.jpeg";
import image13 from "../../images/roofing.jpeg";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const staticProjects = [
    {
      id: crypto.randomUUID(),
      type: "exterior",
      title: "Marysville Attic",
      description: "Exterior Painting",
      imageUrl: image1,
      isVisible: true,
    },
    {
      id: crypto.randomUUID(),
      type: "interior",
      title: "Bellevue Bathroom",
      description: "Interior Painting",
      imageUrl: image2,
    },
    {
      id: crypto.randomUUID(),
      type: "interior",
      title: "Colfax Cabinet",
      description: "Interior Painting",
      imageUrl: image3,
    },

    {
      id: crypto.randomUUID(),
      type: "exterior",
      title: "Coupville Chimney",
      description: "Exterior Painting",
      imageUrl: image4,
    },
    {
      id: crypto.randomUUID(),
      type: "pressure",
      title: "Seattle Deck",
      description: "Pressure Washing",
      imageUrl: image5,
    },
    {
      id: crypto.randomUUID(),
      type: "interior",
      title: "Kent Door",
      description: "Interior Painting",
      imageUrl: image6,
    },

    {
      id: crypto.randomUUID(),
      type: "commercial",
      title: "Redmond Commercial",
      description: "Commercial Painting",
      imageUrl: image7,
    },

    {
      id: crypto.randomUUID(),
      type: "exterior",
      title: "Renton Exterior Door",
      description: "Exterior Painting",
      imageUrl: image8,
    },

    {
      id: crypto.randomUUID(),
      type: "Exterior",
      title: "Everett Fence",
      description: "Exterior Painting",
      imageUrl: image9,
    },

    {
      id: crypto.randomUUID(),
      type: "interior",
      title: "Sultan Garage",
      description: "Interior Painting",
      imageUrl: image10,
    },

    {
      id: crypto.randomUUID(),
      type: "exterior",
      title: "Marysville Gutter",
      description: "Exterior Painting",
      imageUrl: image11,
    },

    {
      id: crypto.randomUUID(),
      type: "interior",
      title: "Monroe Kitchen",
      description: "Interior Painting",
      imageUrl: image12,
    },

    {
      id: crypto.randomUUID(),
      type: "roofing",
      title: "Lynnwood Roofing",
      description: "Roofing",
      imageUrl: image13,
    },
  ];

  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const filteredProjects = staticProjects.filter(
    (project) => filter === "all" || project.type === filter
  );

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

        <div className="container project-text">
          <h1 className="mb-5 projects-main">
            <em>See what we've done</em>
          </h1>
          <p className="mb-5 projects-paragraph">
            Our team specializes in transforming spaces with meticulous
            attention to detail and a deep commitment to quality. Each project
            is a unique blend of client vision and our creative expertise,
            resulting in spaces that are not just aesthetically pleasing but
            also deeply personal. From modern renovations to classic
            restorations, we ensure every project reflects our standard of
            excellence and an enduring sense of style.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <span
                className="filter-text"
                onClick={() => handleFilterChange("all")}
              >
                All
              </span>
            </div>

            <div className="col-md-2">
              <span
                className="filter-text"
                onClick={() => handleFilterChange("exterior")}
              >
                Exterior
              </span>
            </div>
            <div className="col-md-2">
              <span
                className="filter-text"
                onClick={() => handleFilterChange("interior")}
              >
                Interior
              </span>
            </div>

            <div className="col-md-2">
              <span
                className="filter-text"
                onClick={() => handleFilterChange("commercial")}
              >
                Commercial
              </span>
            </div>

            <div className="col-md-2">
              <span
                className="filter-text"
                onClick={() => handleFilterChange("pressure")}
              >
                Washing
              </span>
            </div>

            <div className="col-md-2">
              <span
                className="filter-text"
                onClick={() => handleFilterChange("roofing")}
              >
                Roofing
              </span>
            </div>
          </div>

          <div className="row mt-5 project-display">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="col-md-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card">
                  <img
                    src={project.imageUrl}
                    className="project-card-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h2>
                      <em>{project.title}</em>
                    </h2>
                    <p>{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </body>
    </>
  );
}
