import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

export default function Categories() {
  const categories = [
    {
      name: 'Salads',
      image: 'images/spinach-salad.jpg',
    },
    {
      name: 'Grilled',
      image: 'images/Grilled-Veggie-Kebabs.jpg',
    },
    {
      name: 'Wraps',
      image: 'images/Grilled-Veggie-&-Hummus-Wrap.jpg',
    },
  ];

  return (
    <div className="container categories">
      <div className="text-center mb-5 categories-header">
        <h2>Our Categories</h2>
      </div>
      <div className="row">
        {categories.map((cat, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="category-card">
              <img src={cat.image} alt={cat.name} className="category-image img-fluid" />
              <h3 className="category-title">{cat.name}</h3>
              <Link to={`/menu?category=${cat.name.toLowerCase()}`}>
                <button className="category-button mt-2">Go to {cat.name}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
