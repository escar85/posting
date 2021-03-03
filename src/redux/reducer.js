import createReducer from "./createReducer";
import * as reducers from "./reducers";
import * as t from "./actionTypes";

const initState = {
  posts: [],
};

export const reducer = createReducer(initState, {
  [t.CREATE_POST]: reducers.createPostReducer,
  [t.SET_POSTS_FROM_LOCAL]: reducers.setPostsFromLocalReducer,
});
