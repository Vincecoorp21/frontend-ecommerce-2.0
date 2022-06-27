import { useContext } from 'react';
import { OrdersContext } from '../../context/OrdersContext/OrdersState';
import { ProductContext } from '../../context/ProductContext/ProductState';
import './Cart.scss';
import { DeleteOutlined } from '@ant-design/icons';

const Cart = () => {
  const { cart, clearCart, deleteOne } = useContext(ProductContext);
  const { createOrder } = useContext(OrdersContext);
  const URL_IMAGE = 'http://localhost:8000';

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }

  const clearProduct = i => {
    deleteOne(i);
  };

  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  const cartItem = cart.map((cartItem2, i) => {
    // console.log(cartItem2['image_path']);
    const pic = cartItem2['image_path'];
    return (
      <>
        <div className='cart' key={i}>
          <span>
            <img className='pic-cart' src={URL_IMAGE + pic} alt='' />
          </span>
          <span>{cartItem2.product}</span>
          <span>{cartItem2.price.toFixed(2)} €</span>
          <span>
            <button className='remove-item' onClick={() => clearProduct(i)}>
              <DeleteOutlined />
            </button>
          </span>
        </div>
      </>
    );
  });
  // console.log(cartItem);
  return (
    <div className='global'>
      <h3>Shopping Cart</h3>
      {cartItem}
      <div className='btn-cont'>
        <button className='button-cart' onClick={() => clearCart()}>
          Clear cart
        </button>
        <button className='button-cart' onClick={() => createNewOrder()}>
          Create Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
