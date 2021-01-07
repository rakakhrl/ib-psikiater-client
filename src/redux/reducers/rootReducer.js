import {combineReducers} from "redux";
import appReducer from "./appReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer,
});

export default rootReducer;