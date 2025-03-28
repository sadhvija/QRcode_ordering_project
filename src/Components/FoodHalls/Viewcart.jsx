
import React, { useState } from "react";
import "./Viewcart.css";
import Cart from "./Cart";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; // Import the SweetAlert2 CSS
import Header from "../LandingPage/Header";

const Viewcart = () => {
  const [cart, setCart] = useState([]);
  const [tableNumber, setTableNumber] = useState('');

  const placeOrder = () => {
    setCart([]);
    setTableNumber('');
  };

  return (
    <>
     <Header/>
    <div className="viewcart-container">
     
      <Cart
        cart={cart}
        placeOrder={placeOrder}
        tableNumber={tableNumber}
        setTableNumber={setTableNumber}
      />
    </div></>
    
  );
};

export default Viewcart;
