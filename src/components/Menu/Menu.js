import React from 'react';
import Categories from './Categories';
import { categories } from './data'; // Assuming data is in the correct path
import './Menu.css'

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Our Healthy Menu</h2>
      </div>
      <Categories categories={categories} />
    </div>
  );
}
