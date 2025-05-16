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
      <div className='container'>
        <div className="categories-header">
          <h2>Our Categories</h2>
        </div>

        <div className="row">
          {categories.map((cat, index) => (
            
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div className="category-card h-100">
                <img src={cat.image} alt={cat.name} className="category-image img-fluid rounded" />
                <div className="category-content mt-3 text-center">
                  <h3 className="category-title">{cat.name}</h3>
                  <Link to={`/menu?category=${cat.name.toLowerCase()}`}>
                    <button className="category-button btn btn-primary mt-2">
                      Go to {cat.name}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




