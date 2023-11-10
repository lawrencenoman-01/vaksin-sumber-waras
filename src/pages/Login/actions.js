import { GET_BY_EMAIL, SET_LOGIN, SET_LOGOUT } from "./constants";

export const loginUser = (user) => ({
  type: GET_BY_EMAIL,
  user,
})

export const setLogin = (user) => ({
  type: SET_LOGIN,
  user,
})

export const logoutUser = () => ({
  type: SET_LOGOUT,
})