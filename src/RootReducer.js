import { combineReducers } from "redux";
import { authReducer } from "./authentication/AuthReducer";
import { feedbackReducer } from "./feedback/feedbackReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  feedback: feedbackReducer
});

export default rootReducer;
