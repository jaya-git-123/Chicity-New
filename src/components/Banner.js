import React from 'react';
import AssestImg from '../Assets/istockphoto-994863300-1024x1024.jpg'

const Banner = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="collection-tag">Trending Collection 2024</p>
        <h1 className="hero-title">
          Inspired by <br />
          your fashion  <br />
          dream
        </h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur. Nisi imperdiet at tellus sed vel neque sapien.
        </p>
        <button className="shop-button">Shop Now</button>
      </div>
      <div className="hero-image">
        <img src = {AssestImg} alt = 'Amazing collection'/>
      </div>
    </section>
  );
};

export default Banner;