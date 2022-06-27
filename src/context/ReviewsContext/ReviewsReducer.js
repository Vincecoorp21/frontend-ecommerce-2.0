const reviews = (state, action) => {
    switch (action.type) {      
      case 'GET_REVIEWS':
        return {
          ...state,
          reviews: action.payload.allreviews,
        };
      default:
        return state;
    }
  };
  export default reviews;