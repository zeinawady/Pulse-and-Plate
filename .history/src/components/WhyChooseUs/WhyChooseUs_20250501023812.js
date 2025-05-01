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
            <p>
              <FontAwesomeIcon icon={fa1} />
            </p>
            
          </div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </Container>
    </div>
  );
}
