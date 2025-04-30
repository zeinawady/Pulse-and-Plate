import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main'
function App() {
  return (
    <div>
      <Header />
      <Main />

    </div>
    // <Router>
      
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/footer" element={<Footer />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
