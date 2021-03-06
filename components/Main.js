//react
import React from 'react';

//react native
import {Router, Route, Schema, Animations, TabBar, Actions, Stack, Scene} from 'react-native-router-flux';

//components
import MainSearch from './MainSearch';
import SearchResults from './SearchResults';
import ErrorPage from './ErrorPage';


export default class Main extends React.Component {
  render () {  
    return (
        <Router>
            <Stack key="root">
                <Scene key="search" component={MainSearch}/>
                <Scene key="results" component={SearchResults}/>
                <Scene key="error" component={ErrorPage}/>
            </Stack>
        </Router>
      );
  }
}
