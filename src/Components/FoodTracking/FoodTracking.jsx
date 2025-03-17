import React, { useEffect, useState } from 'react';
import './FoodTracking.css';
import Header from '../LandingPage/Header';

export default function FoodTracking() {
  const [orderStatus, setOrderStatus] = useState('Order Confirmed');
  const [eta, setEta] = useState(30);
  const [location, setLocation] = useState('Restaurant');
  const [progress, setProgress] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [totalCost, setTotalCost] = useState(299);
  const [tip, setTip] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [truckPosition, setTruckPosition] = useState({ left: 10, top: 50 });

  const orderedItems = [
    { id: 1, name: 'Burger', price: 149, quantity: 1, image: '/Images/burger.jpg' },
    { id: 2, name: 'Fries', price: 99, quantity: 1, image: '/Images/Pizza.jpg' },
    { id: 3, name: 'Coke', price: 59, quantity: 1, image: '/Images/pasta.jpg' }
  ];

  useEffect(() => {
    if (eta <= 0) return;

    const trackingUpdates = setInterval(() => {
      setEta(prevEta => Math.max(prevEta - 5, 0));
      setProgress(prev => Math.min(prev + 25, 100));

      setTruckPosition(prev => ({
        left: Math.min(prev.left + 8, 90),  // Smooth horizontal movement
        top: prev.top + (eta > 15 ? -1 : 1)  // Gradual vertical movement
      }));

      if (eta <= 25) setLocation('On the way');
      if (eta <= 10) setLocation('Near your location');
      if (eta === 0) {
        setOrderStatus('Delivered');
        setLocation('Arrived at your location');
        clearInterval(trackingUpdates);
      }
    }, 5000);

    return () => clearInterval(trackingUpdates);
  }, [eta]);

  const handlePayment = method => {
    setPaymentMethod(method);
    setShowMap(true);
  };

  return (
    <div className="food-tracking-container">
      <Header />

      <div className="order-status-section">
        <h1 className="title">Food Order Tracking</h1>
        <div className="status-card">
          <div className="status-info">
            <p className="status-label">Status</p>
            <p className="status-value">{orderStatus}</p>
          </div>
          <div className="status-info">
            <p className="status-label">ETA</p>
            <p className="status-value">{eta} mins</p>
          </div>
          <div className="status-info">
            <p className="status-label">Current Location</p>
            <p className="status-value">{location}</p>
          </div>
        </div>

        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="progress-steps">
            <div className={`step ${progress >= 0 ? 'active' : ''}`}>
              <div className="step-icon">📋</div>
              <div className="step-label">Order Placed</div>
            </div>
            <div className={`step ${progress >= 25 ? 'active' : ''}`}>
              <div className="step-icon">👨‍🍳</div>
              <div className="step-label">Preparing</div>
            </div>
            <div className={`step ${progress >= 50 ? 'active' : ''}`}>
              <div className="step-icon">🚚</div>
              <div className="step-label">On the Way</div>
            </div>
            <div className={`step ${progress >= 100 ? 'active' : ''}`}>
              <div className="step-icon">🏠</div>
              <div className="step-label">Delivered</div>
            </div>
          </div>
        </div>
      </div>

      {showMap && (
        <div className="map-section">
          <h2>Live Tracking</h2>
          <div className="map-container">
            <div className="map">
              <div className="truck-icon" style={{ left: `${truckPosition.left}%`, top: `${truckPosition.top}%` }}>
                🚚
              </div>
              <div className="restaurant-icon">🍔</div>
              <div className="home-icon">🏠</div>
              <div className="map-road"></div>
            </div>
          </div>
        </div>
      )}

      <div className="order-details-section">
        <h2>Your Order</h2>
        <div className="ordered-items">
          {orderedItems.map(item => (
            <div key={item.id} className="food-item">
              <img src={item.image} alt={item.name} className="food-image" />
              <div className="food-details">
                <h3>{item.name}</h3>
                <p>₹{item.price} x {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="payment-section">
          <div> <h3>Choose Payment Method</h3></div>
          <div className='payment-buttons'>
          <button onClick={() => handlePayment('Cash on Delivery')}>Cash on Delivery</button>
          <button onClick={() => handlePayment('Online Payment')}>Online Payment</button>
          </div>
         
        </div>

        {paymentMethod && (
          <div className="payment-confirmation">
            <p>Payment method: <strong>{paymentMethod}</strong></p>
            <p>Total Amount: ₹{totalCost + tip}</p>
            <p>Your order is being processed!</p>
          </div>
        )}
      </div>
    </div>
  );
}
