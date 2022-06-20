import React, { createContext, useReducer } from 'react';
import ProductReducer from './ProductReducer';
import axios from 'axios';

const initialState = {
  products: [],
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const API_URL = 'http://localhost:3000';
  const getProducts = async () => {
    const res = await axios.get(API_URL + '/products/productcategorysection');
    console.log("Resultado", res.data);
    dispatch({
      type: 'GET_PRODUCTS',
      payload: res.data,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
