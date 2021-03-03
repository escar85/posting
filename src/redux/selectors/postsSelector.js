import { createSelector } from 'reselect'
import { stateSelector } from './stateSelector'

export const postsSelector = createSelector(stateSelector, (state) => state.posts)