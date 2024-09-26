import React from 'react';
import Shimmery from '../Assets/Shimmery.jpg';
import Shirt from '../Assets/Shirt.jpg';
import Sweater from '../Assets/Sweater.jpg';

const TrendingProducts = () => {
  const products = [
    { name: 'Shimmery Shirt', price: '$120.00', ImageSrc: Shimmery },
    { name: 'Check Shirt', price: '$150.00', ImageSrc: Shirt },
    { name: 'Sweater Set', price: '$200.00', ImageSrc: Sweater },
  ];

  return (
    <section className="trending-products">
      <h2 className='trends'>Trending Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.ImageSrc} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="icon-button">🛒</button>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TrendingProducts;