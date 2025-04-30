import '../../App';
import "./About.css";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default function Main() {
    return (
        <div className="main">
             <Container fluid="md">
        <section className='section'>

            <h1><span>FRESH FOOD</span> WITH GREAT TASTE</h1>
            <p>Delight in the goodness of fresh food crafted to perfection, where every ingredient is handpicked for quality and flavor. With vibrant colors, crisp textures, and natural aromas, each bite bursts with the essence of farm-fresh produce</p>
       <div className="buttons">
       <Button className="custom-btn">Shop Now</Button>
       <Button className="custom-btn">Order Food</Button>
       </div>
       </section>  
       </Container>
       </div>
    );
};