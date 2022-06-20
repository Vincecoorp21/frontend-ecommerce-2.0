const products = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload.productSectionCategory,
      };
    default:
      return state;
  }
};
export default products;
