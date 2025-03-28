import React from 'react'
import Header from '../LandingPage/Header';
import "./Howitwork.css";
import DemoVideo from '../LandingPage/Demovideo';

export default function Howitsworks() {
  return (
    
    <div className="how-it-works">
        <Header/>
     
      <section className="banner">
        <h1>How It Works</h1>
        <p>Discover the seamless experience of ScanEat</p>
      </section>
      
      <section className="steps-container">
        <div className="step">
          <img src="/Images/scanner.png" alt="Scan Menu" />
          <h3>Step 1: Scan Menu</h3>
          <p>Use your phone to scan the QR code and access the menu instantly.</p>
        </div>
        <div className="step">
          <img src="/Images/food-selection.jpg" alt="Select Food" />
          <h3>Step 2: Select Your Food</h3>
          <p>Browse the menu and select your favorite dishes effortlessly.</p>
        </div>
        <div className="step">
          <img src="/Images/order.webp" alt="Order and Pay" />
          <h3>Step 3: Order & Pay</h3>
          <p>Place your order and complete the payment securely online.</p>
        </div>
        <div className="step"> 
          <img src="/Images/enjoy.webp" alt="Enjoy Meal" />
          <h3>Step 4: Enjoy Your Meal</h3>
          <p>Relax and enjoy your freshly prepared meal without any hassle.</p>
        </div>
      </section>
      
    
      
     
        <DemoVideo/>
 
      
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 ScanEat. All Rights Reserved.</p>
      </footer>
    </div>
  );
}