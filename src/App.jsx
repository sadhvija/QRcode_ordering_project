import React from 'react';
// import Header from './Components/Header/Header';
// import Banner from './Components/Banner/Banner';
// import Cards from './Components/Cards/Cards';
// import Footer from './Components/Footer/Footer';
// import DemoVideo from './Components/Demovideo';
// import firebase from './firebase/firebase';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import LoginPage from './firebase/login';

import Howitsworks from './Components/HowItWorks/Howitworks';
import Pricing from './Components/Pricing/Pricing';
import Contact from './Components/Contact/Contact';
import QRCodeGenerator from './Components/QRCodeGenerator/QRCodeGenerator';
import FoodTracking from './Components/FoodTracking/FoodTracking';
import Foodlist from './Components/FoodList/FoodList';
import Fooditems from './Components/FoodItems/FoodItems';
import Foodhalls from './Components/FoodHalls/FoodHalls';
import LoginPage from './Components/Login/Login';

// // Import images
// import logoImage from './assets/logo.svg';
// import mockupImage from './assets/mockup.svg';
// // import demoVideo from './assets/demo-video.mp4';

function App() {
  return (
      <Router>
      {/* <Toaster /> */}
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
 </Routes>
      </div>
    </Router>
 
)}

export default App;