import createReducer from './createReducer'


const initState = {
    posts: [],
    currentPost: {
        id: '',
        title: '',
        content: '',
        author: '',
        date: '',
    }
}

export const reducer = createReducer(initState, {})