import React, { useState } from 'react';
import './Fooditems.css';
import Header from '../LandingPage/Header';

const FoodList = () => {
  const [expandedItems, setExpandedItems] = useState({});
  
  const toggleItemDetails = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`; 
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const foodCategories = [
    {
      category: "Breakfast",
      items: [
        { 
          name: "Oatmeal", 
          amount: "5 lbs bag", 
          cost: "₹3.99",
          ingredients: ["Whole grain rolled oats"]
        },
        { 
          name: "Cereal", 
          amount: "2 boxes", 
          cost: "₹7.98 ($3.99 each)",
          ingredients: ["Whole grain wheat", "Rice", "Sugar", "Salt"]
        },
        { 
          name: "Breakfast bars", 
          amount: "1 box (12 count)", 
          cost: "₹4.49",
          ingredients: ["Oats", "Honey", "Dried fruits", "Nuts"]
        },
        { 
          name: "Instant oatmeal packets", 
          amount: "1 box (10 count)", 
          cost: "₹3.79",
          ingredients: ["Quick oats", "Sugar", "Salt", "Flavoring"]
        },
        { 
          name: "Homemade muffins", 
          amount: "12 muffins", 
          cost: "₹3.50 (ingredients)",
          ingredients: ["Flour", "Sugar", "Eggs", "Butter", "Baking powder", "Milk", "Blueberries/Chocolate chips"]
        },
        { 
          name: "Pre-made egg and ham breakfast cups", 
          amount: "6 cups", 
          cost: "₹5.25 (ingredients)",
          ingredients: ["Eggs", "Ham", "Cheese", "Bell peppers", "Onions", "Salt", "Pepper"]
        },
        { 
          name: "Egg pasta frittata", 
          amount: "1 9x13 pan", 
          cost: "₹6.75 (ingredients)",
          ingredients: ["Eggs", "Cooked pasta", "Cheese", "Spinach", "Tomatoes", "Herbs"]
        },
        { 
          name: "Crustless quiche", 
          amount: "1 pie dish", 
          cost: "₹4.95 (ingredients)",
          ingredients: ["Eggs", "Milk", "Cheese", "Spinach/Broccoli", "Onions", "Salt", "Pepper"]
        },
        { 
          name: "Pre-cooked bacon", 
          amount: "1 package", 
          cost: "₹5.99",
          ingredients: ["Bacon", "Preservatives"]
        }
      ]
    },
    {
      category: "Lunch & Snack Basics",
      items: [
        { 
          name: "Sandwich ingredients", 
          amount: "1 week supply", 
          cost: "₹15.00 (various)",
          ingredients: ["Sliced meats", "Cheese", "Lettuce", "Tomato", "Mayonnaise", "Mustard"]
        },
        { 
          name: "Crackers", 
          amount: "2 boxes", 
          cost: "₹5.98 (₹2.99 each)",
          ingredients: ["Flour", "Oil", "Salt", "Seasonings"]
        },
        { 
          name: "Canned tuna", 
          amount: "4 cans", 
          cost: "₹5.16 (₹1.29 each)",
          ingredients: ["Tuna", "Water/Oil", "Salt"]
        },
        { 
          name: "Canned chicken", 
          amount: "2 cans", 
          cost: "₹4.58 (₹2.29 each)",
          ingredients: ["Chicken", "Water", "Salt"]
        },
        { 
          name: "Canned salmon", 
          amount: "2 cans", 
          cost: "₹6.98 (₹3.49 each)",
          ingredients: ["Salmon", "Water", "Salt"]
        },
        { 
          name: "Deli meat", 
          amount: "1 lb", 
          cost: "₹8.99",
          ingredients: ["Turkey/Ham/Roast Beef", "Salt", "Preservatives"]
        },
        { 
          name: "Cheese slices", 
          amount: "1 package", 
          cost: "₹3.49",
          ingredients: ["Milk", "Enzymes", "Salt"]
        },
        { 
          name: "Bread", 
          amount: "2 loaves", 
          cost: "₹5.98 (₹2.99 each)",
          ingredients: ["Flour", "Water", "Yeast", "Sugar", "Salt"]
        },
        { 
          name: "Butter", 
          amount: "1 stick", 
          cost: "₹1.29",
          ingredients: ["Cream", "Salt"]
        }
      ]
    },
    {
      category: "Fruits & Vegetables",
      items: [
        { 
          name: "Fresh fruit", 
          amount: "5-7 pieces", 
          cost: "₹7.50 (approx.)",
          ingredients: ["Apples", "Bananas", "Oranges", "Berries"]
        },
        { 
          name: "Cut vegetable bags", 
          amount: "3 bags", 
          cost: "₹8.97 (₹2.99 each)",
          ingredients: ["Carrots", "Celery", "Bell peppers", "Broccoli"]
        },
        { 
          name: "Dried fruit", 
          amount: "1 package", 
          cost: "₹3.99",
          ingredients: ["Raisins", "Cranberries", "Apricots"]
        }
      ]
    },
    {
      category: "Dairy & Proteins",
      items: [
        { 
          name: "Cheese", 
          amount: "8 oz block", 
          cost: "₹3.79",
          ingredients: ["Milk", "Cultures", "Enzymes", "Salt"]
        },
        { 
          name: "Yogurt", 
          amount: "6 individual cups", 
          cost: "₹5.94 (₹0.99 each)",
          ingredients: ["Milk", "Live cultures", "Fruit", "Sugar"]
        },
        { 
          name: "Hummus", 
          amount: "10 oz container", 
          cost: "₹3.49",
          ingredients: ["Chickpeas", "Tahini", "Olive oil", "Garlic", "Lemon juice", "Salt"]
        },
        { 
          name: "Nut butter", 
          amount: "1 jar", 
          cost: "₹4.29",
          ingredients: ["Peanuts/Almonds", "Salt", "Oil"]
        },
        { 
          name: "Eggs", 
          amount: "1 dozen", 
          cost: "₹3.49",
          ingredients: ["Eggs"]
        }
      ]
    },
    {
      category: "Snacks",
      items: [
        { 
          name: "Chips", 
          amount: "1 family-size bag", 
          cost: "₹4.29",
          ingredients: ["Potatoes/Corn", "Oil", "Salt", "Seasonings"]
        },
        { 
          name: "Pretzels", 
          amount: "1 bag", 
          cost: "₹2.99",
          ingredients: ["Flour", "Water", "Yeast", "Salt", "Baking soda"]
        },
        { 
          name: "Granola", 
          amount: "1 bag", 
          cost: "₹4.49",
          ingredients: ["Oats", "Honey", "Nuts", "Dried fruit"]
        },
        { 
          name: "Nuts", 
          amount: "1 container", 
          cost: "₹6.99",
          ingredients: ["Almonds/Cashews/Peanuts", "Salt"]
        },
        { 
          name: "Trail mix", 
          amount: "1 large bag", 
          cost: "₹5.99",
          ingredients: ["Nuts", "Dried fruit", "Chocolate pieces", "Seeds"]
        },
        { 
          name: "Homemade squares", 
          amount: "8 squares", 
          cost: "₹3.00 (ingredients)",
          ingredients: ["Oats", "Honey", "Peanut butter", "Chocolate chips", "Nuts"]
        },
        { 
          name: "Homemade cookies", 
          amount: "24 cookies", 
          cost: "₹4.25 (ingredients)",
          ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Chocolate chips", "Vanilla"]
        }
      ]
    },
    {
      category: "Beverages",
      items: [
        { 
          name: "Coffee", 
          amount: "1 bag", 
          cost: "₹8.99",
          ingredients: ["Ground coffee beans"]
        },
        { 
          name: "Tea bags", 
          amount: "1 box", 
          cost: "₹3.29",
          ingredients: ["Tea leaves", "Spices"]
        },
        { 
          name: "Cocoa powder", 
          amount: "1 container", 
          cost: "₹4.49",
          ingredients: ["Cocoa powder", "Sugar"]
        },
        { 
          name: "Powdered creamer", 
          amount: "1 container", 
          cost: "₹3.19",
          ingredients: ["Corn syrup solids", "Vegetable oil", "Sodium caseinate"]
        }
      ]
    }
  ];

  // Calculate total cost of all items
  const totalCost = foodCategories.reduce((total, category) => {
    return total + category.items.reduce((catTotal, item) => {
      // Extract just the numerical value from the cost string
      const costValue = parseFloat(item.cost.replace(/[^0-9.]/g, ''));
      return catTotal + costValue;
    }, 0);
  }, 0).toFixed(2);

  return (
    <div className="fullscreen-container">
      <Header/>
      <div className="food-list-container">
        <h1 className="main-heading">Meal Prep Food Items</h1>
        <div className="total-cost">Estimated Total Cost: <span className="cost-value">₹{totalCost}</span></div>
        
        <div className="category-grid">
          {foodCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="category-card">
              <h2 className="category-title">
                {category.category}
              </h2>
              <ul className="item-list">
                {category.items.map((item, itemIndex) => {
                  const isExpanded = expandedItems[`${categoryIndex}-${itemIndex}`];
                  return (
                    <li key={itemIndex} className="list-item">
                      <div className="item-header" onClick={() => toggleItemDetails(categoryIndex, itemIndex)}>
                        <span className="bullet-point">{isExpanded ? '▼' : '►'}</span>
                        <span className="item-name">{item.name}</span>
                        <span className="item-amount">{item.amount}</span>
                        <span className="item-cost">{item.cost}</span>
                      </div>
                      
                      {isExpanded && (
                        <div className="item-details">
                          <div className="ingredients">
                            <h4>Ingredients:</h4>
                            <ul className="ingredients-list">
                              {item.ingredients.map((ingredient, i) => (
                                <li key={i} className="ingredient">{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="tips-section">
          <h3 className="tips-heading">Prep Tips:</h3>
          <ul className="tips-list">
            <li className="tip-item">
              <span className="check-mark">✓</span>
              <span>Pre-cook meats and store in containers for easy reheating</span>
            </li>
            <li className="tip-item">
              <span className="check-mark">✓</span>
              <span>Wash and cut fruits/vegetables ahead of time</span>
            </li>
            <li className="tip-item">
              <span className="check-mark">✓</span>
              <span>Portion snacks into individual servings</span>
            </li>
            <li className="tip-item">
              <span className="check-mark">✓</span>
              <span>Shop sales and use coupons to reduce total cost</span>
            </li>
          </ul>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">© {new Date().getFullYear()} Meal Prep Planner</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FoodList;