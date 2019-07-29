import { createStore } from "redux";
import root from './reducers/index';
const initialState = {};
const store = createStore(root,initialState);
export default store;