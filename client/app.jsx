'use strict';

import React from 'react';
import Router from 'react-router';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../src/stores/index';
import routes from '../src/routes';

const redux = createRedux(stores);

document.addEventListener('DOMContentLoaded', () =>

  Router.run(routes, Router.HistoryLocation, function(Handler, route) {
    React.render(<Handler redux={redux} />, document.getElementById('app'));
  })
);
