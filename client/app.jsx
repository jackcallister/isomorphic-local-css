'use strict';

import React from 'react';
import Router from 'react-router';
import routes from '../src/routes';

document.addEventListener('DOMContentLoaded', () =>
  Router.run(routes, Router.HistoryLocation, (Handler) =>
    React.render(<Handler />, document.getElementById('app'))
  )
);
