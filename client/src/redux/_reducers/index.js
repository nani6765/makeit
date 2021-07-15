import { combineReducers } from "redux";
import user from "./user_reducer";
import chatRoom from "./chatRoom_reducer.js";

const rootReducer = combineReducers({
  user,
  chatRoom,
});

export default rootReducer;
