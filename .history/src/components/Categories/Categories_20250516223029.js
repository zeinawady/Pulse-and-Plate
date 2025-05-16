import '../../App';
import Main from '../Main/Main';
import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';



export default function Categories() {
  const categories = [
    {
      name: 'Salads',
      link: '/category/salad',
      image: 'images/spinach-salad.jpg' 
    },
    {
      name: 'Grilled',
      link: '/category/grilled',
      image: 'images/Grilled-Veggie-Kebabs.jpg'
    },
    {
      name: 'Wraps',
      link: '/category/wraps',
      image: 'images/Grilled-Veggie-&-Hummus-Wrap.jpg'
    }
  ];


  return (
     
    <div className="categories-container">
      <div className="categories-header">
        <h2>Our Categories</h2>
      </div>

        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.image} alt={cat.name} className="category-image" />
            <div className="category-content">
              <h3 className="category-title">{cat.name}</h3>
              <Link to={`/menu?category=${cat.name.toLowerCase()}`}>
              <button className="category-button">Go to {cat.name}</button>
            </Link>

            </div>
          </div>
        ))}
      
    </div>
    
  );
}
