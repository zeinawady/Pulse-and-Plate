import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import ContactUs from './components/ContactUs/ContactUs';
import ProductInfo from './components/ProductInfo/ProductInfo';

function App() {
  return (
    <div>
      <Header />
      {/* <Home/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/product-info" element={<ProductInfo />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
