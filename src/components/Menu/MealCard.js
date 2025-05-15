import React, { useState } from "react";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./MealCard.css";

export default function MealCard({ meal }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  // Add to cart using axios
  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      alert("You must be logged in to add items to the cart.");
      navigate("/login");
      return;
    }
  
    console.log("TOKEN:", token);
  
    axios
      .post(
        "http://localhost:3050/api/addorder",
        {
          itemname: meal.name,
          quantity: 1,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        alert("Item added to cart!");
      })
      .catch((err) => {
        console.error("Add to cart error:", err.response?.data || err.message);
  
        if (err.response?.status === 401) {
          alert("Session expired. Please log in again.");
          navigate("/login");
        } else {
          alert(
            "Failed to add item to cart:\n" +
              (err.response?.data?.message || err.message)
          );
        }
      });
  };
  
  // Navigate to meal details
  const handleViewDetails = () => {
    navigate(`/meal/${meal._id || meal.name}`); // Use _id or name as fallback
  };

  return (
    <div className="meal-card">
      <div className="meal-image-container">
        <img
          src={meal.photo || "https://via.placeholder.com/150"}
          alt={meal.name}
          className="meal-image"
        />
        <div className="overlay">
          <button className="view-details" onClick={handleViewDetails}>
            View Details
          </button>
        </div>
        <div
          className={`fav-icon ${isFavorited ? "favorited" : ""}`}
          onClick={toggleFavorite}
        >
          {isFavorited ? "❤️" : "🤍"}
        </div>
      </div>
      <h4 className="meal-name">{meal.name || "Unknown Item"}</h4>
      <h2 className="meal-price">{(meal.price || 0).toFixed(2)} EGP</h2>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
