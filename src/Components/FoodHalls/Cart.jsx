
// import React, { useContext } from 'react';
// import { CartContext } from '../../Context/cartcontext';
// import { ToastContainer, toast } from 'react-toastify';  // Import ToastContainer and toast
// import 'react-toastify/dist/ReactToastify.css';          // Import toastify CSS
// import "./cart.css";

// const Cart = () => {
//   const { cart, removeFromCart, calculateTotal, placeOrder, tableNumber, setTableNumber } = useContext(CartContext);

//   const handleRemoveFromCart = (index, itemName) => {
//     removeFromCart(index);  // Remove item from cart

//     // Show toast notification
//     toast.error(`${itemName} removed from cart`, {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       style:{ backgroundColor: 'whitesmoke', color: 'black' },
//     });
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>
//               {item.name} - ₹{item.price}
//               <button onClick={() => handleRemoveFromCart(index, item.name)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <p>Total: ₹{calculateTotal()}</p>

//       <input
//         type="text"
//         value={tableNumber}
//         onChange={(e) => setTableNumber(e.target.value)}
//         placeholder="Enter table number"
//       />
//       <button onClick={placeOrder}>Place Order</button>

//       {/* Toast container to display notifications */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default Cart;
import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartcontext';
import { ToastContainer, toast } from 'react-toastify';  // Import ToastContainer and toast
import Swal from 'sweetalert2';  // Import SweetAlert2
import 'react-toastify/dist/ReactToastify.css';          // Import toastify CSS
import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart, calculateTotal, placeOrder, tableNumber, setTableNumber } = useContext(CartContext);

  const handleRemoveFromCart = (index, itemName) => {
    removeFromCart(index);  // Remove item from cart

    // Show toast notification
    toast.error(`${itemName} removed from cart`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: { backgroundColor: 'whitesmoke', color: 'black' },
    });
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your cart is empty! Add some items first.',
      });
      return;
    }

    Swal.fire({
      title: 'Confirm Your Order',
      text: `Are you sure you want to place the order for ₹${calculateTotal()}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Place Order!',
    }).then((result) => {
      if (result.isConfirmed) {
        placeOrder(); // Call the placeOrder function from context
        Swal.fire('Order Placed!', 'Your order has been successfully placed!', 'success');
      }
    });
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
              <button onClick={() => handleRemoveFromCart(index, item.name)}>Remove</button>
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
      <button onClick={handlePlaceOrder}>Place Order</button> {/* Handle order confirmation */}

      {/* Toast container to display notifications */}
      <ToastContainer />
    </div>
  );
};

export default Cart;

