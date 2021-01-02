import { LOGIN, LOGOUT } from "../actions/actionTypes";

const initialState = {
  isLogin: false,
  role: "",
  user_data: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        user_data: action.payload.user_data,
        role: action.payload.role,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
