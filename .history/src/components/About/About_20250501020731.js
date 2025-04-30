import "../../App";
import "./About.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
  return (
    <div className="about">
      <Container fluid="md" className="about-content">
        <div className="text-box">
          <p>Learn About Pulse & Plate</p>
          <h2>Amazing & Quality Food For Your Good Health </h2>
          <p>
            As a self-proclaimed foodie and fitness enthusiast, I have a passion
            for cooking and a huge desire to show that living a healthy
            lifestyle can actually be easy and fun! Feel free to use the meal
            guide above to find your new favorite meal ideas or the dietary
            guides to narrow things down even more!
          </p>
          <div className="buttons">
            <Button className="custom-btn">Explore Popular Menu</Button>
          </div>
          <div className="icons">
            <div className="icon">
            <FontAwesomeIcon icon="concierge-bell" />
            <p>Best Quality Food </p>
              <p>Our talented chefs craft each dish precision sourcing</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
