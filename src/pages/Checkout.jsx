import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartReducer";
import "./Checkout.css";
import axios from "axios";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.customer.user);
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("Mercado Pago");
  const [shippingAddress, setShippingAddress] = useState(user.customer.address);

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
    try {
      const response = await axios.post("http://localhost:3000/orders", {
        customerId: user.customer.id, // Assuming you have the customer ID in your user object
        payment_method: paymentMethod,
        shipping_address: shippingAddress,
        cartItems: cartItems.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          selectedSize: item.selectedSize,
        })),
      });

      console.log(shippingAddress);
      console.log(paymentMethod);
      console.log("Order created successfully:", response.data);
      // Handle success (e.g., show a success message, redirect to a thank you page)
    } catch (error) {
      console.error("Error creating order:", error.response.data);
      // Handle error (e.g., show an error message to the user)
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
              <option value="Mercado Pago">Mercado Pago</option>
              <option value="Paypal">Paypal</option>
              <option value="Credit Card">Credit Card</option>
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
