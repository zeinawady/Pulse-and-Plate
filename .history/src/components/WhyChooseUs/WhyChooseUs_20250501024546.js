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
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </Container>
    </div>
  );
}
