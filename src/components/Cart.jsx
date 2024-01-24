import { useState } from "react";
import './Cart.css';
import CartArticle from './CartArticle';

const Cart = () => {

  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
    <div className={`cart-container ${cartOpen ? 'cart-open' : ''}`}>
      <div className='cart-header'>
        <h3 className='cart-header-title'>CART</h3>
        <p className='cart-header-close' onClick={toggleCart}>X</p>
      </div>
      {cartOpen && (
      <div className='cart-main'>
        <CartArticle
          source="https://bakerskateboards.com/cdn/shop/files/bkhasadwboard_240x.jpg?v=1704836092"
          name="Losi Mapple Board"
          price="$75"
        />
        <CartArticle
          source="https://bakerskateboards.com/cdn/shop/files/shopify_240x.jpg?v=1704835572"
          name="Black Hoodie Losi"
          price="$105"
        />
        <CartArticle
          source="https://bakerskateboards.com/cdn/shop/files/trimmed_TB-Brand-Name-8-B660-8.125-mock-shopify_064ccded-85a2-4d9e-bbf8-44b4db475288_240x.jpg?v=1696876125"
          name="Baker Deck 8.125"
          price="$95"
        />
      </div>
      )}
      <div className='cart-footer'>
        <p className='cart-footer-checkout'>CHECKOUT</p>
      </div>
    </div>
    </>
  );
};

export default Cart;
