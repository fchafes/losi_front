import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartReducer";
import "./Checkout.css";
import axios from 'axios'
import Login from '../components/Login';


const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phone: '',
    password: ''
  });

  const handleRemoveFromCart = (id, selectedSize) => {
    dispatch(removeFromCart({ id, selectedSize }));
  };

  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/customers', formData);
      console.log('Signup successful:', response.data);

      
      dispatch(setUser({ user: response.data, token: response.data.token }));
    } catch (error) {
      console.error('Signup error:', error);
      
    }
  };

  return (
    <div className="checkout-page-container">
    <div className="checkout-items">
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No tienes ningún ítem agregado al carrito</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <div className="checkout-item-container ">
              <div className="checkout-item-text">
                <p>{item.name}</p>
                <p>Size: {item.selectedSize}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="checkout-article-body-options-counter-action">
                  <p
                    onClick={() =>
                      handleRemoveFromCart(item.id, item.selectedSize)
                    }
                  >
                    Remove
                  </p>
                </div>
              </div>
              <img src={item.photo} className="checkout-item-image" alt="" />
            </div>
          </div>
        ))
      )}
    </div>
      <div className="customer-info">
        <h2>Customer Information</h2>
       <Login/>
      </div>
    </div>
  );
};

export default Checkout;
