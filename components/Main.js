import React from 'react';

import MainSearch from './MainSearch';
import SearchResults from './SearchResults';

import {Router, Route, Schema, Animations, TabBar, Actions, Stack, Scene} from 'react-native-router-flux';

export default class Main extends React.Component {
  render () {  
    return (
            <Router>
              <Stack key="root">
                <Scene key="search" component={MainSearch} title="Search"/>
                <Scene key="results" component={SearchResults} title="Results"/>
              </Stack>
            </Router>
      );
  }
}
