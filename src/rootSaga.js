import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import vaksinSaga from '@pages/Form/saga';
import HomeSaga from '@pages/Home/saga';
import DetailSaga from '@pages/Detail/saga';
import registerSaga from '@pages/Register/saga';
import loginSaga from '@pages/Login/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    vaksinSaga(),
    HomeSaga(),
    DetailSaga(),
    registerSaga(),
    loginSaga(),
  ]);
}
