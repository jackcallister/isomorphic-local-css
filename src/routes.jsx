'use strict';

import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import App from './components/app';
import Books from './components/books';

const routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='books' path="books" handler={Books} />
    <DefaultRoute handler={Books} />
  </Route>
)

export default routes;
