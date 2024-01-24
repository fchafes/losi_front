import './CartArticle.css';
import { useDispatch } from 'react-redux';
import { incrementQuantity } from '../redux/cartReducer';
import { decrementQuantity } from '../redux/cartReducer';
import { removeFromCart } from '../redux/cartReducer';



const CartArticle = (props) => {

  const dispatch = useDispatch();
  const handleIncrementQuantity = () => {
    dispatch(incrementQuantity(props.id));
  }
  const handleDecrementQuantity = () => {
    dispatch(decrementQuantity(props.id));
  }
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(props.id));
  }

  return (
    <div className='cart-article'>
          <div className='cart-article-img'>
            <img src={props.source} alt="" />
          </div>
          <div className='cart-article-body'>
            <div className='cart-article-body-info'>
              <p className='cart-article-body-info-title'>{props.name}</p>
              <p className='cart-article-body-info-price'>${props.price}</p>
            </div>
            <div className='cart-article-body-options'>
              <div className='cart-article-body-options-counter'>
                <div className='cart-article-body-options-counter-action' onClick={handleDecrementQuantity}>
                  <p>-</p>
                </div>
                <p>{props.quantity}</p>
                <div className='cart-article-body-options-counter-action' onClick={handleIncrementQuantity}>
                  <p>+</p>
                </div>
              </div>
              <div className='remove-link' onClick={handleRemoveFromCart} >Remove</div>
            </div>
          </div>
        </div>
  );
};

export default CartArticle;
