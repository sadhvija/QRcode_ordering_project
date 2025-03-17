import React, { useState } from 'react';
import Header from '../LandingPage/Header';
import './Foodhalls.css';
const FoodHallOrderingSystem = () => {
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [tableNumber, setTableNumber] = useState('');
  const [paymentStep, setPaymentStep] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  
  // Sample data
  const venues = [
    { id: 1, name: "Downtown Food Hall", image: "/Images/tandoori.jpg", address: "123 Main St" },
    { id: 2, name: "Waterfront Market", image: "/Images/pasta.jpg", address: "456 Harbor Blvd" },
    { id: 3, name: "Urban Eats Collective", image: "/Images/sushirolls.jpg", address: "789 City Center" }
  ];
  
  // Enhanced restaurant data combining both implementations
  const restaurants = [
    { id: 1, venueId: 1, name: "Gourmet Burger Co.", cuisine: "American", description: "Juicy, handcrafted burgers with fresh ingredients.", image: "/api/placeholder/200/150" },
    { id: 2, venueId: 1, name: "Sushi Delight", cuisine: "Japanese", description: "Fresh and authentic sushi rolls made by top chefs.", image: "/api/placeholder/200/150" },
    { id: 3, venueId: 1, name: "Pasta Heaven", cuisine: "Italian", description: "Homemade pasta with delicious sauces.", image: "/api/placeholder/200/150" },
    { id: 4, venueId: 2, name: "Vegan Bites", cuisine: "Plant-based", description: "Delicious and healthy plant-based meals.", image: "/api/placeholder/200/150" },
    { id: 5, venueId: 2, name: "Taco Fiesta", cuisine: "Mexican", description: "Authentic Mexican street tacos and more.", image: "/api/placeholder/200/150" },
    { id: 6, venueId: 3, name: "Fresh Greens", cuisine: "Salads", description: "Fresh and healthy salads with homemade dressings.", image: "/api/placeholder/200/150" }
  ];
  
  const menuItems = [
    { id: 1, restaurantId: 1, name: "Classic Cheeseburger", price: 9.99, description: "Beef patty with cheese, lettuce, and tomato", image: "/api/placeholder/150/100" },
    { id: 2, restaurantId: 1, name: "Bacon Burger", price: 11.99, description: "Beef patty with bacon, cheese, and special sauce", image: "/api/placeholder/150/100" },
    { id: 3, restaurantId: 2, name: "California Roll", price: 7.99, description: "Crab, avocado, and cucumber", image: "/api/placeholder/150/100" },
    { id: 4, restaurantId: 2, name: "Salmon Nigiri", price: 5.99, description: "Fresh salmon over rice", image: "/api/placeholder/150/100" },
    { id: 5, restaurantId: 3, name: "Spaghetti Bolognese", price: 12.99, description: "Classic pasta with rich meat sauce", image: "/api/placeholder/150/100" },
    { id: 6, restaurantId: 3, name: "Fettuccine Alfredo", price: 11.99, description: "Creamy pasta with parmesan cheese", image: "/api/placeholder/150/100" },
    { id: 7, restaurantId: 4, name: "Beyond Burger", price: 10.99, description: "Plant-based patty with all the fixings", image: "/api/placeholder/150/100" },
    { id: 8, restaurantId: 5, name: "Carne Asada Taco", price: 4.99, description: "Grilled steak taco with onions and cilantro", image: "/api/placeholder/150/100" },
    { id: 9, restaurantId: 5, name: "Chicken Quesadilla", price: 8.99, description: "Flour tortilla filled with cheese and chicken", image: "/api/placeholder/150/100" },
    { id: 10, restaurantId: 6, name: "Garden Salad", price: 8.99, description: "Mixed greens with seasonal vegetables", image: "/api/placeholder/150/100" }
  ];
  
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };
  
  const placeOrder = () => {
    if (tableNumber.trim() === '') {
      alert('Please enter your table number');
      return;
    }
    setPaymentStep(true);
  };
  
  const selectPaymentMethod = (method) => {
    setPaymentMethod(method);
    // For all payment methods, directly place the order
    setOrderPlaced(true);
  };
  
  const resetOrder = () => {
    setSelectedVenue(null);
    setSelectedRestaurant(null);
    setCart([]);
    setOrderPlaced(false);
    setTableNumber('');
    setPaymentStep(false);
    setPaymentMethod(null);
  };
  
  const filteredRestaurants = restaurants.filter(
    restaurant => selectedVenue && restaurant.venueId === selectedVenue.id
  );
  
  const filteredMenuItems = menuItems.filter(
    item => selectedRestaurant && item.restaurantId === selectedRestaurant.id
  );

  // Home screen when no venue is selected
  const renderHome = () => (
    <div>
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to Food Hall Ordering</h1>
      <p className="text-center text-gray-600 mb-8">The contactless ordering solution for food halls</p>
      
      <h2 className="text-2xl font-bold mb-6">Select a Food Hall</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map(venue => (
          <div 
            key={venue.id} 
            className="venue-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => setSelectedVenue(venue)}
          >
            <img src={venue.image} alt={venue.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{venue.name}</h3>
              <p className="text-gray-600 mt-2">{venue.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Restaurant selection screen
  const renderRestaurants = () => (
    <div>
      <h2 className="text-2xl font-bold mb-2">{selectedVenue.name}</h2>
      <p className="text-gray-600 mb-6">{selectedVenue.address}</p>
      <h3 className="text-xl font-semibold mb-4">Select a Restaurant</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map(restaurant => (
          <div 
            key={restaurant.id} 
            className="restaurant-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => setSelectedRestaurant(restaurant)}
          >
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{restaurant.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{restaurant.description}</p>
              <span className="cuisine-tag inline-block bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">{restaurant.cuisine}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Menu items screen
  const renderMenuItems = () => (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-2/3">
        <div className="flex items-center mb-6">
          <button 
            className="mr-4 text-blue-500 hover:text-blue-700 flex items-center"
            onClick={() => setSelectedRestaurant(null)}
          >
            <span className="mr-1">←</span> Back
          </button>
          <h2 className="text-2xl font-bold">{selectedRestaurant.name}</h2>
        </div>
        <p className="text-gray-600 mb-4">{selectedRestaurant.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMenuItems.map(item => (
            <div key={item.id} className="menu-item bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex">
                <img src={item.image} alt={item.name} className="menu-item-image w-1/3 object-cover" />
                <div className="p-4 w-2/3">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="price font-bold text-gray-800">${item.price.toFixed(2)}</span>
                    <button 
                      className="add-button bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors duration-300"
                      onClick={() => addToCart(item)}
                    >
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/3">
        <div className="cart-container bg-white rounded-lg shadow-md p-4 sticky top-4">
          <h3 className="text-xl font-bold mb-4">Your Order</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500 mb-4">Your cart is empty</p>
          ) : (
            <>
              <div className="mb-4">
                {cart.map((item, index) => (
                  <div key={index} className="cart-item flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    <button 
                      className="remove-button text-red-500 hover:text-red-700 transition-colors duration-300"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total:</span>
                <span>${calculateTotal()}</span>
              </div>
              <div className="mb-4">
                <label htmlFor="table-number" className="block text-sm font-medium mb-1">
                  Table Number:
                </label>
                <input
                  type="text"
                  id="table-number"
                  className="table-input w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder="Enter your table number"
                />
              </div>
              <button 
                className="checkout-button w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300"
                onClick={placeOrder}
                disabled={cart.length === 0}
              >
                Place Order
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  // Payment method selection screen
  const renderPaymentMethods = () => (
    <div className="payment-container bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Select Payment Method</h2>
      
      <div className="payment-options grid grid-cols-1 gap-4">
        <button 
          className="payment-option flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors duration-300"
          onClick={() => selectPaymentMethod('gpay')}
        >
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold">G</span>
          </div>
          <span className="font-medium">Google Pay</span>
        </button>
        
        <button 
          className="payment-option flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors duration-300"
          onClick={() => selectPaymentMethod('ppay')}
        >
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold">P</span>
          </div>
          <span className="font-medium">PhonePe</span>
        </button>
        
        <button 
          className="payment-option flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors duration-300"
          onClick={() => selectPaymentMethod('cash')}
        >
          <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold">₹</span>
          </div>
          <span className="font-medium">Cash on Delivery</span>
        </button>
      </div>
      
      <button 
        className="mt-6 w-full bg-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-400 transition-colors duration-300"
        onClick={() => setPaymentStep(false)}
      >
        Back to Order
      </button>
    </div>
  );

  // Order confirmation screen
  const renderOrderConfirmation = () => (
    <div className="confirmation-container bg-white rounded-lg shadow-md p-8 text-center max-w-md mx-auto">
      <div className="success-icon text-green-500 text-5xl mb-4">✓</div>
      <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
      <p className="mb-2">Your order has been sent to the restaurants.</p>
      <p className="mb-4">Please wait at table #{tableNumber}. A server will bring your food when it's ready.</p>
      {paymentMethod === 'cash' ? (
        <p className="mb-4 font-medium text-orange-500">
          Please keep cash ready for payment on delivery.
        </p>
      ) : (
        <p className="mb-4 font-medium text-green-500">
          Payment successfully processed via {paymentMethod === 'gpay' ? 'Google Pay' : 'PhonePe'}.
        </p>
      )}
      <button 
        className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300"
        onClick={resetOrder}
      >
        Place Another Order
      </button>
    </div>
  );

  // Side navigation with logo
  const renderSideNav = () => (
    <div className="side-nav bg-gray-800 text-white fixed h-full w-16 flex flex-col items-center py-4">
      <div className="logo-container mb-8">
        <div className="side-logo w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="font-bold text-sm">FH</span>
        </div>
      </div>
      <div className="nav-item w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mb-4 cursor-pointer">
        <span className="font-bold">🏠</span>
      </div>
      <div className="nav-item w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mb-4 cursor-pointer">
        <span className="font-bold">🍔</span>
      </div>
      <div className="nav-item w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mb-4 cursor-pointer">
        <span className="font-bold">🛒</span>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header/>
      {renderSideNav()}
      <header className="header bg-white shadow-md p-4 sticky top-0 z-10 ml-16">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">
              {selectedVenue ? selectedVenue.name : 'Food Halls'}
            </h1>
          </div>
          <div className="flex items-center">
            {!paymentStep && !orderPlaced && (
              <span className="mr-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {cart.length} items
              </span>
            )}
            {selectedVenue && !paymentStep && !orderPlaced && (
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                onClick={() => selectedRestaurant ? setSelectedRestaurant(null) : setSelectedVenue(null)}
              >
                {selectedRestaurant ? 'Back to Restaurants' : 'Back to Venues'}
              </button>
            )}
          </div>
        </div>
      </header>
      
      <main className="container mx-auto p-4 my-4 ml-16">
        {orderPlaced ? renderOrderConfirmation() : 
         paymentStep ? renderPaymentMethods() :
         !selectedVenue ? renderHome() : 
         !selectedRestaurant ? renderRestaurants() :
         renderMenuItems()}
      </main>
      
      <footer className="footer bg-gray-800 text-white p-6 mt-8 ml-16">
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