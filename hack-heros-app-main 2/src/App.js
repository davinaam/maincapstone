import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import logo from './Assets/logo.png'; // Import the logo image
import image1 from './Assets/davina.png';
import image2 from './Assets/Women.png';
import image3 from './Assets/sarah.png';
import product1 from './Assets/black closure wig 1.png';
import product2 from './Assets/613 frontal wig 1.png';
import product3 from './Assets/curly wig 1.png';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProductClick = (productName) => {
    alert(`You clicked on ${productName}`);
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <span>Search</span>
          <span>Cart</span>
          <span>Profile</span>
        </div>
      </header>

      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="container">
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        <img src={image3} alt="Image 3" />
      </div>

      <div className="product-container">
        <div className="product">
          <img src={product1} alt="Product 1" />
          <div 
            className="text-box" 
            onClick={() => handleProductClick('Product 1 Description')}
          >
            Black Wig
          </div>
        </div>
        <div className="product">
          <img src={product2} alt="Product 2" />
          <div 
            className="text-box" 
            onClick={() => handleProductClick('Product 2 Description')}
          >
            Blonde Wig
          </div>
        </div>
        <div className="product">
          <img src={product3} alt="Product 3" />
          <div 
            className="text-box" 
            onClick={() => handleProductClick('Product 3 Description')}
          >
            Curly Wig
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-group">
          <ul className="About">
            <li>About </li>
            <li>Our Mission</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Directory</li>
            <li>Our Founders</li>
          </ul>
        </div>
        <div className="footer-group">
          <ul className="Connect">
            <li>Connect</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>TikTok</li>
            <li>Email</li>
            <li>YouTube</li>
            <li>Pinterest</li>
          </ul>
        </div>
        <div className="footer-group">
          <ul className="Help">
            <li>Help</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
            <li>Rewards Program</li>
            <li>Community Guidelines</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
