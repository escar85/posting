import { produce } from 'immer'

export const setPostsFromLocalReducer = (state, action) => 
  produce(state, (draft) => {
    draft.posts = action.payload;
  })


