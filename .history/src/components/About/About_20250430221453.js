import '../../App';
import "./About.css";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default function About() {
    return (
       <div className="main">
        <Container fluid="md">
            <p>Learn About Pulse & Plate</p>
            <h2>Amazing & Quality Food For Your Good Health </h2>
        </Container>
       </div>
    );
};