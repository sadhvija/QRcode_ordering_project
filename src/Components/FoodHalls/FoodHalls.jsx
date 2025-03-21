
import React, { useState } from 'react';
import Venues from "./Venues"
import Restaurants from './Restaurants';
import Menu from './Menu';
import Cart from './Cart';
import Header from '../LandingPage/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const FoodHallOrderingSystem = () => {
  // State for selection
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cart, setCart] = useState([]);
  const [tableNumber, setTableNumber] = useState('');

  // Sample data (Replace this with API or database data)
  const venues = [ 
    { id: 1, name: "Downtown Food Hall", image: "/Images/FoodHall2.jpg", address: "123 Main St" },
     { id: 2, name: "Waterfront Market", image: "/Images/FoodHall2.jpg", address: "456 Harbor Blvd" },
     { id: 3, name: "Urban Eats Collective", image: "/Images/FoodHall2.jpg", address: "789 City Center" },
     { id: 4, name: "Urban Eats Collective", image: "/Images/FoodHall2.jpg", address: "789 City Center" },
     { id: 5, name: "Urban Eats Collective", image: "/Images/FoodHall2.jpg", address: "789 City Center" },
     { id: 6, name: "Urban Eats Collective", image: "/Images/FoodHall2.jpg", address: "789 City Center" },

     
  ];

  const restaurants = [
        { id: 1, venueId: 1, name: "Gourmet Burger Co.", cuisine: "American", description: "Juicy, handcrafted burgers with fresh ingredients.", image: "/Images/FoodHall2.jpg" },
        { id: 2, venueId: 2, name: "Sushi Delight", cuisine: "Japanese", description: "Fresh and authentic sushi rolls made by top chefs.", image: "/Images/FoodHall2.jpg" },
        { id: 3, venueId: 3, name: "Pasta Heaven", cuisine: "Italian", description: "Homemade pasta with delicious sauces.", image: "/Images/FoodHall4.jpg" },
        { id: 4, venueId: 4, name: "Vegan Bites", cuisine: "Plant-based", description: "Delicious and healthy plant-based meals.", image: "/Images/FoodHall4.jpg" },
        { id: 5, venueId: 5, name: "Taco Fiesta", cuisine: "Mexican", description: "Authentic Mexican street tacos and more.", image: "/Images/FoodHall4.jpg" },
        { id: 6, venueId: 6, name: "Churro Station", cuisine: "Mexican", description: "Sweet churros and Mexican desserts.", image: "/Images/FoodHall4.jpg" }
        // { id: 7, venueId: 1, name: "Fresh Greens", cuisine: "Salads", description: "Fresh and healthy salads with homemade dressings.", image: "/Images/FoodHall4.jpg" }
      ];
    
      const menuItems = [
        { id: 1, restaurantId: 1, name: "Classic Cheeseburger", price: 9.99, description: "Beef patty with cheese, lettuce, and tomato", image: "/Images/burger.jpg" },
        { id: 2, restaurantId: 1, name: "Bacon Burger", price: 11.99, description: "Beef patty with bacon, cheese, and special sauce", image: "/Images/chickenbiryani.webp" },
        { id: 3, restaurantId: 2, name: "California Roll", price: 7.99, description: "Crab, avocado, and cucumber", image: "/Images/Fishcurry.jpg" },
        { id: 4, restaurantId: 2, name: "Salmon Nigiri", price: 5.99, description: "Fresh salmon over rice", image: "/Images/grillmutton.jpg" },
        { id: 5, restaurantId: 3, name: "Spaghetti Bolognese", price: 12.99, description: "Classic pasta with rich meat sauce", image: "/Images/Momos.webp" },
        { id: 6, restaurantId: 3, name: "Fettuccine Alfredo", price: 11.99, description: "Creamy pasta with parmesan cheese", image: "/Images/pasta.jpg" },
        { id: 7, restaurantId: 4, name: "Beyond Burger", price: 10.99, description: "Plant-based patty with all the fixings", image: "/Images/Pizza.jpg" },
        { id: 8, restaurantId: 5, name: "Carne Asada Taco", price: 4.99, description: "Grilled steak taco with onions and cilantro", image: "/Images/Momos.webp" },
        { id: 9, restaurantId: 5, name: "Chicken Quesadilla", price: 8.99, description: "Flour tortilla filled with cheese and chicken", image: "/Images/tandoori.jpg" },
        { id: 10, restaurantId: 6, name: "Churros with Chocolate", price: 6.99, description: "Crispy churros with warm chocolate dipping sauce", image: "/Images/sushiplatter.jpeg" },
        { id: 11, restaurantId: 7, name: "Garden Salad", price: 8.99, description: "Mixed greens with seasonal vegetables", image: "/Images/paneer.jpg" }
      ];
  // Function to add items to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove items from cart
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Function to place an order
  const placeOrder = () => {
    if (!tableNumber) {
      alert('Please enter your table number.');
      return;
    }
    alert(`Order placed successfully! Total: $${calculateTotal()}`);
    setCart([]);
    setTableNumber('');
  };

const goBack = () => {
  if (selectedRestaurant) {
    setSelectedRestaurant(null); // Go back to restaurant selection
  } else if (selectedVenue) {
    setSelectedVenue(null); // Go back to venue selection
  }
};

return (
  <div className="food-hall-container">
    <Header />
    
    {selectedVenue && (
      <button 
        className="back-button bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md mb-4"
        onClick={goBack}
      >
        ← Back
      </button>
    )}
    
    {!selectedVenue ? (
      <Venues venues={venues} setSelectedVenue={setSelectedVenue} />
    ) : !selectedRestaurant ? (
      <Restaurants
        selectedVenue={selectedVenue}
        restaurants={restaurants}
        setSelectedRestaurant={setSelectedRestaurant}
      />
    ) : (
      <div className="restaurant-menu-container">
        <Menu selectedRestaurant={selectedRestaurant} menuItems={menuItems} addToCart={addToCart} />
        {/* <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          calculateTotal={calculateTotal}
          placeOrder={placeOrder}
          tableNumber={tableNumber}
          setTableNumber={setTableNumber}
        /> */}
        
      </div>
    )}
    <footer className="footer bg-gray-800 text-white p-6 mt-8">
                <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between">
               <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Food Hall</h3>                
                <p className="text-gray-300">The contactless ordering solution for food halls</p>
             </div>
             <div>
               <h4 className="font-semibold mb-2">Contact Us</h4>
               <p className="footer-link text-gray-300 hover:text-blue-400 transition-colors duration-300">support@foodhall.com</p>
               <p className="footer-link text-gray-300 hover:text-blue-400 transition-colors duration-300">1-800-FOOD-HALL</p>
              </div>
            </div>
             <div className="border-t border-gray-700 mt-6 pt-4 text-sm text-gray-400">
               &copy; 2025 Food Hall. All rights reserved.
             </div>
          </div>
</footer>

  </div>
);
};

export default FoodHallOrderingSystem;