import { combineReducers } from 'redux';
import app, { initialState as appInitialState } from './app';
import err, { initialState as errInitialState } from './err';

const reducers = {
  app,
  err
};

export const initialState = {
  app: appInitialState,
  err: errInitialState
};

export default combineReducers(reducers);
