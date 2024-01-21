import React from 'react';
import './ProductCategories.css'; 

const ProductCategories = () => {
  return (
    <div className="photo-links-container">
      <a href="#" className="photo-link">
        <img src="/public/hoddie.webp" alt="Tops" />
        <span className="text-overlay">TOPS</span>
      </a>
      <a href="#" className="photo-link">
        <img src="/public/picture4.webp" alt="Bottoms" />
        <span className="text-overlay">SKATES</span>
      </a>
    </div>
  );
};

export default ProductCategories;
