import { createSelector } from 'reselect';
import { initialState } from '@containers/App/reducer';

const selectDetailState = (state) => state.detail || initialState;

export const selectDetail = createSelector( selectDetailState, (state) => state.vaksin)