import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import ContactUs from './components/ContactUs/ContactUs';
import ProductInfo from './components/ProductInfo/ProductInfo'; // تأكد من إضافة المسار الصحيح للـ ProductInfo
import Categories from './components/Categories/Categories';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/product-info" element={<ProductInfo />} />  {/* تأكد من إضافة هذا المسار */}
        <Route path="/category" element={<Categories />} />
        <Route path="/whyChooseUs" element={<WhyChooseUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
