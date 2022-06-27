import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import { Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Review = () => {

  const { product } = useContext(ProductContext) 
  const [value, setValue] = useState(product.Reviews[0].rating);
//  console.log(value)
//  console.log(product?.Reviews)
          
  return (<span>
          <span>{product?.Reviews[0].review}</span>
          <Rate  onChange={setValue} value={product.Reviews[0].rating} />
          {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''} */}
        </span>)
};

export default Review;