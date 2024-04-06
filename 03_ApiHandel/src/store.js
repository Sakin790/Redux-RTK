import { createStore, applyMiddleware } from "redux";
import { todoReducer } from "../src/redux/reducers/todoReducer.js";
import { thunk } from "redux-thunk";

const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;
