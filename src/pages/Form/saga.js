import { createUserData } from '@domain/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { SET_USER_DATA } from './constants';

export function* doCreateUserData({ userData }) {
    try {
        yield call(createUserData, userData)
    } catch (error) {
        console.error('Error while creating vaksin', error)
    }
}

export default function* vaksinSaga() {
    yield takeLatest(SET_USER_DATA, doCreateUserData)
}