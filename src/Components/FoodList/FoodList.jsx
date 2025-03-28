
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../LandingPage/Header";
import "./Foodlist.css";

export default function RestaurantMenu() {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const fetchMenuData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/restaurant.json"); // Fetch from local JSON
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      if (!data.menu || !Array.isArray(data.menu))
        throw new Error("Invalid JSON format: No menu array found");

      setMenuItems(data.menu);
      setCategories(["all", ...new Set(data.menu.map((item) => item.category))]);
    } catch (error) {
      console.error("Fetch Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="restaurant-page">
      <Header />
      <div className="menu-hero">
        <div className="hero-content">
          <h1>Our Delicious Menu</h1>
          <p>Crafted with love using only the finest ingredients</p>
          <div className="decorative-line"></div>
        </div>
      </div>

      <main className="restaurant-menu">
        {loading ? (
          <div className="menu-loading">
            <div className="spinner"></div>
            <p>Loading menu...</p>
          </div>
        ) : error ? (
          <div className="menu-error">
            <h3>Unable to load menu</h3>
            <p>{error}</p>
          </div>
        ) : (
          <div className="menu-content">
            <div className="category-tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-tab ${activeCategory === category ? "active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="menu-items">
              {filteredItems.length === 0 ? (
                <p className="no-items">No items available in this category.</p>
              ) : (
                filteredItems.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="item-image-container">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="item-image"
                      />
                    </div>
                    <div className="item-details">
                      <div className="item-header">
                        <h3 className="item-name">{item.name}</h3>
                        <span className="item-price">₹{item.price}</span>
                      </div>
                      <p className="item-description">
                        {item.ingredients.join(", ")}
                      </p>
                      <button className="order-button"><Link to="/foodhalls">Add to order</Link></button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="restaurant-footer">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-section">
              <h3>Location</h3>
              <p>123 Food Street</p>
              <p>Flavor Town, TX 75001</p>
            </div>

            <div className="footer-section">
              <h3>Hours</h3>
              <p>Monday - Friday: 9 AM - 10 PM</p>
              <p>Saturday - Sunday: 8 AM - 11 PM</p>
            </div>

            <div className="footer-section">
              <h3>Contact</h3>
              <p>Phone: +1 555-123-4567</p>
              <p>Email: contact@tastybites.com</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Tasty Bites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
