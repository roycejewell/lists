import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';
import Err from 'containers/ErrPage';

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure');
  }
}

export function getRoutes () {
  return (
    <Route path={ '/' } component={ App }>
      <IndexRoute component={ Home } />
      <Route path={ '/*' }component={ Err } />
    </Route>
  );
}
