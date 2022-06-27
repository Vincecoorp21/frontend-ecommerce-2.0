import { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';


const Review = () => {

  const { product } = useContext(ProductContext) 
  
//  console.log(product.Reviews[0].review)
  return <p>{product.Reviews[0].review}<br/></p>;
};

export default Review;