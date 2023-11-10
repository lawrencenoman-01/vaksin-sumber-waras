import { call, put, takeLatest } from "redux-saga/effects";

import { GET_BY_EMAIL, SET_LOGIN, SET_LOGOUT } from "./constants";
import { setLogin } from "./actions";

import { getUserByEmail } from "@domain/api";


import Swal from "sweetalert2";

function userFailed(message) {
  return Swal.fire({
    icon: 'error',
    title: 'Failed Data User',
    text: message,
  });
}

function inputFailed(message) {
  return Swal.fire({
    icon: 'error',
    title: 'Failed Email or Password',
    text: message,
  });
}

function successLogin(message) {
  return Swal.fire({
    icon: 'success',
    title: 'Successfully Login',
    text: message,
  });
}

export function* doLogin ({ user }) {
  try {
    const dataUser = yield call(getUserByEmail, user.email)
    if (dataUser.length > 0) {
      const response = 
        dataUser[0]?.email === user.email &&
        dataUser[0]?.password === user.password

      if (response) {
        yield put(setLogin(dataUser[0]))
        yield call(successLogin, 'Successfully logged in')

        window.location.href = '/'
        // return {
        //   message: `Successfully logged in with the account: ${user.email}`,
        //   status: 200,
        // }
      } else {
        yield call(inputFailed, 'Email or password does not match')
        // throw {
        //   name: "Error",
        //   message: "Email or password does not match",
        // }
      }
    } else {
      yield call(userFailed, 'User with that email does not exist')
      // throw {
      //   name: "Error",
      //   message: "User with that email does not exist",
      // }
    }
  } catch (err) {
    console.error('Fetch Data Failed:', err);
  }
}

export default function* loginSaga() {
  yield takeLatest(GET_BY_EMAIL, doLogin)
}