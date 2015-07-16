'use strict';

import Location from 'react-router/lib/Location';
import React from 'react';
import { Router } from 'react-router';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../../src/stores/index';
import routes from '../../src/routes';

export default (req, res, data) => {
  res.render('index');
};
