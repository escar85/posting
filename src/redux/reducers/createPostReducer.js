import { produce } from 'immer'

export const createPostReducer = (state, action) =>
  produce(state, (draft) => {
    const {id, title, author, date} = action.payload
    console.log(id, title, author, date)
  })


