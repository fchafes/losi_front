import "./Cart.css";
import CartArticle from "./CartArticle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Cart = ({ cartOpen, toggleCart }) => {


  const cartItems = useSelector((state) => state.cart.items);
  
  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    return subtotal;
  };

  return (
    <>
      <div
        className={`${cartOpen ? "cart-context-shadow" : ""}`}
        onClick={toggleCart}
      ></div>
      <div className={`cart-container ${cartOpen ? "cart-open" : ""}`}>
        <div className="cart-header">
          <h3 className="cart-header-title">CART</h3>
          <p className="cart-header-close" onClick={toggleCart}>
            X
          </p>
        </div>
        {cartOpen && (
          <div className="cart-main">
            {cartItems.length === 0 && (
              <p className="cart-main-empty">No hay nada en tu carrito</p>
            )}
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <CartArticle
                    source={item.photo}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    id={item.id}
                    selectedSize={item.selectedSize}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="cart-subtotal">
          <p>Subtotal ---&gt; ${calculateSubtotal()}</p>
        </div>
        <div className="cart-footer">
          <Link className="cart-check" to={"/checkOut"}>
            <p className="cart-footer-checkout">CHECKOUT</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
