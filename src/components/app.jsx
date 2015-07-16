'use strict';

import React from 'react';
import Header from './header';

class App extends React.Component {

  render () {
    return (
      <main>
        <Header/>

        {this.props.children}
      </main>
    )
  }
}

export default App;
