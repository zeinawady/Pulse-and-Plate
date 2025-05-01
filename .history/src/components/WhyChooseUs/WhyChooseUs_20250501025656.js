import "../../App";

import "./WhyChooseUs.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className="whyChooseUS">
      <Container fluid="md">
        <div className="wrapper">
          <div className="box">
            
              {/* <FontAwesomeIcon icon={faPercent} /> */}
              <p>Join For free</p>
              <p>Sign up for FREEI Tell us your food preferences to start saving up to 30% on your weekly grocery bill. </p>

          </div>
          <div className="box">
            
              {/* <FontAwesomeIcon icon={faPercent} /> */}
              <p>Skip the Store </p>
              <p>Shop produce, staples, and seasonal finds! We deliver straight to your door every week. </p>

          </div>
          <div className="box">
            
              {/* <FontAwesomeIcon icon={faPercent} /> */}
              <p>Do Some Good </p>
              <p>Each order helps fix a broken food system and build a more sustainable future.</p>

          </div>
        </div>
      </Container>
    </div>
  );
}
