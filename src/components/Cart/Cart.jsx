import { useContext } from 'react';
import { OrdersContext } from '../../context/OrdersContext/OrdersState';
import { ProductContext } from '../../context/ProductContext/ProductState';
import './Cart.scss';

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
  const { createOrder } = useContext(OrdersContext);
  const URL_IMAGE = 'http://localhost:8000';

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }

  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  const cartItem = cart.map((cartItem2, i) => {
    // console.log(cartItem2['image_path']);
    const pic = cartItem2['image_path'];
    return (
      <>
        <div class='tarjeta'></div>
        <img className='pic-cart' src={URL_IMAGE + pic} alt='' />
        <p>{cartItem2.product}</p>
        <p>{cartItem2.price.toFixed(2)} €</p>
      </>
    );
  });
  // console.log(cartItem);
  return (
    <div className='contenedor'>
      {cartItem}
      <button onClick={() => clearCart()}>Clear cart</button>
      <button onClick={() => createNewOrder()}>Create Order</button>
    </div>
  );
};

export default Cart;
