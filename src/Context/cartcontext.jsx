// CartContext.js
import React, { createContext, useState } from 'react';

// Create Context
export const CartContext = createContext();

// Create Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [tableNumber, setTableNumber] = useState('');

  // Functions to modify the cart
  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

  const calculateTotal = () => cart.reduce((total, item) => total + item.price, 0).toFixed(2);

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
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, calculateTotal, placeOrder, tableNumber, setTableNumber }}
    >
      {children}
    </CartContext.Provider>
  );
};
