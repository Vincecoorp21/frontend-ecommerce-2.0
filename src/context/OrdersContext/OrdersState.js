import { createContext, useReducer } from 'react';

import axios from 'axios';

import OrderReducer from './OrderReducer';

const API_URL = 'http://localhost:8000';

const token = JSON.parse(localStorage.getItem('token'));
const initialState = {
  token: token ? token : null,
  order: [],
};

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, initialState);
  const createOrder = async order => {
    const token = JSON.parse(localStorage.getItem('token'));

    try {
      await axios.post(
        API_URL + '/orders',
        { productsId: order.map(p => p.id) },

        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  const getOrder = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    try {
      const res = await axios.get(API_URL + '/orders/orderproducts', {
        headers: {
          authorization: token,
        },
      });
      dispatch({
        type: 'GET_ORDERS',
        payload: res.data.ordersProduct,
      });      
    } catch (error) {}
  };

  return (
    <OrdersContext.Provider
      value={{
        order: state.order,
        createOrder,
        getOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
