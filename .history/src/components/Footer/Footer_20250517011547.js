import "../../App";
import "./Footer.css";
import { Container, Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
<footer>
  <Container className="py-4">
    <div className="row">
      {/* Brand Info */}
      <div className="col-md-4 mb-4">
        <h5 className="pb-2">Pulse & Plate</h5>
        <p>
          Healthy Food Specialties can be described as a company or service
          focusing on nutritious, high-quality food.
        </p>
      </div>

      {/* Useful Links */}
      <div className="col-md-4 mb-4">
        <p className="footer-heading fw-bold">Useful Links</p>
        <div className="d-flex flex-column">
          <Link to="/about" className="mb-1">About Us</Link>
          <Link to="/contactus">Contact Us</Link>
        </div>
      </div>

      {/* Newsletter */}
      <div className="col-md-4 mb-4">
        <p className="footer-heading fw-bold">Join Our Newsletter Now</p>
        <p>Get E-mail updates about latest shop and special offers</p>
        <Form>
          <Form.Group controlId="formBasicEmail" className="d-flex flex-column flex-sm-row gap-2">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="mb-2 mb-sm-0"
            />
            <Button
              className="btn-subscripe"
              variant="success"
              type="submit"
              style={{ border: "none" }}
            >
              Subscribe
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>

    <div className="row">
      <div className="col text-center pt-3">
        <p style={{ color: "#1d1b1b" }}>
          &copy; {new Date().getFullYear()} Pulse & Plate. All rights reserved.
        </p>
      </div>
    </div>
  </Container>
</footer>

    );
}
