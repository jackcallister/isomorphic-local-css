'use strict';

import React from 'react';
import { Route } from 'react-router';
import App from './components/app';
import Books from './components/books';

const routes = (
  <Route component={App}>
    <Route path="/" component={Books} />
  </Route>
)

export default routes;
