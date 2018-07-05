import { combineReducers } from "redux";
import AuthReducer from "./auth.reducers";
import PostReducers from "./post.reducers";
import LikeReducers from "./like.reducers";

export default combineReducers({
  auth: AuthReducer,
  posts: PostReducers,
  likes: LikeReducers
});