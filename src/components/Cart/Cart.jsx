import { useContext } from 'react';

import { ProductContext } from '../../context/ProductContext/ProductState';

const Cart = () => {
  const { cart } = useContext(ProductContext);

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }
  
  const cartItem = cart.map((cartItem, i) => {
    // console.log(cartItem.product)
    return (
      <div className='cart' key={i}>
        <span>{cartItem.product}</span>        
        <span>{cartItem.price.toFixed(2)} €</span>
      </div>
    );
  });

  return <div>{cartItem}</div>;
};

export default Cart;
