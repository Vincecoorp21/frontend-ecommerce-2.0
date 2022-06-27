import React, { createContext, useReducer } from 'react';
import ProductReducer from './ProductReducer';
import axios from 'axios';
const cart = JSON.parse(localStorage.getItem('cart'));

const initialState = {
  products: [],
  cart: cart ? cart : [],
  product: {},
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const API_URL = 'http://localhost:8000';
  const getProducts = async () => {
    const res = await axios.get(API_URL + '/products/productcategorysection');

    dispatch({
      type: 'GET_PRODUCTS',
      payload: res.data,
    });
  };
  const addCart = product => {
    dispatch({
      type: 'ADD_CART',
      payload: product,
    });
  };
  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
  };
  const deleteOne = i => {
    dispatch({
      type: 'DELETE_ONE',
      payload: i,
    });
  };
  const getProductById = async id => {
    const res = await axios.get(API_URL + '/products/id/' + id);
    dispatch({
      type: 'PRODUCT_ID',
      payload: res.data,
    });
  };
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addCart,
        clearCart,
        getProductById,
        product: state.product,
        deleteOne,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
