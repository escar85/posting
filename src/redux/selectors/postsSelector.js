import { createSelector } from 'reselect'

const getState = (state) => state.reducer

export const postsSelector = createSelector(getState, (state) => state)