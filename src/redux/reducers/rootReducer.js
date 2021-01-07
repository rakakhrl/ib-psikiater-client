import { combineReducers } from "redux";
import appReducer from "./appReducer";
import userReducer from "./userReducer";
import appointmentReducer from "./appointmentReducer.js";

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  appointment: appointmentReducer,
});

export default rootReducer;
