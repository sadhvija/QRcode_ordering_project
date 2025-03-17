import React from 'react';
import './Banner.css';

const Banner = ({ mockupSrc }) => {
  return (
    <div className="banner" id="home">
      <div className="container banner-container">
        <div className="banner-content">
          <h1>Contactless Restaurant Ordering & Payment System</h1>
          <p className="subtitle">Transform your restaurant experience with our QR code ordering solution</p>
          <div className="banner-tagline">
            <span>"Scan More-Eat More"</span> – Just scan and place the order!
          </div>
          <div className="banner-cta">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="banner-image">
          <img src={mockupSrc} alt="ScanEat App Mockup" className="mockup-image" />
        </div>
      </div>
      <div className="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,117.3C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;


// import React from 'react';
// // import '../styles/Banner.css';
// import './Banner.css'
// const Banner = () => {
//   return (
//     <section className="banner">
//       <div className="container banner-container">
//         <div className="banner-content">
//           <h1>Contactless Restaurant Ordering System</h1>
//           <h2>"Less Talking, More Eating" – Just scan and place the order!</h2>
//           <p>
//             Our contactless ordering solution lets customers scan a QR code, 
//             browse the menu, order, and pay - all from their smartphone. 
//             No physical menus, no waiting for staff, just a seamless dining experience.
//           </p>
//           <div className="banner-cta">
//             <a href="#demo" className="btn btn-primary">Try Demo</a>
//             <a href="#contact" className="btn btn-secondary">Contact Sales</a>
//           </div>
//         </div>
//         <div className="banner-image">
//           <img src="/banner-image.png" alt="Contactless ordering demo" />
//         </div>
//       </div>
//       <div className="scroll-indicator">
//         <span>Scroll to learn more</span>
//         <i className="arrow-down"></i>
//       </div>
//     </section>
//   );
// };

// export default Banner;