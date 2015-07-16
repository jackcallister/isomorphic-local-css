'use strict';

import React from 'react';
import Router from 'react-router';
import { createRedux } from 'redux';
import * as stores from '../src/stores/index';
import routes from '../src/routes';

document.addEventListener('DOMContentLoaded', () => {

  const data = JSON.parse(document.getElementById('payload').value);
  const redux = createRedux(stores, data);

  Router.run(routes, Router.HistoryLocation, (Handler, route) => {
    React.render(<Handler redux={redux} />, document.getElementById('app'));
  });
});
