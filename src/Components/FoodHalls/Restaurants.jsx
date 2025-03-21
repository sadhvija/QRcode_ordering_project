
import React from 'react';
import "./Restaurants.css"

const Restaurants = ({ selectedVenue, restaurants, setSelectedRestaurant }) => {
  const filteredRestaurants = restaurants.filter(
    restaurant => selectedVenue && restaurant.venueId === selectedVenue.id
  );

  return (
    <div className="restaurants-container">
      <h2 className="text-2xl font-bold mb-2 text-center">{selectedVenue.name}</h2>
      <p className="text-gray-600 mb-6 text-center">{selectedVenue.address}</p>
      <h3 className="text-xl font-semibold mb-4 text-center">Select a Restaurant</h3>

      {/* Flexbox container for restaurant cards */}
      <div className="restaurants-list">
        {filteredRestaurants.map(restaurant => (
          <div
            key={restaurant.id}
            className="restaurant-card"
            onClick={() => setSelectedRestaurant(restaurant)}
          >
            <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
            <div className="restaurant-info">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.description}</p>
              <span className="cuisine-tag">{restaurant.cuisine}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
