import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import vaksinSaga from '@pages/Form/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    vaksinSaga(),
  ]);
}
