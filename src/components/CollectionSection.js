import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

function CollectionCard({ imageSrc, title, description }) {
  return (
    <div className="collection-card">
      <div className="image-container">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="collection-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="explore-button">Explore Now <IoIosArrowForward/></button>
      </div>
    </div>
  );
}

export default CollectionCard;
