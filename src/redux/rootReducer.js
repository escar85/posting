import { combineReducers } from 'redux'

import { reducer } from './reducer'

const appReducer = combineReducers({
  reducer
})

export const rootReducer = (state, action) => {
    return appReducer(state, action)
  }
