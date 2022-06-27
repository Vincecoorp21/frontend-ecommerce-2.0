import React, { createContext, useReducer } from 'react';
import ReviewsReducer from './ReviewsReducer';
import axios from 'axios';


const initialState = {
  reviews: []  
};

export const ReviewsContext = createContext(initialState);

export const ReviewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReviewsReducer, initialState);
  const API_URL = 'http://localhost:8000';  
  const getReviews = async () => {
    const res = await axios.get(API_URL + '/reviews');

    dispatch({
      type: 'GET_REVIEWS',
      payload: res.data,
    });
  };
  return (
    <ReviewsContext.Provider
      value={{        
        reviews: state.reviews,        
        getReviews
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};