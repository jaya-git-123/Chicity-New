import React from 'react';

const features = [
  {
    icon: '🚚', 
    title: 'Free Shipping',
    description: 'Lorem ipsum dolor sit amet consectetur. Nisi imperdiet at',
    bgColor: 'bg-light-green'
  },
  {
    icon: '🔄', 
    title: '14 Days Easy Return',
    description: 'Lorem ipsum dolor sit amet consectetur. Nisi imperdiet at',
    bgColor: 'bg-light-yellow'
  },
  {
    icon: '🎧', 
    title: '24/7 Customer Support',
    description: 'Lorem ipsum dolor sit amet consectetur. Nisi imperdiet at',
    bgColor: 'bg-light-blue'
  }
];
const FeatureCard = ({ icon, title, description, bgColor }) => {
    return (
      <div className={`feature-card ${bgColor}`}>
        <div className="icon">
          {icon}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

const FeatureList = () => {
  return (
    <div className="feature-list">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          bgColor={feature.bgColor}
        />
      ))}
    </div>
  );
};

export default FeatureList;