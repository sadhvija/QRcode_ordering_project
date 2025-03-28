import React, { useContext } from 'react'; // Import useContext
import { CartContext } from '../../../Context/cartcontext'; // Import CartContext
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import "./Menu.css";

const Menu = ({ selectedRestaurant, menuItems }) => {
  const { addToCart } = useContext(CartContext); // Access addToCart from context

  const filteredMenuItems = menuItems.filter(
    item => selectedRestaurant && item.restaurantId === selectedRestaurant.id
  );

  // Function to handle adding item and showing toast
  const handleAddToCart = (item) => {
    addToCart(item); // Add item to cart
    toast.success(`${item.name} added to cart!`, { // Toast success message
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: { backgroundColor: 'whitesmoke', color: 'black' },
    });
  };

  return (
    <div className="menu-container">
      <h1 className="text-4xl font-bold text-center mb-6">Select a MenuItem</h1>

      <h2 className="text-2xl font-bold">{selectedRestaurant?.name}</h2>
      <p className="text-gray-600 mb-4">{selectedRestaurant?.description}</p>

      <Link to="/viewcart" className="view-cart-button bg-blue-500 text-white px-4 py-2 rounded-lg">
        View Cart 🛒
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMenuItems.map(item => (
          <div key={item.id} className="menu-item bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="price font-bold text-gray-800">₹{item.price.toFixed(2)}</span>

                {/* Button to Add Item to Cart with toast */}
                <button
                  className="add-button bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors duration-300"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toast container to display toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default Menu;
