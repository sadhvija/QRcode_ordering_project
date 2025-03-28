// client/src/services/paymentService.js
import api from './api';

const paymentService = {
  // Process payment
  processPayment: async (paymentData) => {
    try {
      const response = await api.post('/payments/process', paymentData);
      return response.data;
    } catch (error) {
      console.error('Error processing payment:', error);
      throw error;
    }
  },
  
  // Verify payment status
  verifyPayment: async (paymentId) => {
    try {
      const response = await api.get(`/payments/verify/${paymentId}`);
      return response.data;
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw error;
    }
  }
};

export default paymentService;