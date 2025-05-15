import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import ContactUs from './components/ContactUs/ContactUs';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import UserProfile from './components/UserProfile/UserProfile';
import { UserProvider } from './UserContext';
import ProductInfo from './components/ProductInfo/ProductInfo';
import PaymentPage from './components/PaymentPage/PaymentPage';
import AdminProfile from './components/AdminProfile/AdminProfile';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    
      <div>
        <Header />
        <Routes>
          {/* <Route path="/"  element={<Home />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/category" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/userAccount" element={<UserProfile />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/product-info" element={<ProductInfo />} />
          <Route path='/PaymentPage' element={<PaymentPage />} />
          <Route path='/admin-profile' element={<AdminProfile />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>

        <Footer />
      </div>
  
  );
}

export default App;
