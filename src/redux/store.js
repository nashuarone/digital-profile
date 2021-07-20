import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import resumeReducer from "./resumeReducer";
import storageReducer from "./storageReducer";

let reducers = combineReducers({
  auth: authReducer,
  app: appReducer,
  resume: resumeReducer,
  storage: storageReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
