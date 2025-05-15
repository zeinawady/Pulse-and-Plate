import React, { useState, useEffect, useRef } from "react";
import MealCard from "./MealCard";
import "./Categories.css";
import axios from "axios";

export default function Categories({ addToCart }) {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const mealsRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:3020/api/product/list")
      .then((response) => {
        if (
          response.data &&
          response.data.menu &&
          Array.isArray(response.data.menu)
        ) {
          // Filter categories to include only "Salads", "Grilled", and "Wraps"
          const filteredCategories = response.data.menu.filter((cat) =>
            ["Salads", "Grilled", "Wraps"].includes(cat.category)
          );

          // Format categories to match the desired structure
          const formattedCategories = filteredCategories.map((cat) => ({
            title: cat.category,
            meals: cat.items,
          }));

          setCategories(formattedCategories);
          console.log("Filtered and Formatted Categories:", formattedCategories);
        } else {
          console.error("Invalid data format received:", response.data);
        }
      })
      .catch((error) => {
        console.error("There was an error while fetching the menu: ", error);
      });
  }, []);

  const handleCategoryClick = (index) => {
    const newIndex = index === activeCategory ? null : index;
    setActiveCategory(newIndex);

    if (newIndex !== null && mealsRef.current) {
      setTimeout(() => {
        mealsRef.current.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  };

  return (
    <div className="categories-container">
      <div className="categories">
        {categories.length === 0 ? (
          <div>Loading categories...</div>
        ) : (
          categories.map((category, index) => (
            <div
              key={index}
              className={`category-title ${
                activeCategory === index ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(index)}
            >
              {category.title}
            </div>
          ))
        )}
      </div>

      <div className="meal-cards-container" ref={mealsRef}>
        {activeCategory !== null &&
        categories[activeCategory] &&
        categories[activeCategory].meals ? (
          <div className="meals-grid">
            {categories[activeCategory].meals.map((meal, i) => (
              <MealCard key={i} meal={meal} />
            ))}
          </div>
        ) : (
          <div>No meals available for this category.</div>
        )}
      </div>
    </div>
  );
}
