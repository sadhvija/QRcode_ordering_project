import React, { useState } from "react";  // Import useState
import "./Viewcart.css";
import Cart from "./Cart";

const Viewcart = () => {
  const [cart, setCart] = useState([]);
  const [tableNumber, setTableNumber] = useState('');
  
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const placeOrder = () => {
    if (!tableNumber) {
      alert('Please enter your table number.');
      return;
    }
    alert(`Order placed successfully! Total: $${calculateTotal()}`);
    setCart([]);
    setTableNumber('');
  };

  return (
    <div className="viewcart-container">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {/* <Menu selectedRestaurant={selectedRestaurant} menuItems={menuItems} addToCart={addToCart} /> */}
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        calculateTotal={calculateTotal}
        placeOrder={placeOrder}
        tableNumber={tableNumber}
        setTableNumber={setTableNumber}
      />
    </div>
  );
};

export default Viewcart;
