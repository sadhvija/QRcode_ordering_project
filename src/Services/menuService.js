// client/src/services/menuService.js
import api from './api';

const menuService = {
  // Get all menu items for a restaurant
  getMenuItems: async (restaurantId) => {
    try {
      const response = await api.get(`/menu/${restaurantId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw error;
    }
  },
  
  // Get featured menu items
  getFeaturedItems: async (restaurantId) => {
    try {
      const response = await api.get(`/menu/featured/${restaurantId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching featured items:', error);
      throw error;
    }
  },
  
  // Get menu item details
  getItemDetails: async (itemId) => {
    try {
      const response = await api.get(`/menu/item/${itemId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching item details:', error);
      throw error;
    }
  },
  
  // Get menu categories
  getCategories: async (restaurantId) => {
    try {
      const response = await api.get(`/menu/categories/${restaurantId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }
};

export default menuService;