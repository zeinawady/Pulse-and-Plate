import "../../App";
import "./Footer.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Footer() {
    return (
    <footer class="bg-light py-3">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <p>&copy; 2025 Puls</p>
      </div>
      <div class="col-md-6 text-md-end">
        <p>Connect with us:</p>
        <a href="#" class="ms-2"><i class="bi bi-facebook"></i></a>
        <a href="#" class="ms-2"><i class="bi bi-twitter"></i></a>
        <a href="#" class="ms-2"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </div>
</footer>
    );
}
