import React from 'react';
import "./Cart.css";

const Cart = ({ cart, removeFromCart, calculateTotal, placeOrder, tableNumber, setTableNumber }) => {
  return (
    <div className="cart-container bg-white rounded-lg shadow-md p-4 sticky top-20">
      <h3 className="text-xl font-bold mb-4">Your Order</h3>
      {cart.length === 0 ? (
        <p className="text-gray-500 mb-4">Your cart is empty</p>
      ) : (
        <>
          <div className="mb-4 max-h-64 overflow-y-auto">
            {cart.map((item, index) => (
              <div key={index} className="cart-item flex justify-between items-center py-2 border-b">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <button
                  className="remove-button text-white-500 hover:text-red-700 transition-colors duration-300"
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
            className={`checkout-button w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
              cart.length === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
            onClick={placeOrder}
            disabled={cart.length === 0}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
