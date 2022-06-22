import React, { useContext, useEffect } from 'react';
// import { GlobalContext } from '../../Context/GlobalState';
import { ProductContext } from '../../../context/ProductContext/ProductState';

import './Product.scss';
const URL_IMAGE = 'http://localhost:3000'

const Product = () => {  
  const { products, getProducts,addCart, cart } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  const product = products.map(product => {
    // console.log(product);
    return (
      <article className='projects'>        
        <div key={product.id} className='product-card'>
        <img src={URL_IMAGE + product.image_path} class="card-img-top" alt="..."/>
          <h1>{product.product}</h1>
          <h2>{product.price} €</h2>
          <button onClick={() => addCart(product)}>Add Cart</button>
        </div>
      </article>
    );
  });
  return (
    <>
      <div className='container-card'>{product}</div>
    </>
  );
};

export default Product;
