import React, { useEffect, useState } from "react";
import Header from "../LandingPage/Header";
import "./Foodlist.css";

export default function RestaurantMenu() {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const fetchMenuData = async () => {
    const url =
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a44bffd58fmsh47033b272a8a141p1cb600jsned61c0f5d123",
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      if (!data.recipes || !Array.isArray(data.recipes))
        throw new Error("Unexpected API response format");

      const transformedItems = data.recipes.map((recipe) => ({
        id: recipe.id,
        name: recipe.title,
        description: recipe.summary
          ? recipe.summary.replace(/<[^>]*>?/gm, "").substring(0, 100) + "..."
          : "Delicious dish prepared with care.",
        price: ((recipe.pricePerServing || 500) / 100).toFixed(2),
        image: recipe.image,
        category: recipe.dishTypes?.length ? recipe.dishTypes[0] : "Main Course",
        isVegetarian: recipe.vegetarian,
        isGlutenFree: recipe.glutenFree,
        prepTime: recipe.readyInMinutes || 20,
      }));

      setMenuItems(transformedItems);
      setCategories(["all", ...new Set(transformedItems.map((item) => item.category))]);
    } catch (error) {
      console.error("Fetch Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.minHeight = "100vh";
    document.documentElement.style.height = "100%";

    const loadData = async () => {
      await fetchMenuData();
    };

    loadData();

    return () => {
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.minHeight = "";
      document.documentElement.style.height = "";
    };
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
            <p>Preparing our menu...</p>
          </div>
        ) : error ? (
          <div className="menu-error">
            <h3>Unable to load menu</h3>
            <p>{error}</p>
            <p>Please try again later or contact us directly.</p>
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
                    {item.image && (
                      <div className="item-image-container">
                        <img src={item.image} alt={item.name} className="item-image" />
                      </div>
                    )}
                    <div className="item-details">
                      <div className="item-header">
                        <h3 className="item-name">{item.name}</h3>
                        <span className="item-price">${item.price}</span>
                      </div>
                      <p className="item-description">{item.description}</p>
                      <div className="item-meta">
                        <span className="prep-time">
                          <i className="time-icon">⏱️</i> {item.prepTime} min
                        </span>
                        {item.isVegetarian && <span className="dietary-tag vegetarian">Vegetarian</span>}
                        {item.isGlutenFree && <span className="dietary-tag gluten-free">Gluten Free</span>}
                      </div>
                      <button className="order-button">Add to Order</button>
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
              <p>123 KPHB Colony</p>
              <p>10K Coders</p>
              <p>Foodie City, FC 12345</p>
            </div>

            <div className="footer-section">
              <h3>Hours</h3>
              <p>Monday - Thursday: 11am - 10pm</p>
              <p>Friday - Saturday: 11am - 11pm</p>
              <p>Sunday: 10am - 9pm</p>
            </div>

            <div className="footer-section">
              <h3>Contact</h3>
              <p>Phone: +91 9392978129</p>
              <p>Email: sadhvijamaamidala@gmail.com</p>
              <p>Reservations recommended</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Please inform your server of any allergies or dietary restrictions.</p>
            <p>© 2025 Gourmet Delights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
