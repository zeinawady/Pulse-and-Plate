import "../../App";
import "./Footer.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="wrapper-footer">
                    {/* Info Column */}
                    <Col md={3} className="info">
                        <h5 style={{ color: " #1d1b1b" }}>Pulse & Plate</h5>
                        <p style={{ color: " #1d1b1b" }}>
                            Healthy Food Specialties can be described as a company or service
                            focusing on nutritious, high-quality food.
                        </p>
                    </Col>

                    {/* Useful Links */}
                    <Col md={3} className="links">
                        <p className="footer-heading" style={{ color: " #1d1b1b" }}>Useful Links</p>
                        <a href="/about">About Us</a>
                        <a href="/menu">Salads</a>
                        <a href="/menu">Grilled</a>
                        <a href="/menu">Wraps</a>
                        <a href="/contactus">Contact</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </Col>

                    {/* Newsletter */}
                    <Col md={3}>
                        <p className="footer-heading" style={{ color: " #1d1b1b" }}>Join Our Newsletter Now</p>
                        <p style={{ color: " #1d1b1b" }}>Get E-mail updates about latest shop and special offers</p>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    className="mb-2"
                                />
                                <Button className = "btn-subscripe" variant="success" type="submit" style={{ border: "none" }}>
                                    Subscribe
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className="text-center mt-4">
                    <Col>
                        <p style={{ color: " #1d1b1b" }}>
                            &copy; {new Date().getFullYear()} Pulse & Plate. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
