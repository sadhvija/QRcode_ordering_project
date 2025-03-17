import React from 'react';
// import '../styles/Cards.css';
import './Cards.css'
import { FaQrcode, FaUtensils, FaShoppingCart, FaCreditCard, FaStar, FaRocket, FaHandSparkles, FaMoneyBillWave, FaConciergeBell,FaShippingFast,FaChartLine} from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
const Cards = () => {
  const features = [
    {
      id: 1,
      icon: <FaQrcode size={40} />,
      title: 'QR Code Scanning',
      description: 'Unique QR code for each table directs customers to your digital menu instantly.'
    },
    {
      id: 2,
      icon: <FaUtensils size={40} />,
      title: 'Digital Menu',
      description: 'Interactive menu with images, descriptions, and real-time availability updates.'
    },
    {
      id: 3,
      icon: <FaShoppingCart size={40} />,
      title: 'Easy Ordering',
      description: 'Customers select items, add special instructions, and place orders directly to the kitchen.'
    },
    {
      id: 4,
      icon: <FaShippingFast size={40} />,
      title: 'Order Tracking',
      description: 'Real-time updates on order status from confirmation to serving.'
    },
    {
      id: 5,
      icon: <FaCreditCard size={40} />,
      title: 'Contactless Payment',
      description: 'Multiple payment options including credit cards, digital wallets, and UPI.'
    },
    {
      id: 6,
      icon: <FaStar size={40} />,
      title: 'Feedback & Loyalty',
      description: 'Collect feedback and reward repeat customers with loyalty points and special offers.'
    }
  ];

  const benefits = [
    {
      id: 1,
      icon: <FaRocket size={40} />,
      title: 'Fast & Efficient',
      description: 'Reduces waiting time and eliminates manual errors in order taking.'
    },
    {
      id: 2,
      icon: <FaHandSparkles size={40} />,
      title: 'Hygienic & Safe',
      description: 'Minimizes physical contact, perfect for the post-pandemic world.'
    },
    {
      id: 3,
      icon: <FaMoneyBillWave size={40} />,
      title: 'Cost-Effective',
      description: 'Reduces expenses on printed menus and optimizes staff allocation.'
    },
    {
      id: 4,
      icon: <FaConciergeBell size={40} />,
      title: 'Enhanced Experience',
      description: 'Provides convenience and seamless transactions for modern diners.'
    },
    {
      id: 5,
      icon: <MdRestaurantMenu size={40} />, // Using a relevant icon
      title: 'Customizable Menu',
      description: 'Allows restaurants to update menu items, prices, and availability in real-time.'
    },
    {
      id: 6,
      icon: <FaChartLine size={40} />, // Using a chart icon for analytics
      title: 'Data Insights & Analytics',
      description: 'Provides valuable insights into customer preferences and sales trends.'
    }
  ];

  return (
    <>
      <section id="features" className="section features-section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <p className="section-subtitle">Discover what makes our system the preferred choice for restaurants</p>

          <div className="cards-grid features-grid">
            {features.map(feature => (
              <div className="card feature-card" key={feature.id}>
                <div className="card-icon">
                  {feature.icon}  {/* This directly renders the icon */}
                </div>

                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Benefits</h2>
          <p className="section-subtitle">Why restaurants and customers love our solution</p>

          <div className="cards-grid benefits-grid">
            {benefits.map(benefit => (
              <div className="card benefit-card" key={benefit.id}>
                <div className="card-icon">
                  {benefit.icon}  {/* Directly render the React icon */}
                </div>

                <h3 className="card-title">{benefit.title}</h3>
                <p className="card-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
