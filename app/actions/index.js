import { bindActionCreators } from 'redux';
import * as app from './app';

export function bindActions (dispatch) {
  return {
    app: bindActionCreators(app, dispatch)
  };
}
