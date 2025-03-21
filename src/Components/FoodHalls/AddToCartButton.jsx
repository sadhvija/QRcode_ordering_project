import React from 'react';
import "./AddToCart.css"
const AddToCartButton = ({ item, addToCart }) => {
  return (
    <button
      className="add-button bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors duration-300"
      onClick={() => addToCart(item)}
    >
      Add to Order
    </button>
    
  );
};

export default AddToCartButton;
