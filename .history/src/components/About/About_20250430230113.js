import '../../App';
import "./About.css";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default function About() {
    return (
       <div className="about">
        <Container fluid="md">

            <section>
            <div className="text-box"></div>
          

            <div className="buttons">
            <Button className="custom-btn">Explore Popular Menu</Button>
            </div>
            </section>
        </Container>
       </div>
    );
};