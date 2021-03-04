import { produce } from 'immer'

export const createPostReducer = (state, action) =>
  produce(state, (draft) => {
    draft.posts.push(action.payload)
    localStorage.setItem('posts', JSON.stringify(draft.posts))
  })


