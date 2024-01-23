import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./ProductDetails.css";
import Navbar from './Navbar';
import Footer from './Footer';

const ProductDetail = () => {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();


  const fetchProductDetails = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:3000/products/${productId}`);
      setProductDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };
  
  useEffect(() => {
    fetchProductDetails(id);
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };


  return (
    <div>
      <div className="product-details-container">
        <Navbar />
        <div className="product-details">
          <h2>{productDetails.name}</h2>
          <p>Price: ${productDetails.price}</p>
          <p>{productDetails.description}</p>
        </div>
        <div className="product-image">
          <img src={productDetails.photo} alt={productDetails.name} />
        </div>
        <button className="return-home-button" onClick={handleGoBack}>
          Home
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
