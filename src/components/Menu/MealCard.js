import React, { useState } from "react";
import "./MealCard.css";

export default function MealCard({ meal }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="meal-card">
      <div className="meal-image-container">
        {/* Meal image */}
        <img src={meal.photo} alt={meal.name} className="meal-image" />

        {/* Overlay that shows on hover */}
        <div className="overlay">
          <button className="view-details">View Meal Details</button>
        </div>

        {/* Favorite Icon */}
        <div
          className={`fav-icon ${isFavorited ? "favorited" : ""}`}
          onClick={toggleFavorite}
        >
          {isFavorited ? "❤️" : "🤍"}
        </div>
      </div>

      <h4 className="meal-name">{meal.name}</h4>
      <h2 className="meal-price">
        {meal.price} <span className="currency">EGP</span>
      </h2>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}
