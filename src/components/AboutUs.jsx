import React from 'react';
import './AboutUs.css';

function AboutUs({ navigateTo }) {
  return (
    <div className="about-us-container">
      <nav className="navbar">
        <div className="navbar-brand">🌿 Paradise Nursery</div>
        <div className="navbar-links">
          <button onClick={() => navigateTo('home')}>Inicio</button>
          <button onClick={() => navigateTo('products')}>Plantas</button>
          <button onClick={() => navigateTo('cart')}>🛒 Carrito</button>
        </div>
      </nav>

      <div className="about-hero">
        <h1>Welcome to Paradise Nursery</h1>
        <h2>About Us</h2>
        <p className="about-tagline">Your trusted indoor plant store since 2015</p>
      </div>

      <div className="about-sections">
        <div className="about-card">
          <span className="about-icon">🌍</span>
          <h2>Our Mission</h2>
          <p>
            At Paradise Nursery, our mission is to bring nature into every home.
            We believe every living space deserves a touch of green, and we are
            dedicated to making plants accessible, affordable, and enjoyable for everyone.
          </p>
        </div>

        <div className="about-card">
          <span className="about-icon">🏆</span>
          <h2>Our Story</h2>
          <p>
            Founded in 2015 by a group of passionate botanists, Paradise Nursery
            started with a dream to connect people with the plant world. Today we
            offer over 200 carefully selected plant varieties for every type of home.
          </p>
        </div>

        <div className="about-card">
          <span className="about-icon">💚</span>
          <h2>Our Values</h2>
          <p>
            Sustainability, quality, and a love for plants guide every decision we make.
            All our plants are responsibly grown, ensuring the best quality and the
            lowest possible environmental impact.
          </p>
        </div>

        <div className="about-card">
          <span className="about-icon">📦</span>
          <h2>Our Services</h2>
          <p>
            We offer a wide range of indoor plants organized by category, including
            succulents, tropical plants, and aromatic herbs. Each plant comes with
            care instructions and is safely packaged for delivery.
          </p>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat"><h3>200+</h3><p>Plant Varieties</p></div>
        <div className="stat"><h3>10,000+</h3><p>Happy Customers</p></div>
        <div className="stat"><h3>9 Years</h3><p>Experience</p></div>
        <div className="stat"><h3>100%</h3><p>Sustainable</p></div>
      </div>

      <div className="about-cta">
        <h2>Ready to fill your home with green?</h2>
        <button onClick={() => navigateTo('products')} className="cta-btn">
          Shop Our Plants
        </button>
      </div>
    </div>
  );
}

export default AboutUs;