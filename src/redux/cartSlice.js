// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    tableNumber: '',
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    setTableNumber: (state, action) => {
      state.tableNumber = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setTableNumber } = cartSlice.actions;
export default cartSlice.reducer;
