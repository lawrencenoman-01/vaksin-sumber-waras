import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import registerReducer from '@pages/Register/reducer';
import loginReducer, { storedKey as storedLoginState } from '@pages/Login/reducer';
import languageReducer from '@containers/Language/reducer';
import homeReducer , { storedKey as storedHomeState } from '@pages/Home/reducer';
import detailReducer , { storedKey as storedDetailState } from '@pages/Detail/reducer';

import { mapWithPersistor } from './persistence';
import formReducer, { storedKey as storedFormState } from '@pages/Form/reducer';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },
  form: { reducer: formReducer, whitelist: storedFormState },
  home : {reducer : homeReducer , whitelist : storedHomeState},
  detail : {reducer: detailReducer , whitelist: storedDetailState},
  register: { reducer: registerReducer },
  login: { reducer: loginReducer, whitelist: storedLoginState },
};

const temporaryReducers = {
  language: languageReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;
