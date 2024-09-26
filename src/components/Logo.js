import React from 'react';
import image1 from '../Assets/Britco.png';
import image2 from '../Assets/Gilt.png';
import image3 from '../Assets/PopSugar.png';
import image4 from '../Assets/huffpost.png';

const ImageContainer = () => {
  return (
    <div className="image-container-btm">
      <img src={image1} style={{marginLeft:'10px'  }} />
      <img src={image2} />
      <img src={image3} />
      <img src={image4} />
    </div>
  );
};

export default ImageContainer;