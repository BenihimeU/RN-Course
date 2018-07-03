import { combineReducers } from "redux";
import AuthReducer from "./auth.reducers";
import PostReducers from "./post.reducers";

export default combineReducers({
  auth: AuthReducer,
  posts: PostReducers
});