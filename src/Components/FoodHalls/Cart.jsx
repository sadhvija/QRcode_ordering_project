
import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartcontext';
import "./cart.css"

const Cart = () => {
  const { cart, removeFromCart, calculateTotal, placeOrder, tableNumber, setTableNumber } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ₹{calculateTotal()}</p>
      <input
        type="text"
        value={tableNumber}
        onChange={(e) => setTableNumber(e.target.value)}
        placeholder="Enter table number"
      />
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
