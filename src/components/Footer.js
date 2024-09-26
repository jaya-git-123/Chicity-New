import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand-section">
          <h2>CHICITY</h2>
          <p>
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant.
          </p>
          <div className="social-icons">
            <i className= "fab fa-facebook-f" />
            <i className= "fab fa-instagram" />
            <i className= "fab fa-twitter" />
            <i className= "fab fa-linkedin-in" />
          </div>

        </div>
        <div className="footer-section useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li>Man</li>
            <li>Woman</li>
            <li>Accessories</li>
            <li>Makeup</li>
          </ul>
        </div>
        <div className="footer-section about-links">
          <h3>About</h3>
          <ul>
            <li>Shop</li>
            <li>Product</li>
            <li>Location</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section terms-service">
          <h3>Terms & Service</h3>
          <ul>
            <li>Security</li>
            <li>Help</li>
            <li>FAQ</li>
            <li>Principles</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;