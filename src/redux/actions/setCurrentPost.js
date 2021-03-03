import * as t from '../../actionTypes'

export const setCurrentPost = (post) => {
  return {
    type: t.SET_CURRENT_POST,
    payload: post,
  }
}