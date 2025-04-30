import '../../App';
import './Main.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function Main() {
    return (
        <div className="main">
             <Container fluid="m">
        <section className='section'>
            <div className="title">
            <h1 className='main-title'>FRESH FOOD</h1>
            <h1> WITH GREAT TASTE</h1>
            </div>
      

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