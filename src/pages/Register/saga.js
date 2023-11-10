// saga.js
import { call, put, takeLatest } from 'redux-saga/effects';

import { SET_REGISTER, GET_ALL_USER } from './constants';
import { setRegister } from './actions';

import { createUser, getAllUser } from '@domain/api';


import Swal from 'sweetalert2';

function emailExistAlert(message) {
  return Swal.fire({
    icon: 'error',
    title: 'Registration Failed',
    text: message,
  });
}

function succesCreate(message) {
  return Swal.fire({
    icon: 'success',
    title: 'Success',
    text: message,
  });
}

export function* doRegister({ register }) {
  try {
    const dataUser = yield call(getAllUser)
    console.log(dataUser);
    if (!dataUser.filter((fil) => fil?.email === register.email).length > 0) {
      yield call(createUser, register)
      yield call(succesCreate, 'Successfully Registered')

      window.location.href = '/login'
    } else {
      yield call(emailExistAlert, 'Email is already registered')
      // console.error('Register Failed:', error);
    }
  } catch (error) {
    yield call(emailExistAlert, 'Email is already registered')
  }
}

export default function* registerSaga() {
  yield takeLatest(SET_REGISTER, doRegister);
}
