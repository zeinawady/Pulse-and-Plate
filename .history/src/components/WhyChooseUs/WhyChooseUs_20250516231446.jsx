import "../../App";
import "./WhyChooseUs.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className="whyChooseUS">
      <Container fluid="md">
        <div className="whyChooseUS-header">
        <h2>Our Services</h2>
      </div>
      
        <div className="wrapper">
          <div className="box">
            
              <p><FontAwesomeIcon icon="fa-solid fa-percent" /></p>
              <p>Join For free</p>
              <p>Sign up for FREEI Tell us your food preferences to start saving up to 30% on your weekly grocery bill. </p>
          </div>
          <div className="box">
            
              <p><FontAwesomeIcon icon="fa-solid fa-truck-fast" /></p>
              <p>Skip the Store </p>
              <p>Shop produce, staples, and seasonal finds! We deliver straight to your door every week. </p>

          </div>
          <div className="box">
            
              <p><FontAwesomeIcon icon="fa-solid fa-carrot" /></p>
              <p>Do Some Good </p>
              <p>Each order helps fix a broken food system and build a more sustainable future.</p>

          </div>
        </div>
      </Container>
    </div>
  );
}
