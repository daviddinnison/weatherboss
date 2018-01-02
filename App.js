import React from 'react';

import {Provider} from 'react-redux';
import store from './store';

import AppGateway from './components/AppGateway';

export default class App extends React.Component {
  render () {  
    return (
          <Provider store={store}>
            <AppGateway/>
          </Provider>
      );
  }
}
