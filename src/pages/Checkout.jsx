import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartReducer";
import "./Checkout.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id, selectedSize) => {
    dispatch(removeFromCart({ id, selectedSize }));
  };

  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="checkout-page-container">
      <div className="checkout-items">
        <h2>Cart Items</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="checkout-item-container">
              <div className="checkout-item-text">
                <p>{item.name}</p>

                <p>Size: {item.selectedSize}</p>
                <div className="quantity-checkout">
                  <p>Quantity:</p>
                  <p
                    className="checkout-article-body-options-counter-action"
                    onClick={() => handleIncrementQuantity(item.id)}
                  >
                    +
                  </p>
                  <p>{item.quantity}</p>

                  <p
                    className="checkout-article-body-options-counter-action"
                    onClick={() => handleDecrementQuantity(item.id)}
                  >
                    -
                  </p>
                </div>
              </div>
              <img src={item.photo} className="checkout-item-image " alt="" />
              <button
                onClick={() => handleRemoveFromCart(item.id, item.selectedSize)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="customer-info">
        <h2>Customer Information</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="Phone Number" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
