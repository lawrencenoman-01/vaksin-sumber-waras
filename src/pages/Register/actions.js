import { SET_REGISTER, ADD_REGISTER_REQUEST, GET_ALL_USER } from "./constants";

export const getAllUser = () => ({
  type: GET_ALL_USER,
})

export const setRegister = (register) => ({
  type: SET_REGISTER,
  register,
})

export const addRegisterRequest = (register) => ({
  type: ADD_REGISTER_REQUEST,
  register,
})