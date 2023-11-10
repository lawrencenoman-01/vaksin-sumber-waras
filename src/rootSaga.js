import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import HomeSaga from '@pages/Home/saga';
import DetailSaga from '@pages/Detail/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    HomeSaga(),
    DetailSaga()
  ]);
}
