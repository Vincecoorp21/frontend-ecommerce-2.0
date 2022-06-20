import React, { useContext, useEffect } from 'react';
// import { GlobalContext } from '../../Context/GlobalState';
import { ProductContext } from '../../../context/ProductContext/ProductState';

const Product = () => {
  const { products, getProducts } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);
  
  const product = products.map(product => {
    console.log(product);
    return (
      <div key={product.id}>
        <h1>{product.product}</h1>
        <h2>{product.price} €</h2>
      </div>
    );
  });
  return (
    <>
      <h1>{product}</h1>
    </>
  );
};

export default Product;
