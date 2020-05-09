import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer";

export default combineReducers({
  log: logReducer, // This is our state
  tech: techReducer
});