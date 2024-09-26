import React from 'react';
import image1 from '../Assets/Britco.png';
import image2 from '../Assets/Gilt.png';
import image3 from '../Assets/PopSugar.png';
import image4 from '../Assets/huffpost.png';

const ImageContainer = () => {
  return (
    <div className="image-container-btm">
      <img src={image1} style={{marginLeft:'10px'  }} alt = 'Amazing collection' />
      <img src={image2}  alt = 'Amazing collection' />
      <img src={image3} alt = 'Amazing collection' />
      <img src={image4} alt = 'Amazing collection' />
    </div>

  );
};

export default ImageContainer;