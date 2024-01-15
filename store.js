import { applyMiddleware, createStore } from "redux";
import todosReducer from "./src/services/reducers/todoReducer";
import { thunk } from "redux-thunk";

 const store=createStore(todosReducer,applyMiddleware(thunk))

 export default store;