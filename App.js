import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import {Provider} from 'react-redux';
import store from './store';

import MainSearch from './components/MainSearch';

export default class App extends React.Component {
  render () {  
    return (
          <Provider store={store}>
            <MainSearch/>
          </Provider>
      );
  }
}
