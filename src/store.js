import { createStore } from "redux";
import root from './reducers/index';
const initialState = {};
const store = createStore(root,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;