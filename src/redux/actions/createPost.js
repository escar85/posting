import * as t from '../actionTypes'

export const onCreatePost = (post) => {
  return {
    type: t.CREATE_POST,
    payload: post,
  }
}