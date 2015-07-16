'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import { Provider } from 'redux/react';
import Header from './header';

class App extends React.Component {

  render () {
    return (
      <main>
        <Header/>

        <Provider redux={this.props.redux}>
          {() =>
            <RouteHandler />
          }
        </Provider>
      </main>
    )
  }
}

export default App;
