import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../../context/ProductContext/ProductState';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import './Product.scss';
import Reviews from '../../Reviews/Reviews'

const URL_IMAGE = 'http://localhost:8000';

const Product = () => {
  const { products, getProducts, addCart, cart, getProductById } = useContext(ProductContext);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (id) => {
    getProductById(id);    
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    getProducts();    
  }, []);
  
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  console.log('cart', cart);
  const product = products.map(product => {
    console.log(product.Category.category);
    return (
      // <article className='projects'>
      //   <div key={product.id} className='product-card'>
      //     <div>
      //       <img
      //         src={URL_IMAGE + product.image_path}
      //         className='poster'
      //         alt='...'
      //       />
      //     </div>
      //     <div className='card-price'>
      //       <h5 className='card-title'>{product.product}</h5>
      //       <p>{product.price} €</p>
      //     </div>
      //     <div className='card-btn'>
      //       <button onClick={() => addCart(product)}>Add Cart</button>
      //     </div>
      //   </div>
      // </article>

  
  
  
      <div className='product'>
        <div className='product-content'>
          <div class='product-img'>
            <img src={URL_IMAGE + product.image_path} alt='product image' />
          </div>
          <div class='product-btns'>
            <button
              type='button'
              class='btn-cart'
              onClick={() => addCart(product)}
            >
              add to cart
              <span>
                <i class='fas fa-plus'></i>
              </span>
            </button>
            <Button type="primary" class='btn-buy' onClick={()=>showModal(product.id)}>
              Reviews
              <span>
                <i class='fas fa-shopping-cart'></i>
              </span>
            </Button>            
          </div>
        </div>

        <div className='product-info'>
          <div className='product-info-top'>
            <h2 className='sm-title'>{product.Category.category}</h2>
            <div className='rating'>
              <span>
                <i className='fas fa-star'></i>
              </span>
              <span>
                <i className='fas fa-star'></i>
              </span>
              <span>
                <i className='fas fa-star'></i>
              </span>
              <span>
                <i className='fas fa-star'></i>
              </span>
              <span>
                <i className='far fa-star'></i>
              </span>
            </div>
          </div>
          <a href='#' className='product-name'>
            {product.product}
          </a>
          <p className='product-price'>{product.oldprice}</p>
          <p className='product-price'>{product.price}</p>
        </div>

        <div className='off-info'>
          <h2 className='sm-title'>25% off</h2>
        </div>
      </div>
    );
  });
  
  return (
    <>
      <div className='product-items'>{product}</div>
      <Modal title="Reviews" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>       
        <Reviews />
      </Modal>
    </>
  );
};

export default Product;
