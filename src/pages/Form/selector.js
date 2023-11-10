import { createSelector } from 'reselect';

import { initialState } from '@pages/Form/reducer';

const selectFormState = (state) => state.form || initialState;

export const selectStep = createSelector(selectFormState, (state) => state.step);
export const selectUserData = createSelector(selectFormState, (state) => state.userData);