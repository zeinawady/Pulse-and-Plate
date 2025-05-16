import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import {Link} from 'react-router-dom';

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import ContactUs from "./components/ContactUs/ContactUs";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import UserProfile from "./components/UserProfile/UserProfile";
import { UserProvider } from "./UserContext";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import PaymentPage from "./components/PaymentModal/PaymentModal";
import Dashboard from "./components/Dashboard/Dashboard";
import Cart from "./components/Cart/Cart";
import AddMeal from "./components/AddMeal/AddMeal";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import DeleteMeal from "./components/DeleteMeal/DeleteMeal";
import UpdateMeal from "./components/UpdateMeal/UpdateMeal";

function App() {
  return (
    <UserProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/category" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/userAccount" element={<UserProfile />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product-info" element={<ProductInfo />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-meal" element={<AddMeal />} />
          <Route path="/PageNotFound" element={<PageNotFound />} />
          <Route path="/delete-meal" element={<DeleteMeal />} />
          <Route path="/update-meal" element={<UpdateMeal />} />

        </Routes>

        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
