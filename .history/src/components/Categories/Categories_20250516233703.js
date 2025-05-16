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
Key points:
col-sm-12 — full width on small screens (mobile)

col-md-6 — 2 cards per row on medium screens (≥768px)

col-lg-4 — 3 cards per row on large screens (≥992px)

mb-4 adds vertical spacing between cards

img-fluid makes images responsive and scales with container

Added Bootstrap button class btn btn-primary for styling your button

Used h-100 on card container for equal height cards if you want

Quick CSS tips for your existing styles (Categories.css):
css
Copy
Edit
.category-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.category-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.category-content {
  /* text-center is handled by Bootstrap */
}

.category-button {
  width: 100%;
}
If you want me to help convert this to a pure Bootstrap card component or add hover effects, just ask!









