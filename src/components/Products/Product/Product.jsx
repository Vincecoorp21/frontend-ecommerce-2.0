import React, { useContext, useEffect } from 'react';
// import { GlobalContext } from '../../Context/GlobalState';
import { ProductContext } from '../../../context/ProductContext/ProductState';
import './Product.css';

const Product = () => {
  const { products, getProducts } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);

  const product = products.map(product => {
    console.log(product);
    return (
      <article className='projects'>
        <div key={product.id} className='product-card'>
          <h1>{product.product}</h1>
          <h2>{product.price} €</h2>
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
