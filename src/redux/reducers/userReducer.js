import { LOGIN, LOGOUT, CHANGE_SCHEDULE } from "../actions/actionTypes";

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

    case CHANGE_SCHEDULE:
      return {
        ...state,
        user_data: {
          ...state.user_data,
          schedule: {
            work_days: action.payload.work_days,
            work_time: action.payload.work_time,
          },
        },
      };

    default:
      return state;
  }
};

export default userReducer;
