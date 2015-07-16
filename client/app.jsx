'use strict';

import React from 'react';
import { Router } from 'react-router';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import * as stores from '../src/stores/index';
import routes from '../src/routes';

const history = new BrowserHistory();
const redux = createRedux(stores);

document.addEventListener('DOMContentLoaded', () =>
  React.render(
    <Provider redux={redux}>
      {() =>
        <Router children={routes}
                history={history} />
      }
    </Provider>,
    document.getElementById('app')
  )
);

