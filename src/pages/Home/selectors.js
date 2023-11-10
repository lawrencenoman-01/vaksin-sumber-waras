import { createSelector } from 'reselect';
import { initialState } from '@containers/App/reducer';

const selectHomeState = (state) => state.home || initialState;

export const selectHome = createSelector( selectHomeState, (state) => state.vaksin)