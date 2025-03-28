import Header from '../LandingPage/Header';
import Banner from '../LandingPage/Banner';
import Cards from '../LandingPage/Cards';
import Footer from '../LandingPage/Footer';
import DemoVideo from '../LandingPage/Demovideo'; 
import mockupImage from '/assets/mockup.svg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Header />
      <Banner mockupSrc={mockupImage} />

      <div className="container">
        <section className="features-section">
          <h2 className="section-title">Why Choose Our Solution?</h2>
          <Cards />
        </section>

        <section className="video-demo-section">
          <DemoVideo /> {/* ✅ Video is properly embedded now */}
          <div className="video-description">
            <h3>Simple, Fast & Contactless Ordering</h3>
            <p>
              Watch how customers can easily scan QR codes, browse the menu, place orders, and pay 
              without any physical contact or waiting for staff. Our solution streamlines the entire 
              dining experience from start to finish.
            </p>
            <button className="btn-primary">
              <Link to="/foodlist">Get Started Today</Link>
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}



