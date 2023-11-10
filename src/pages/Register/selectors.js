import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectedRegisterState = (state) => state.register || initialState

export const selectInfo = createSelector(selectedRegisterState, (state) => state.register)