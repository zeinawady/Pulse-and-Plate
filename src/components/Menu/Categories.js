import React, { useState, useRef } from 'react';
import MealCard from "./MealCard";
import "./Categories.css";

export default function Categories({ categories, addToCart }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const mealsRef = useRef(null); // reference to meals section

  const handleCategoryClick = (index) => {
    const newIndex = index === activeCategory ? null : index;
    setActiveCategory(newIndex);

    // Scroll smoothly to meals when a new category is activated
    if (newIndex !== null && mealsRef.current) {
      setTimeout(() => {
        mealsRef.current.scrollIntoView({ behavior: "smooth" });
      }, 0); // wait for re-render before scrolling
    }
  };

  return (
    <div className="categories-container">
      {/* Category Titles */}
      <div className="categories">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-title ${activeCategory === index ? "active" : ""}`}
            onClick={() => handleCategoryClick(index)}
          >
            {category.title}
          </div>
        ))}
      </div>

      {/* Meals Section */}
      <div className="meal-cards-container" ref={mealsRef}>
        {activeCategory !== null && (
          <div className="meals-grid">
            {categories[activeCategory].meals.map((meal, i) => (
              <MealCard key={i} meal={meal} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
