import React from 'react';
import { Link } from 'react-router-dom';  // استيراد Link من React Router
import './MealCard.css';
import { useState } from 'react'; // تأكد من استيراد useState


export default function MealCard({ meal }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="meal-card">
      <div className="meal-image-container">
        <img src={meal.image} alt={meal.name} className="meal-image" />

        {/* Overlay that shows on hover */}
        <div className="overlay">
          {/* تغيير الزر ليكون Link لتمرير البيانات باستخدام props */}
          <Link to="/product-info" state={{ product: meal }}>
            <button className="view-details">View Meal Details</button>
          </Link>
        </div>

        {/* Favorite Icon */}
        <div className={`fav-icon ${isFavorited ? 'favorited' : ''}`} onClick={toggleFavorite}>
          {isFavorited ? '❤️' : '🤍'}
        </div>
      </div>

      <h4 className="meal-name">{meal.name}</h4>
      <h2 className="meal-price">{meal.price}</h2>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}
