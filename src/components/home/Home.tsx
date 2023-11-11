import "bootstrap/dist/css/bootstrap.min.css";
import Goals from "./Goals";
import Expertise from "./expertise";
import "./styles.css";
import Sucasa from "../about-sucasa/about-sucasa";
import { Navigation } from "../navigation/navigate";

export default function Home() {
  return (
    <>
      <div className="img-text">
        <div className="parallax-home"></div>

        <h1 className="home_caption">guarantee greatness</h1>
        <h2 className="other-caption">Serving the Seattle area since 2001</h2>

        <Navigation
          className="btn btn-custom btn-lg fire"
          text="Schedule a free estimate"
        />
      </div>

      <Goals />
      <Expertise />
      <Sucasa />
    </>
  );
}
