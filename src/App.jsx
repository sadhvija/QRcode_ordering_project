
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Howitsworks from './Components/HowItWorks/Howitworks';
import Pricing from './Components/Pricing/Pricing';
import Contact from './Components/Contact/Contact';
import QRCodeGenerator from './Components/QRCodeGenerator/QRCodeGenerator';
import FoodTracking from './Components/FoodTracking/FoodTracking';
import Foodlist from './Components/FoodList/FoodList';
import Fooditems from './Components/FoodItems/FoodItems';
import Foodhalls from './Components/FoodHalls/FoodHalls';
import Viewcart from './Components/FoodHalls/Viewcart';
import LoginPage from './Components/Login/Login';
import Menu from './Components/FoodHalls/Menu/Menu';
import { CartProvider } from './Context/cartcontext';// Import CartProvider

import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/QRCodeGenerator" element={<QRCodeGenerator />} />
            <Route path="/home" element={<Home />} />
            <Route path="/howitsworks" element={<Howitsworks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/foodtracking" element={<FoodTracking />} />
            <Route path="/foodlist" element={<Foodlist />} />
            <Route path="/fooditems" element={<Fooditems />} />
            <Route path="/foodhalls" element={<Foodhalls />} />
            <Route path="/viewcart" element={<Viewcart />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
