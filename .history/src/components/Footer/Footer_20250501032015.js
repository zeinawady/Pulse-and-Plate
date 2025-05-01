import "../../App";

import "./Footer.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Footer() {
    return (
        <footer>
            <Container fluid="md"></Container>
            <div className="wrapper-footer">
                <div>
                    <h5>Pulse & Plate</h5>
                    <p>Healthy Food Specialties can be described as a company or service focusing on nutritious, high-quality food. </p>
                </div>
                <div>
                    <p>Useful Links</p>
                    <a href="#">About Us</a>
                    <a href="#">lorem</a>
                    <a href="#">lorem</a>
                </div>
            </div>
        </footer>
    );
}