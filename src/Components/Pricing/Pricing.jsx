import React, { useState } from "react";
import './Pricing.css';
import Header from "../LandingPage/Header";

const foodItems = [
  { id: 1, name: "Margherita Pizza", price: 200, rating: 4.5, image: "/Images/Pizza.jpg"},
  { id: 2, name: "Cheese Burger", price: 150, rating: 4.2, image: "/Images/burger.jpg" },
  { id: 3, name: "Pasta Alfredo", price: 300, rating: 4.8, image: "/Images/pasta.jpg" },
  { id: 4, name: "Sushi Rolls", price: 1200, rating: 5.0, image: "/Images/sushirolls.jpg" },
  { id: 5, name: "Tandoori Chicken", price: 500, rating: 4.6, image: "/Images/tandoori.jpg" },
  { id: 6, name: "Chocolate Cake", price: 250, rating: 4.9, image: "/Images/Chocolatecake.jpeg" },
  { id: 7, name: "Fish Curry", price: 300, rating: 4.7, image: "/Images/Fishcurry.jpg" },
  { id: 8, name: "Chicken Biryani", price: 200, rating: 4.6, image: "/Images/chickenbiryani.webp" },
  { id: 9, name: "Paneer", price: 180, rating: 4.5, image: "/Images/paneer.jpg" },
  { id: 10, name: "Momos", price: 160, rating: 4.8, image: "/Images/Momos.webp" },
  { id: 11, name: "Grilled Mutton Malai", price: 440, rating: 4.7, image: "/Images/grillmutton.jpg" },
  { id: 12, name: "Sandwich", price: 120, rating: 4.6, image: "/Images/sandwich.webp" }

];

export default function Pricing() {
  const [items, setItems] = useState(foodItems);
  const [cart, setCart] = useState({});
  const [sortOrder, setSortOrder] = useState(""); 

  const addToCart = (id) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
  };

  const removeFromCart = (id) => {
    if (cart[id] > 0) {
      setCart({ ...cart, [id]: cart[id] - 1 });
    }
  };

  const sortItems = (order) => {
    let sortedItems = [...items];
    if (order === "lowToHigh") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sortedItems.sort((a, b) => b.price - a.price);
    }
    setSortOrder(order);
    setItems(sortedItems);
  };

  return (
    <div className="pricing-container"> 
        <Header/>
      {/* Navbar */}
      <header className="navbar">
        <h1>Food Pricing</h1>
        <button onClick={() => sortItems("lowToHigh")}>Sort: Low to High</button>
        <button onClick={() => sortItems("highToLow")}>Sort: High to Low</button>
      </header>

      {/* Banner */}
      <section className="banner1">
        <h1>Best Food at Affordable Prices</h1>
        <p>Find the best meals suited for you</p>
      </section>

      {/* Food Grid */}
      <section className="food-grid">
        {items.map((item) => (
          <div key={item.id} className="food-card">
            <img 
              src={item.image} 
              alt={item.name} 
              onError={(e) => e.target.src = "/Image/default.jpg"} // Fallback image
            />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>⭐ {item.rating}</p>
            <div className="cart-buttons">
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <span>{cart[item.id] || 0}</span>
              <button onClick={() => addToCart(item.id)}>+</button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Food Ordering App. All rights reserved.</p>
      </footer>
    </div>
  );
}
