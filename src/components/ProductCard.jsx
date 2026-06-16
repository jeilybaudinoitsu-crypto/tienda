import React from 'react';

const ProductCard = ({ title, price, image, isFavorite, onToggleFavorite }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="price">${price.toFixed(2)}</p>
        <button
          className={`favorite-btn ${isFavorite ? 'is-favorite' : ''}`}
          onClick={onToggleFavorite}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
