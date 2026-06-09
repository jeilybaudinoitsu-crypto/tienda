import React from 'react';

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
