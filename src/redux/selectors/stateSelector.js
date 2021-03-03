import { createSelector } from 'reselect'

const getState = (state) => state.reducer

export const stateSelector = createSelector(getState, (state) => state)