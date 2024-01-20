import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/reducer";

const rootReducer = combineReducers({
  counter, // <-- 새롭게 추가한 부분
});
const store = createStore(rootReducer);

export default store;
