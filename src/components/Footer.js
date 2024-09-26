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
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-section useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Man</a></li>
            <li><a href="#">Woman</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Makeup</a></li>
          </ul>
        </div>
        <div className="footer-section about-links">
          <h3>About</h3>
          <ul>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section terms-service">
          <h3>Terms & Service</h3>
          <ul>
            <li><a href="#">Security</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Principles</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;