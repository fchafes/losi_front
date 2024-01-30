import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./ProductDetails.css";
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';

const ProductDetails = ({ toggleCart }) => {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Scroll al principio cuando la página se carga
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(productDetails));
    toggleCart();
  };

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
      <div className="products-details-container">
        <div className="products-details">
          <h2>{productDetails.name}</h2>
          <p>Price: ${productDetails.price}</p>
          <p>{productDetails.description}</p>
          <button className='cart-button' onClick={handleAddToCart} >Add to cart</button>
        </div>
        <div className="products-image">
          <img src={productDetails.photo} alt={productDetails.name} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
