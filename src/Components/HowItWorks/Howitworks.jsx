import React from 'react'
import Header from '../LandingPage/Header';
import "./Howitwork.css";

export default function Howitsworks() {
  return (
    
    <div className="how-it-works">
        <Header/>
      {/* Header Banner */}
      <section className="banner">
        <h1>How It Works</h1>
        <p>Discover the seamless experience of ScanEat</p>
      </section>
      
      {/* Steps Section */}
      <section className="steps-container">
        <div className="step">
          <img src="/public/Image/scan-a-menu.jpeg" alt="Scan Menu" />
          <h3>Step 1: Scan Menu</h3>
          <p>Use your phone to scan the QR code and access the menu instantly.</p>
        </div>
        <div className="step">
          <img src="/public/Image/select food.png" alt="Select Food" />
          <h3>Step 2: Select Your Food</h3>
          <p>Browse the menu and select your favorite dishes effortlessly.</p>
        </div>
        <div className="step">
          <img src="/public/Image/QRcode.jpg" alt="Order and Pay" />
          <h3>Step 3: Order & Pay</h3>
          <p>Place your order and complete the payment securely online.</p>
        </div>
        <div className="step"> 
          <img src="/public/Image/enjoying-food.jpg" alt="Enjoy Meal" />
          <h3>Step 4: Enjoy Your Meal</h3>
          <p>Relax and enjoy your freshly prepared meal without any hassle.</p>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="video-section">
        <h2>Watch How It Works</h2>
        <video controls>
          <source src="/public/Screen Recording 2025-01-10 185445.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 ScanEat. All Rights Reserved.</p>
      </footer>
    </div>
  );
}