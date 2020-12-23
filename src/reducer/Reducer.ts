import { listReduce } from "./List.reducer";
import { userReduce } from "./Users.reducer";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
  listState: listReduce,
  userState: userReduce 
});