import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import feedbackReducer from "./feedbackReducer";
import resumeReducer from "./resumeReducer";
import skillReducer from "./skillReducer";
import storageReducer from "./storageReducer";
import notificationsReducer from "./notificationsReducer";
import roadmapReducer from "./roadmapReducer";

let reducers = combineReducers({
  auth: authReducer,
  app: appReducer,
  resume: resumeReducer,
  storage: storageReducer,
  skills: skillReducer,
  feedback: feedbackReducer,
  notifications: notificationsReducer,
  roadmap: roadmapReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
