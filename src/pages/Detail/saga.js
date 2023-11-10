import { call, put, takeEvery , takeLatest} from 'redux-saga/effects';
import { fetchVaksinByID } from '../../domain/api';
import {
  FETCH_VAKSIN_BY_ID_REQUEST,
  UPDATE_VAKSIN_STATUS_REQUEST,
  UPDATE_VAKSIN_STATUS_SUCCESS,
  UPDATE_VAKSIN_STATUS_FAILURE,
} from './constants';
import { updateVaksinStatusByID } from '@domain/api'; // Import your API method for updating vaksin status
import { fetchVaksinSuccess, fetchVaksinFailure } from './actions';
import { updateVaksinStatusSuccess, updateVaksinStatusFailure } from './actions';

function* fetchDetailSaga({payload}) {
  try {
    console.log(payload, 'payload fetch by id ');
    const vaksin = yield call(fetchVaksinByID, payload);
    console.log(vaksin, 'Hasil Vaksin nya');
    yield put(fetchVaksinSuccess(vaksin));
  } catch (error) {
    yield put(fetchVaksinFailure(error.toString()));
  }
}

export function* doUpdateVaksinStatus({id, updatedStatus}) {
    console.log('SAGA')
  try {
    // console.log(payload, '<<<<<<<<< PAYLOAD SAGA')
    console.log(updatedStatus, '<<< updatedStatus saga')
    // Call your API method to update vaksin status here
    const response = yield call(updateVaksinStatusByID, id, updatedStatus);
    console.log(response, "<<<< RESPONSE UPDATE")
    // Dispatch success action with the updated data
    // yield put(updateVaksinStatusSuccess(action.id, action.updatedStatus));
  } catch (error) {
    console.log(error, '<< ERROR')
    // Dispatch failure action with the error
    yield put(updateVaksinStatusFailure(error));
  }
}

export default function* DetailSaga() {
  yield takeEvery(FETCH_VAKSIN_BY_ID_REQUEST, fetchDetailSaga);
  yield takeLatest(UPDATE_VAKSIN_STATUS_REQUEST, doUpdateVaksinStatus);
}
