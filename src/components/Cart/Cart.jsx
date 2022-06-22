import { useContext } from 'react';
import { OrdersContext } from '../../context/OrdersContext/OrdersState';
import { ProductContext } from '../../context/ProductContext/ProductState';
import './Cart.scss';

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
  const { createOrder } = useContext(OrdersContext);

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }

  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className='cart' key={i}>
        <span>{cartItem.product}</span>
        <span>{cartItem.price.toFixed(2)} €</span>
      </div>
    );
  });
  return (
    <div>
      {cartItem}
      <button onClick={() => clearCart()}>Clear cart</button>
      <button onClick={() => createNewOrder()}>Create Order</button>
    </div>
  );
};

export default Cart;
