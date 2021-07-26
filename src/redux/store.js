import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import feedbackReducer from "./feedbackReducer";
import resumeReducer from "./resumeReducer";
import skillReducer from "./skillReducer";
import storageReducer from "./storageReducer";

let reducers = combineReducers({
  auth: authReducer,
  app: appReducer,
  resume: resumeReducer,
  storage: storageReducer,
  skills: skillReducer,
  feedback: feedbackReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
