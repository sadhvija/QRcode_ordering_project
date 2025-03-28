// client/src/services/orderService.js
import api from './api';

const orderService = {
  // Create a new order
  createOrder: async (orderData) => {
    try {
      const response = await api.post('/orders', orderData);
      return response.data;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  },
  
  // Get order details
  getOrderDetails: async (orderId) => {
    try {
      const response = await api.get(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching order details:', error);
      throw error;
    }
  },
  
  // Get order status
  getOrderStatus: async (orderId) => {
    try {
      const response = await api.get(`/orders/${orderId}/status`);
      return response.data;
    } catch (error) {
      console.error('Error fetching order status:', error);
      throw error;
    }
  },
  
  // Submit order feedback
  submitFeedback: async (orderId, feedbackData) => {
    try {
      const response = await api.post(`/orders/${orderId}/feedback`, feedbackData);
      return response.data;
    } catch (error) {
      console.error('Error submitting feedback:', error);
      throw error;
    }
  },
  
  // Get user order history
  getUserOrders: async () => {
    try {
      const response = await api.get('/orders/user');
      return response.data;
    } catch (error) {
      console.error('Error fetching user orders:', error);
      throw error;
    }
  }
};

export default orderService;