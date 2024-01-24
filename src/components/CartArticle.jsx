import './CartArticle.css';
import { Link } from "react-router-dom";

const CartArticle = (props) => {
  return (
    <div className='cart-article'>
          <div className='cart-article-img'>
            <img src={props.source} alt="" />
          </div>
          <div className='cart-article-body'>
            <div className='cart-article-body-info'>
              <p>{props.name}</p>
              <p>{props.price}</p>
            </div>
            <div className='cart-article-body-options'>
              <div className='cart-article-body-options-counter'>
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <Link to="#" className='remove-link'>Remove</Link>
            </div>
          </div>
        </div>
  );
};

export default CartArticle;
