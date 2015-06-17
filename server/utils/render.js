import React from 'react';
import Router from 'react-router';
import routes from '../../build/scripts/server.js';

export default (res, data, path) => {

  Router.run(routes, path, (Handler) => {
    const handlerFactory = React.createFactory(Handler);
    const html = React.renderToString(handlerFactory({ data: data }));

    res.render('index', { html: html });
  });
}
