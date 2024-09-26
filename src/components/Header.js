import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">CHICITY</div>
      <div className="hamburger-menu" onClick={handleMenuToggle}>
        <FaBars />
      </div>
      <div className={`navbar-menu ${showMenu ? 'show-menu' : ''}`}>
        <ul>
          <li>Woman</li>
          <li>Man</li>
          <li>Accessories</li>
          <li>New Arrivals</li>
          <li>Sale</li>
        </ul>
        <div className="navbar-icons">
          <input type="text" placeholder=" 🔍 Search for products  🛒" className="search-input" />
          <button className="icon-button-btn">❤️</button> 
          <button className="icon-button-btn">👤</button> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;