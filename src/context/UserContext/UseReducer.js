const users = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.token,
      };
    case 'GET_USER_INFO':
      return {
        ...state,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
      };
    case 'REGISTER':
      return {
        ...state,
        //user: action.payload.user,
        message: action.payload.message,
      };
    default:
      return state;
<<<<<<< HEAD
  }
  console.log(action.payload);
=======
  }  
>>>>>>> 678a2e26b257a9400b81181ba862d5461d8f7c78
};

export default users;
