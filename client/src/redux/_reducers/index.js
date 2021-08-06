import { combineReducers } from "redux";
import user from "./user_reducer";
import alarm from "./alarm_reducer";

const rootReducer = combineReducers({
  user,
  alarm,
});

export default rootReducer;
