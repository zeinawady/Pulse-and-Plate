import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import {Routes, Route, Router } from 'react-router-dom';

import Header from './components/Header/Header';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import ContactUs from './components/ContactUs/ContactUs';
import SignUp from './components/SignUp/SignUp';
impo

function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Home/> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
