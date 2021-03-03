export const createPostReducer = (state, action) => {
  const {id, title, author, date} = action.payload
  console.log(id, title, author, date)
};
