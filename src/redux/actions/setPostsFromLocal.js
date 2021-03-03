import * as t from '../actionTypes'

export const setPostsFromLocal = (posts) => {
  return {
    type: t.SET_POSTS_FROM_LOCAL,
    payload: posts,
  }
}