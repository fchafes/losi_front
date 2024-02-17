import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cartReducer';
import './Checkout.css';
import axios from 'axios';
import Login from '../components/Login';
import UpdateCustomerForm from '../components/UpdateCustomerForm'; // Import the UpdateCustomerForm component

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.customer.user);
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');



  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    return subtotal;
  };

  const handleRemoveFromCart = (id, selectedSize) => {
    dispatch(removeFromCart({ id, selectedSize }));
  };

  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleShippingAddressChange = (e) => {
    setShippingAddress(e.target.value);
  };

  const handleCheckout = async () => {
    // Perform checkout logic here, including payment processing and order creation
    // Use paymentMethod and shippingAddress state values
  };


  const handleConfirmOrder = async () => {
    try {
      // Create an order with the customer ID and total amount
      const orderResponse = await axios.post('http://localhost:3000/orders', {
        customerId: user.customer.id,
        totalAmount: calculateSubtotal(),
      });

      // Create order products for each item in the cart
      await Promise.all(
        cartItems.map(async (item) => {
          await axios.post('http://localhost:3000/orderProducts', {
            orderId: orderResponse.data.id,
            productId: item.id,
            quantity: item.quantity,
          });
        })
      );

      // Clear the cart after successful order creation
      cartItems.forEach((item) => {
        dispatch(removeFromCart({ id: item.id, selectedSize: item.selectedSize }));
      });

      // Optionally, you can show a success message to the user
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      // Handle order placement error
    }
  };

  return (
    <div className="checkout-page-container">
      <div className="checkout-items">
        <h2>Cart Items</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="checkout-item-container ">
              <div className="checkout-item-text">
                <p>{item.name}</p>
                <p>Size: {item.selectedSize}</p>
                <p>Quantity:{item.quantity}</p>
                <div className="checkout-article-body-options-counter-action">
                  <p onClick={() => handleRemoveFromCart(item.id, item.selectedSize)}>Remove</p>
                </div>
              </div>
              <img src={item.photo} className="checkout-item-image" alt="" />
            </div>
          </div>
        ))}
        <div className="cart-subtotal-checkout">
          <p>Subtotal ---&gt; ${calculateSubtotal()}</p>
        </div>
      </div>
      <div className="customer-info">
      <h2>Payment Information</h2>
        <form>
          <label>
            Payment Method:
            <select value={paymentMethod} onChange={handlePaymentMethodChange}>
              <option value="MercadoPago">Mercado Pago</option>
              <option value="Paypal">Paypal</option>
              <option value="CreditCard">Credit Card</option>
            </select>
          </label>
          <label>
            Shipping Address:
            <input
              type="text"
              value={shippingAddress}
              onChange={handleShippingAddressChange}
            />
          </label>
          <button type="button" onClick={handleCheckout}>
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

