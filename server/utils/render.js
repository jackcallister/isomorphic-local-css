'use strict';

import React from 'react';
import Router from 'react-router';
import { createRedux } from 'redux';
import * as stores from '../../src/stores/index';
import routes from '../../src/routes';

export default (req, res, data) => {

  const redux = createRedux(stores, data);
  const payload = JSON.stringify(redux.getState());

  Router.run(routes, req.originalUrl, function(Handler) {
    var handlerFactory = React.createFactory(Handler);
    var html = React.renderToString(handlerFactory({redux: redux}));

    res.render('index', { html: html, payload: payload });
  });
};
