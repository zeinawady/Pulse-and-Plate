import "../../App";

import "./Footer.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Footer() {
    return (
        <footer>
            <Container fluid="md">
            <div className="wrapper-footer">
                <div className="info">
                    <h5>Pulse & Plate</h5>
                    <p>Healthy Food Specialties can be described as a company or service focusing on nutritious, high-quality food. </p>
                </div>
                <div className="links">
                    <p >Useful Links</p>
                    <Link to="">About Us</Link>
                    <a href="#">lorem</a>
                    <a href="#">lorem</a>
                </div>
                <div>
                    <p>Join Our Newsletter Now </p>
                    <p>Get E-mail updates about latest shop and special offers </p>
                </div>
            </div>
            </Container>
        </footer>
    );
}