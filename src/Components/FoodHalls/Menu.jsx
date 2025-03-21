
import React from 'react';
import "./Menu.css";
import { Link } from 'react-router-dom'; 
import AddToCartButton from './AddToCartButton'; 

const Menu = ({ selectedRestaurant, menuItems, addToCart }) => {
  const filteredMenuItems = menuItems.filter(
    item => selectedRestaurant && item.restaurantId === selectedRestaurant.id
  );

  return (
    <div className="menu-container">
      <h2 className="text-2xl font-bold">{selectedRestaurant?.name}</h2>
      <p className="text-gray-600 mb-4">{selectedRestaurant?.description}</p>
      <Link to="/viewcart" className="view-cart-button bg-blue-500 text-white px-4 py-2 rounded-lg">
  🛒 View Cart
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMenuItems.map(item => (
          <div key={item.id} className="menu-item bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="price font-bold text-gray-800">${item.price.toFixed(2)}</span>
                <AddToCartButton item={item} addToCart={addToCart} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
