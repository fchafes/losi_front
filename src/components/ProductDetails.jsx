// ProductDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();

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

  return (
    <div>
      <h2>{productDetails.name}</h2>
      <p>Price: ${productDetails.price}</p>
      <img src={productDetails.photo} alt={productDetails.name} />
      <p>Description: {productDetails.description}</p>
    </div>
  );
};

export default ProductDetail;

