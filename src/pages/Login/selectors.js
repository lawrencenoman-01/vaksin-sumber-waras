import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectedLoginState = (state) => state.login || initialState

export const selectorLogin = createSelector(selectedLoginState, (state) => state.isLogin)